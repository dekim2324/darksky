const bodyParser = require('body-parser');
const mongo = require('./database/db');
const express = require('express');
const app = express();
app.use(bodyParser.text());

app.use(express.static('./client/dist'));


app.post('/weather', (req, res) => {

    mongo.save(req.body);
    res.end();

})


const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`)
});