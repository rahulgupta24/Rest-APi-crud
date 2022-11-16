const express = require('express')
const connection = require('./sql_connector')
const productRoute = require('./routes/product')
const app = express()
var port = 3000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/library',productRoute)



app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})