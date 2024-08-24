'valueOf' in null //false
'valueOf' in undefined //false
'valueOf' in true // false
'valueOf' in 1 // true
'valueOf' in 'toString' //false
'valueOf' in new Number(1) //false   true
'x' in new Number(1) // false
'valueOf' in a // false
'toString' in a // true
'call' in ({}) // false
'call' in (function () { }) //true