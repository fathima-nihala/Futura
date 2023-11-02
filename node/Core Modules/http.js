const { log } = require('console');
var a=require('http')
const { createServer } = require('net')
var b=require('url')

var c=a.createServer((req,res)=>{
    const urls=b.parse(req.url).pathname;

    console.log('****',urls);
    console.log('***',req.params);
    if(urls == '/'){
        res.write('hom page')
        res.end()
    }
    else if(urls == '/abc'){
        res.write('abc page')
        res.end()
    }
    else if(urls == '/another'){
        res.write('another page')
        res.end()
    }else{
        res.write('your page not found')
    }
   

})
c.listen(8800)