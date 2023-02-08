const http = require("http");
const host = "localhost";
const port = 5000;

const reqListener = (req, res) => {
  // // res.setHeader("Content-Type", "text/html");
  // res.statusCode = 200;

  // //request method
  // const { method } = req;

  // if (method === "GET") {
  //   res.end("<h1>Hi</h1>");
  // }
  // if (method === "POST") {
  //   //request body
  //   let body = [];

  //   req.on("data", (chunk) => {
  //     body.push(chunk);
  //   });

  //   req.on("end", () => {
  //     body = Buffer.concat(body).toString();
  //     const { name } = JSON.parse(body);
  //     res.end(`<h1>Hai, ${name}</h1>`);
  //   });
  // }
  // if (method === "PUT") {
  //   res.end("<h1>Hello</h1>");
  // }
  // if (method === "DELETE") {
  //   res.end("<h1>Bonjur</h1>");
  // }

  //Start Testing Routing
  res.setHeader("Content-Type", "application/json");
  res.setHeader("X-Powered-By", "NodeJS");
  const { url, method } = req;

  if (url === "/") {
    if (method === "GET") {
      res.statusCode = 200;
      res.end(
        JSON.stringify({
          message: "Ini adalah homepage",
        })
      );
    } else {
      res.statusCode = 400;
      res.end(
        JSON.stringify({
          message: `Halaman tidak dapat diakses dengan ${method} method`,
        })
      );
    }
  } else if (url === "/about") {
    if (method === "GET") {
      res.statusCode = 200;
      res.end(JSON.stringify({ message: "Ini adalah halaman about" }));
    } else if (method === "POST") {
      let body = [];

      req.on("data", (chunk) => {
        body.push(chunk);
      });

      req.on("end", () => {
        body = Buffer.concat(body).toString();
        const { name } = JSON.parse(body);
        res.statusCode = 200;
        res.end(
          JSON.stringify({ message: `Hai, ${name} Ini adalah halaman about` })
        );
      });
    } else {
      res.statusCode = 400;
      res.end(
        JSON.stringify({
          message: `Halaman tidak dapat diakses dengan ${method} method`,
        })
      );
    }
  } else {
    res.statusCode = 404;
    res.end(
      JSON.stringify({
        message: "Halaman tidak ditemukan",
      })
    );
  }
};

const server = http.createServer(reqListener);

server.listen(port, host, () => {
  console.log(
    `Server running on port ${port} and host ${host} pada http://${host}:${port}`
  );
});
