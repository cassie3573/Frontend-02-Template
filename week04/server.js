const http = require('http');

const server = http.createServer((request, response) => {
	let body = [];
	request.on('error', (err) => {
		console.error(err);
	}).on('data', (chunk) => {
		body.push(chunk.toString());
	}).on('end', () => {
		//body = Buffer.concat(body).toString();
		body = body.join("");
		console.log('body:', body);
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.end(`
		<html>		
			<head>
				<meta charset="utf-8">
				<meta name="x5-fullscreen" content="true">
				<meta name="full-screen" content="yes">
				<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
				<meta name="format-detection" content="telephone=no">
				<title>test</title>
			</head>
			<body>
					<div class="container">
						<div id="aaa">
							<img src="images/1.jpg" alt="" />
						</div>
					</div>
			</body>		
		</html>`);
	});
}).listen(8088);

console.log('server started');