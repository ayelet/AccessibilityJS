const express = require("express");

const app = express();
const port = process.env.PORT || 8000;

const cors = require("cors");

require("./DB/mongoose");

const newRoute = require("./routes/newRoutes.routes");

app.use(express.json());
app.use(cors());
app.use(newRoute);

app.listen(port, () => {
  console.log(`server run at http://localhost:${port}`);
});
