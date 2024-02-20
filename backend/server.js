const express = require("express");
const user_routes = require("./routes/user_routes");
const company_routes = require("./routes/company_routes");
require("dotenv").config();

const app = express();
const port = 8080;

app.use(express.json());
app.use("/api/user", user_routes.router);
app.use("/api/company", company_routes.router);

app.listen(port, () => {
  console.log(`server listening on port ${port}...`);
});
