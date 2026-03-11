let count;
document.write("starting loop"+"<br/>");
for(count=0;count<10;count++){
    document.write("currentcount: "+count);
    document.write("<br/>");

}
document.write("loop stopped!"+"<br>");

document.write("for in loop"+"<br>")
const person ={
    fname: "Ajay",
    Iname: "singh",
    age:25

};
for(let key in person){
    document.write("person details: " + key+":" + person[key]+ "<br>")
}






let age = 20;
if(age >=18){
    document.write("you are adult");

}
else{
    document.write("you are minor");
}


let grade ='A';
document.write("entering switch block<br/>");
switch(grade){
    case 'A': document.write("good job");
    break;

 case'B': document.write("good job");
    break;
    case 'c': document.write("pretty good");
    break;
    case 'd': document.write("passes");
    break;
    case 'e': document.write("fail");
    break;
}