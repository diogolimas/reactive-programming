const http = require('http');

http.createServer(function (req,res) {

    res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
	res.setHeader('Access-Control-Allow-Headers', '*');
    
    if ( req.method === 'OPTIONS' || req.method === 'GET' ) {
		res.writeHead(200);
	}

    const matchURL = /^\/response\/(.+)\/delay\/(\d+)\/?$/

    // http:localhost:3333/response/{ "data": "Hello World" }/delay/1000/

    if(!matchURL.test(req.url)) return res.end();

    const [, response, delay] = matchURL.exec(req.url);

    const jsonResponse = JSON.parse(decodeURIComponent(response));

    setTimeout(() => {
        res.write(JSON.stringify(jsonResponse));
        res.end();
    },  +delay);

}).listen(3000)
