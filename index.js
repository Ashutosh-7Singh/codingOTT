const http=require("http")
const query=require("querystring")
const server=http.createServer((request,response)=>{
  
  
    var userData=query.parse(request.url.replace("/?","  "))
console.log(userData);

response.end(); 


})

server.listen(8080)