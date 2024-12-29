const http=require("http")
const query=require("querystring")
const server=http.createServer((requrest,response)=>{
    var userData= ""
    requrest.on('data',(chunks)=>{
        userData += chunks.toString();
    })

requrest.on('end',()=>{
    const data=query.parse(userData);
  var username=data.username;
  var password=data.password;
  if(username== "ashu@gmail.com" && password == "111ashu") 
  {
    response.writeHead(401,{
        'Content-Type':"application/json"
    });
    const successMessage= JSON.stringify({
        message:"user Authenticated"
    })
    response.write(successMessage)
  }
  else
  {
   
    const errorMessage=JSON.stringify({
        message:"User unAuthenticated"
    })
    response.write(errorMessage)
  }





    response.end();
    
})


})

server.listen(8080)