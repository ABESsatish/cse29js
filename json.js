var text='{"employee": {"name": "John", "age": 30, "city": "New York"}}';

var obj = JSON.parse(text);
document.write(obj.employee.name); // Output: John
document.write(obj.employee.age); // Output: 30
document.write(obj.employee.city); // Output: New York

var number =[1,2,3,4];
var result=number.map(n=>n*2);
document.write(result); // Output: [2, 4, 6, 8]


var number =[10,20,30,40];
var result=number.filter(n=>n>20);
document.write(result); // Output: [30, 40]


var number =[10,20,30];
var result=number.reduce((total,n)=>total+n,0);
document.write(result); // Output: 60