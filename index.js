import http from 'http'

const listner = (req, res) => {
    res.end('Test')
}

const server = http.createServer(listner)

server.listen(3000)