var app = require("express")();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const cors = require("cors");

app.use(cors());

io.of("/chat").on("connection", function(socket) {
  console.log("CONNECTED!!!");
  //   socket.on("chat message", function(msg) {
  //     io.emit("chat message", msg);
  //   });
});

app.get("/", function(req, res, next) {
  res.status(200).json("hi");
});

server.listen(process.env.PORT || "3000", function() {
  console.log("listening on *:3000");
});
