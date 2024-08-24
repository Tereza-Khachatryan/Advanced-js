delete ({}).valueOf //true
delete 1 //true
delete 1.2 //true
delete 1.2.toString  //false
delete a.x //error
a.y = 3; console.log(delete a.y); //error
delete f //true
delete z //true
var x = 3; console.log(delete x) // true; console.log(x) //3
y = 4; console.log(delete y) //true; console.log(y) //4