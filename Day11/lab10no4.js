var message = 'Hello World';
function logMessage() {
    console.log(this.message);
}
logMessage();
//output: undefined  - it runs in node.
//Becuase this keyword is global object and var message is not global.In node js, function is  wrapped. 

//output: Hello World - it runs in browser. 
//Because this keyword means window & var message is declared in global.


