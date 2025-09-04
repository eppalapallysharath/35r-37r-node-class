const http = require("http");
const url = require("url");

const usersInfo = [
  { name: "sharath", id: 1, role: "user" },
  { name: "tony", id: 2, role: "manager" },
];
const server = http.createServer((req, res) => {
  const parsedURL = url.parse(req.url, true);
  console.log(parsedURL);
  console.log(req.url);
  const path = req.url.split("/");
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200);
    res.write("im server running healthy");
    return res.end();
  } else if (parsedURL.pathname === "/users" && req.method === "GET") {
    const query = Object.keys(parsedURL.query);
    if (query.length > 0) {
      const userroles = usersInfo.filter(
        (item) => item.role == parsedURL.query.role
      );
      console.log(parsedURL.query);

      res.write(JSON.stringify(userroles));
      return res.end();
    } else {
      res.writeHead(200);
      res.write(JSON.stringify(usersInfo));
      return res.end();
    }
  } else if (
    parsedURL.pathname === `/users/${path[2]}` &&
    req.method === "GET"
  ) {
    const data = usersInfo.find((item) => item.id == path[2]);
    res.writeHead(200);
    res.write(data === undefined ? "not found" : JSON.stringify(data));
    return res.end();
  } else if (parsedURL.pathname == "/addUser" && req.method == "POST") {
    res.writeHead(201);
    res.write("user added successfully");
    return res.end();
  } else if (parsedURL.pathname == "/deleteUser" && req.method == "DELETE") {
    res.writeHead(204);
    res.write("user deleted");
    return res.end();
  } else {
    res.writeHead(404);
    res.write("api not found");
    return res.end();
  }
});

server.listen(8080, () => {
  console.log("server started on port 8080");
});
