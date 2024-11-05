import express from "express";
import cors from 'cors'
import {config} from "dotenv";

config()

export const app = express();

app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
    res.send("hello page")
})

app.get('/student/:id', (req, res) => {
    res.send(`hello id: ${req.params.id} `)
})

app.get('/student', (req, res) => {
    res.send(`hello age: ${req.query.age} `)
})

app.post('/student', (req, res) => {
    res.status(201).json(req.body)
})

app.delete('/student/:id', (req, res) => {
    res.status(204).json(`${req.params.id} deleted`)
})

app.put('/student/:id', (req, res) => {
    res.status(400).json({id: req.params.id, ...req.body})
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


