import jsonServer from "json-server";

const server = jsonServer.create();
const router = jsonServer.router("db.json"); // make sure db.json is in root
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 10000;

server.use(middlewares);
server.use(router);

server.listen(PORT, () => {
  console.log(`✅ JSON Server is running on port ${PORT}`);
});
