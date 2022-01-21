const path = require('path')
const hbs = require('hbs')
const express = require('express')


const app = express()

const port = process.env.PORT || 3000

//paths :
//Public for static
const publicDirectory = path.join(__dirname, '../public-directory')
const viewsPath = path.join(__dirname, "../template/views")

//view engine
app.use(express.static(publicDirectory))
app.set('view engine', 'hbs')
app.set('views', viewsPath)
// for sending data for static pages:

// app.get('/*', (req, res)=>{
//     res.send({
//         errorCode : "404",
//         message : "Connection not estblished"
//     })
// })

app.get('', (req,res)=>{
    res.render('index',{
        test: true
    })
})

app.get('*', (req,res)=>{
    res.render('errorPage',{
        test: true
    })
})


app.get('/Projects/*', (req,res)=>{
    res.render('errorPage',{
        test: true
    })
})




app.listen(port, ()=>{
    console.log('Server is Listening')
})