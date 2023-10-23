// const express = require('express')
// const app = express()
// const PORT = 3000;

// app.get('/hi', (req,res)=>{
//     res.send(`<h1>Welcome to home page</h1> <a href="/about">Go to About page</a>`)
// })
// app.get('/about', (req,res)=>{
//     res.send(`
//     <input type="text" placeholder="Username"/> 
//     <button><a href="/help">Click me</a></button>
//     <button><a href="/hi">Go to Home Page</a></button>
//     `)
// })
// app.get("/help", (req,res)=>{

//     // one user data enter push in object

//     res.send({
//         name:"uzair",
//         email:"uzair@gmail.com"
//     })

//     // multiple user data push in array

//     // res.send([
//     //     {
//     //         name:"uzair",
//     //         email:"uzair@gmail.com"
//     //     },
//     //     {
//     //         name:"uzair",
//     //         email:"uzair@gmail.com"
//     //     },
//     //     {
//     //         name:"uzair",
//     //         email:"uzair@gmail.com"
//     //     }
//     // ])
// })

// app.listen(PORT, ()=>{
//     console.log("connect");
// })


const express = require('express')
const path = require("path")

const app = express()
// const publicpath = path.join(__dirname, 'public')
app.get('/',(__ , res)=>{
    res.sendFile(`${publicpath}/index.html `)
})
app.get('/aboutme',(__ , res)=>{
    res.sendFile(`${publicpath}/aboutme.html `)
})
app.get('/help',(__ , res)=>{
    res.sendFile(`${publicpath}/home.html `)
})
app.get('*',(__ , res)=>{
    res.sendFile(`${publicpath}/nopage.html `)
})

app.use(express.static(publicpath))
app.listen(5000)