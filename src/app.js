const path = require('path')

const express = require('express')
const app = express()

const port = process.env.PORT || 3000

//paths :
//Public for static
const publicDirectory = path.join(__dirname, '../public-directory')
app.use(express.static(publicDirectory))

app.listen(port, ()=>{
    console.log('Server is Listening')
})