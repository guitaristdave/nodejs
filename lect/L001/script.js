const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Запрос получен");

  if (req.url === "/") {
    res.writeHead(200, {
      "Content-type": "text/html; charset=UTF-8",
    });
    res.end("<h1>WELCOME MUTHAFUCKA!</h1>");
  } else if (req.url === "/about") {
    res.writeHead(200, {
      "Content-type": "text/html; charset=UTF-8",
    });
    res.end("<h1>WELCOME MUTHAFUCKA TO ABOUT PAGE!</h1>");
  } else {
    res.writeHead(404, {
        "Content-type": "text/html; charset=UTF-8",
      });
      res.end("<h1>404</h1>");
  }
});

const port = 3000;

server.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
