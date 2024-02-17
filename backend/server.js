const express = require("express");
const bodyParser = require("body-parser");

//routes
const user_routes = require("./routes/user_routes");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.json());

app.use("/api/users", user_routes.router);

//Database connection 


app.listen(port, () => {
  console.log(`server listening on port ${port}...`);
});
