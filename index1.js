// const http=require("http")
// const server=http.createServer((request,response)=>{
//     response.write("success");
//     response.end();

// })

// server.listen(8080)

const http=require("http")
// console.log(http.STATUS_CODES);

const server=http.createServer((request,response)=>{
//operation

const date=new Date();
const current_date= date.toLocaleDateString();

//header info 
response.writeHead(200,{
    'Content-Type':'application/json'
})

// response in json format

const result={
     current_date:current_date
}

const string_data=JSON.stringify(result)
response.write(string_data);

// disconect user

response.end();
})

server.listen(8080)
