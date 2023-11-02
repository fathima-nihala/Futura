//core module
var a=require('http')

a.createServer(function(req,res){
        res.write('kizginim')
        res.end()
}).listen(5000)