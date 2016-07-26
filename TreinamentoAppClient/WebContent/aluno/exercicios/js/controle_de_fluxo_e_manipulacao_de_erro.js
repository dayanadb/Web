/**
 * 
 */
var a = 6;
var resultado_if;
var resultado_switch;

if (a > 0 && a <= 3) {
    resultado_if = "Situação A";
}
else if (a > 3 && a < 6) {
    resultado_if = "Situação B";
}
else {
    resultado_if = "Situação C";
}
console.log(resultado_if);
var string_switch = "Talvez";
switch (string_switch) {
case "Sim":
    resultado_switch = "Mis";
    break;
case "Não":
    resultado_switch = "Oãn";
    break;
case "Talvez":
    resultado_switch = "Zevlat";
    break;
default:
    resultado_switch = "none";
}
console.log(resultado_switch);
