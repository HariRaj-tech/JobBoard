const express = require("express");
const user_routes = require("./routes/user_routes");

const app = express();
const port = 3000;

app.use(express.json());
app.use("/api/users", user_routes.router);

app.listen(port, () => {
  console.log(`server listening on port ${port}...`);
});
