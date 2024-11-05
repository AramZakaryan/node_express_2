import express from "express";
import cors from 'cors'

const app = express();

app.use(cors())
app.use(express.json())

const port = 3030;

app.get('/', (req, res) => {
    res.send("hello page")
})

// app.get('/home', (req, res) => {
//     fs.readFile('pages/home.html', (err, data) => {
//                 if (err) {
//                     res.write('Something went wrong');
//                     res.end();
//                 } else {
//                     res.write(data)
//                     res.end();
//                 }
//             });
//     res.send("hello")
// })

app.get('/student', (req, res) => {
    res.send("student page")
})

app.get('/courses', (req, res) => {
    res.send("courses page")
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})


// const http = require('http');
// const fs = require('fs');
//
// const server = http.createServer((req, res) => {
//     switch (req.url) {
//         case "/":
//             res.write("hello");
//             res.end();
//             break
//         case "/home":
//             fs.readFile('pages/home.html', (err, data) => {
//                 if (err) {
//                     res.write('Something went wrong');
//                     res.end();
//                 } else {
//                     res.write(data)
//                     res.end();
//                 }
//             });
//             break
//         case "/student":
//             res.write("user student");
//             res.end();
//             break
//         case "/courses":
//             res.write("courses page");
//             res.end();
//             break
//         default:
//             res.write("404 not found");
//             res.end();
//     }
//
// })
//
// server.listen(3030);