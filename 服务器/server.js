
const express = require("express");

// 启动 Express 服务器
const app = express();
app.get("/", (req, res) => {
  res.send("Hello World from Express!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
