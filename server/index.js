<<<<<<< HEAD
const express = require('express');
const newRoute = require('./routes/newRoutes.routes')
=======
const express = require("express");
>>>>>>> 277634a53d62061e73341b090cb840d3ce56509d
const app = express();
const port = process.env.PORT || 8000;

const cors = require('cors');
<<<<<<< HEAD
require('./DB/mongoose')
=======
const newRoute = require('./routes/newRoutes.routes')


>>>>>>> 277634a53d62061e73341b090cb840d3ce56509d
app.use(express.json());
app.use(cors());
app.use(newRoute);

app.listen(port, () => {

    console.log(`server run at http://localhost:${port}`);
})

