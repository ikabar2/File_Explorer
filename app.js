const http = require("http");
const port = process.env.port || 3000;
const server = http.createServer(respond);
server.listen(port, () => {
    console.log('process listening on port: ${port}');
});