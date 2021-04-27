const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const cors = require('cors');
const newRoute = require('../routes/newsRoute')

app.use(express.json());
app.use(cors());
// app.route('/news')
app.use(newRoute);

app.listen(port, () => {
    console.log(`server start at ${port}`);
})