const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    switch (req.url) {
        case "/":
            res.write("hello");
            res.end();
            break
        case "/home":
            fs.readFile('pages/home.html', (err, data) => {
                if (err) {
                    res.write('Something went wrong');
                    res.end();
                } else {
                    res.write(data)
                    res.end();
                }
            });
            break
        case "/student":
            res.write("user student");
            res.end();
            break
        case "/courses":
            res.write("courses page");
            res.end();
            break
        default:
            res.write("404 not found");
            res.end();
    }

})

server.listen(3030);