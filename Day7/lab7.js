
let group = {

    title: "Our Group",

    students: ["John", "Pete", "Alice"],

    showList: function () {

        this.students.forEach(function (student) {

            console.log(this.title + ": " + student //Qus 
            );

        }
        .bind(this)
        );

    }

};

group.showList();



 let i = 0;

setTimeout(() => console.log(i), 100); // ? 0

console.log("Before loop:",i);
// assume that the time to execute this function is >100ms

for(let j = 0; j < 100000000; j++) {

  i++;

} 
console.log("after loop:",i);