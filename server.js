var app = require("express")();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const port = process.env.PORT || 3000;
const cors = require("cors");

app.use(cors());

io.of("/chat").on("connection", async function(socket) {
  socket.emit("test", "CONNECTED TO SOCKET");
});

app.get("/", function(req, res, next) {
  res.status(200).json("hi");
});

server.listen(port, function() {
  console.log(`listening on ${port}`);
});
