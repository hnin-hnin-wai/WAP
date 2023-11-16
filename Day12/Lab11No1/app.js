const dns=require('dns');
dns.resolve4('www.miu.edu',(error,data)=> console.log("IP address is:",data));