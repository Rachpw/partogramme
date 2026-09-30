// Petit serveur statique pour tester le site en local : node serve-parto.js
// (Python n'est pas installe et npx est bloque par la strategie d'execution PowerShell.)
const http = require('http');
const fs = require('fs');
const path = require('path');
const root = __dirname;
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.png': 'image/png' };
http.createServer((req, res) => {
  let p = path.join(root, decodeURIComponent(req.url.split('?')[0].replace(/\/+$/, '') || '/'));
  if (fs.existsSync(p) && fs.statSync(p).isDirectory()) p = path.join(p, 'index.html');
  fs.readFile(p, (err, data) => {
    if (err) { res.statusCode = 404; res.end('404'); return; }
    res.setHeader('Content-Type', types[path.extname(p).toLowerCase()] || 'application/octet-stream');
    res.end(data);
  });
}).listen(8000, () => console.log('Serveur pret sur http://localhost:8000'));