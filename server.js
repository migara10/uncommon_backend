const express = require('express');
const app = express();

const bodyParser = require('body-parser'); //request data undefined fix


const item = require('./routes/items');



const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use('/item', item);

app.listen(port, () => {
    console.log(`Server is Starting in: ${port}`)
})

