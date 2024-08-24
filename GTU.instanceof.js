null instanceof Object  //false
true instanceof Boolean //true
false instanceof Boolean //true
1 instanceof Number //true
NaN instanceof Number //false
'hello' instanceof String //true
(function () { }) instanceof Function //true
(function () { }) instanceof Object  //true
a instanceof Object //flase
new Number(1) instanceof Number //true
new Number(NaN) instanceof Object // true
/hello/img instanceof RegExp  //true
/hello/img instanceof Function //false
/hello/img instanceof Object //true
