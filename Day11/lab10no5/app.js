const getName = require('./pattern1');

getName();

//error: getName is not a function
//When module.exports create empty object ,and getName is assinged by function in pattern1.js.
//if I change getName.getName(), the out put is  Josh Edward.