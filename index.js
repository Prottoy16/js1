var student1= {
    name : "Prottoy",
    age : 23,
    cgpa : 2.56,
    language : ["Bangla","English","Hindi"]
}

var student2={
    name : "Mehedi",
    age : 24,
    chpa : 2.53,
    language : ["Bangla","Portuguese","Urdu"]
}

document.write(student1.name);

function student(name,age,cgpa,lang){
this.name=name;
this.age=age;
this.cgpa=cgpa;
this.lang=lang;
}
document.write("<br>");
var student3=new student("Sakib",21,1.65,["Bangla","Chinese","Japanese"]);
var student4=new student("Momin",25,2.75,["Bangla","English","Japanese"]);
var student5=new student("Rakib",27,2.61,["Bangla","Chinese","Korean"]);

document.write(student3.cgpa + "<br>");
document.write(student4.lang + "<br>");