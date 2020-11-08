let http = require('http');
let https = require('https');
let unzipper = require("unzipper");

let querystring = require('querystring');

//2.auth路由：接收code，用code+client_id+client_secret换token

function auth(request, response){
    let query = querystring.parse(request.url.match(/^\/auth\?([\s\S]+)$/)[1]);
    getToken(query.code, function(info){
        console.log(info);
        //response.write(JSON.stringify(info));
        response.write(`<a href="http://localhost:8083/?token=${info.access_token}">publish</a>`);
        response.end();
    });
}

function getToken(code, callback){
    let request = https.request({
        hostname: "github.com",
        path: `/login/oauth/access_token?code=${code}&client_id=Iv1.6585a4081a9e174e&client_secret=a117ff6d08306374caa2dc2afdc0f55118f34f0a`,
        port: 443,
        method: "POST"
    }, function(response){
        let body = "";
        response.on("data", chunk => {
            body += (chunk.toString());
        })
        response.on("end", chunk => {
            callback(querystring.parse(body));
        })

    });
    request.end();
}

//4.publish路由：用token获取用户信息，检查权限，接受发布

function publish(request, response){
    let query = querystring.parse(request.url.match(/^\/publish\?([\s\S]+)$/)[1]);
    getUser(query.token, info => {
        if(info.login === "cassie3573") {
            request.pipe(unzipper.Extract({ path: '../server/public/' }));
            request.on('end', function(){
                response.end('success!');
                console.log("success finish!");
            });
        }
    })

    //request.pipe(outFile);

    //request.pipe(unzipper.Extract({ path: '../server/public/' }));
}

function getUser(token, callback) {
    let request = https.request({
        hostname: "api.github.com",
        path: `/user`,
        port: 443,
        method: "GET",
        headers:{
            Authorization: `token ${token}`,
            "User-Agent": "toy-publish-zcy"
        }
    }, function(response){
        let body = "";
        response.on("data", chunk => {
            body += (chunk.toString());
        })
        response.on("end", chunk => {
            callback(JSON.parse(body));
        })
    });
    request.end();
}

http.createServer(function(request, response){
    if(request.url.match(/^\/auth\?/))
        return auth(request, response);
    if(request.url.match(/^\/publish\?/))
        return publish(request, response);
    //console.log("request");

    //let outFile = fs.createWriteStream("../server/public/tmp.zip");

    //request.pipe(outFile);

    //request.pipe(unzipper.Extract({ path: '../server/public/' }));
    
}).listen(8082);
