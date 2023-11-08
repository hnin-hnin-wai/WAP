/* Exercise 3: Write a function printNumbers(from, to) that outputs a number every second,
 starting from from and ending with to. */

 function printNumbers(from,to){

    let currentTime=from;
    console.log(currentTime);  
    setInterval(()=>{
      
      if(currentTime==to){
        clearInterval(currentTime);
      }
      currentTime++;
    },1000);
  
   }
  
   printNumbers(2,5);