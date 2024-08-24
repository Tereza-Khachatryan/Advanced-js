Number('0x077') === 0x77 //true 
Number('077') === '077' // false  
Number(' 12 ')    //12
isNaN(' ')  //false 
+'' //0 
.1 + .2 == .3 //false 
29391392494 + 2 == 29391392494 // false 
29391392494 + 1 == 29391392494 // false 
0 === +0 //true 
+0 === -0 //true 
1 / '2' //0.5
1 / 0  // Infinity
0 / 0 // NaN
+true  // 1
+false // 0
+null  // 0
+undefined//NaN
parseInt('.2') // 2   NaN
parseInt('077a')  //  77
parseInt('0x77a') // ---  1914
parseInt('I am the best value - said Infinity')  //  NaN
parseFloat('I am the best value - said Infinity') // NaN
parseInt('Infinity is the best value') // NaN
parseFloat('Infinity is the best value') //  Infinity
parseFloat('12.78ff') // 12     12.78


"" + 1 + 0 // 10  10
"" - 1 + 0 // -1   -1
true + false // false    1 
6 / "3" // 2  2
"2" * "3" //6   6
4 + 5 + 'px' // 9px   9px
"$" +4 + 5 // $45   $45
"4" -2 // 2  2 
"4px" -2 //NaN  NaN
7 / 0// 7   Infinity
"-9" + 5 // -95   -95
"-9" - 5 //-14     -14 
null + 1 // NaN   1
undefined + 1 //NaN  NaN