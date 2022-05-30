// server file 

const http = require('http')

const fs = require('fs')

http.createServer((req, res) => {
  fs.readFile('index.html', (err, data) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(data)
    res.end()
  })
  fs.readFile('main.js', (err, data) => {
    res.writeHead(200, {'Content-Type': 'text/javascript'})
    res.write(data)
    res.end()
  })
}).listen(8000)





