/**
 * 
 */

var a = 0;
//for loop begin //
for (var i = 0; i < 10; i++) {
    console.log(i);
}
//for loop end //


//do-while begin //
do {
    a++:
} while (a < 10);
//do-while end //


//while begin //
while (a < 20) {
    console.log(a);
    a++;
}
//while end //


//continue begin //
for (var c; c < 10; c++) {
    if (c % 2 == 0) {
        continue;
    }
}
//continue end //


//break begin //
for (var c; c < 10; c++) {
    if (c % 2 == 0) {
        break;
    }
}
//begin end //

//for-in begin (para iterar nos elementos de um object) //
var person = {fname:"John", lname:"Doe", age:25};

var text = "";
var x;
for (x in person) {
    text += person[x];
} //output: JohnDoe25
//for-in end //

//for-of begin (usado para iterar em um array, map, ...) //
var iterable = [10, 20, 30];

for (var value of iterable) {
  console.log(value);
}//output: 10 20 30
//for-of end //


/**
 * CONSIDERAÇÕES:
    Perfeito!
  */
