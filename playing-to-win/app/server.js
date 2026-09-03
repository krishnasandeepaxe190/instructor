#!/usr/bin/env node
/* Playing to Win — Cascade Studio backend.
 * Zero-dependency Node server: serves the app and a tiny JSON document
 * store (the same doc/collection shapes the frontend's other backends use).
 *
 *   node server.js [port]        # default 8080, binds 0.0.0.0
 *
 * State persists to data.json next to this file. Delete it (or hit
 * POST /api/reset) to start a fresh workshop.
 */
"use strict";
const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = Number(process.argv[2]) > 0 ? Number(process.argv[2]) : 8080;
const DATA = path.join(__dirname, "data.json");
const INDEX = path.join(__dirname, "index.html");

let store = {};
try { store = JSON.parse(fs.readFileSync(DATA, "utf8")); } catch (e) {}
let saveQueued = false;
function persist() {
  if (saveQueued) return;
  saveQueued = true;
  setTimeout(() => {
    saveQueued = false;
    fs.writeFile(DATA, JSON.stringify(store), () => {});
  }, 250);
}

const OK_PATH = /^[A-Za-z0-9_\-.~:@+]+(\/[A-Za-z0-9_\-.~:@+]+)*$/;
function merge(a, b) {
  for (const k of Object.keys(b)) {
    if (b[k] && typeof b[k] === "object" && !Array.isArray(b[k]) &&
        a[k] && typeof a[k] === "object" && !Array.isArray(a[k])) merge(a[k], b[k]);
    else a[k] = b[k];
  }
}
function body(req) {
  return new Promise((res, rej) => {
    let buf = "";
    req.on("data", c => { buf += c; if (buf.length > 512 * 1024) req.destroy(); });
    req.on("end", () => { try { res(buf ? JSON.parse(buf) : {}); } catch (e) { rej(e); } });
  });
}
function send(res, code, obj) {
  const s = JSON.stringify(obj);
  res.writeHead(code, { "Content-Type": "application/json", "Cache-Control": "no-store" });
  res.end(s);
}

http.createServer(async (req, res) => {
  const u = new URL(req.url, "http://x");
  try {
    if (u.pathname === "/api/ping") return send(res, 200, { ok: true });

    if (u.pathname === "/api/doc") {
      const p = u.searchParams.get("path") || "";
      if (!OK_PATH.test(p) || p.split("/").length % 2 !== 0) return send(res, 400, { error: "bad path" });
      if (req.method === "GET") return send(res, 200, { data: store[p] || null });
      if (req.method === "PUT") { store[p] = await body(req); persist(); return send(res, 200, { ok: true }); }
      if (req.method === "PATCH") {
        store[p] = store[p] || {};
        merge(store[p], await body(req)); persist();
        return send(res, 200, { ok: true });
      }
    }

    if (u.pathname === "/api/col" && req.method === "GET") {
      const p = u.searchParams.get("path") || "";
      if (!OK_PATH.test(p) || p.split("/").length % 2 !== 1) return send(res, 400, { error: "bad path" });
      const depth = p.split("/").length + 1;
      const docs = Object.keys(store)
        .filter(k => k.startsWith(p + "/") && k.split("/").length === depth)
        .sort()
        .map(k => ({ id: k.split("/").pop(), ...store[k] }));
      return send(res, 200, { docs });
    }

    if (u.pathname === "/api/reset" && req.method === "POST") {
      store = {}; persist();
      return send(res, 200, { ok: true });
    }

    if (u.pathname === "/" || u.pathname === "/index.html") {
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" });
      return fs.createReadStream(INDEX).pipe(res);
    }
    send(res, 404, { error: "not found" });
  } catch (e) {
    send(res, 500, { error: "server error" });
  }
}).listen(PORT, "0.0.0.0", () => {
  const nets = require("os").networkInterfaces();
  const ips = Object.values(nets).flat().filter(n => n && n.family === "IPv4" && !n.internal).map(n => n.address);
  console.log(`Cascade Studio up:  http://localhost:${PORT}`);
  ips.forEach(ip => console.log(`  room joins via:   http://${ip}:${PORT}`));
});
