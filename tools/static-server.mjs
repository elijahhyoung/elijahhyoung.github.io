import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const port = Number(process.env.PORT || 8787);

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".pdf": "application/pdf",
  ".mp4": "video/mp4",
  ".pptx": "application/vnd.openxmlformats-officedocument.presentationml.presentation"
};

const server = http.createServer((request, response) => {
  let requestPath = decodeURIComponent(request.url.split("?")[0]);
  if (requestPath === "/") requestPath = "/index.html";

  let filePath = path.normalize(path.join(root, requestPath));
  if (!filePath.startsWith(root)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  fs.stat(filePath, (statError, stat) => {
    if (!statError && stat.isDirectory()) filePath = path.join(filePath, "index.html");

    fs.readFile(filePath, (readError, data) => {
      if (readError) {
        fs.readFile(path.join(root, "404.html"), (notFoundError, notFoundData) => {
          response.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
          response.end(notFoundError ? "Not found" : notFoundData);
        });
        return;
      }

      response.writeHead(200, {
        "Content-Type": types[path.extname(filePath).toLowerCase()] || "application/octet-stream"
      });
      response.end(data);
    });
  });
});

server.listen(port, "127.0.0.1", () => {
  console.log(`http://127.0.0.1:${port}`);
});
