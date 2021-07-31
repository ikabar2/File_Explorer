const { url } = require("url");
const path require('url');

const pathfromStatic = path,
    join(__dirname, (..), static);
const respond = (request, respond) => {
    respond.write('respond working');
    respond.end();
    let pathname = url.parse(request.url, true).pathname;
    if (pathname === '/ford,png') {
        return false;
    }
    console.log(pathname);
    pathname = (decodeURIComponent(pathname));


}
module.exports = respond;