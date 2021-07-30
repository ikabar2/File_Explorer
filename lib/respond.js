const { url } = require("inspector");

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