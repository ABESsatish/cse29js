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

