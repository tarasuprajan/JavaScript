////////////////////////////////
Slice,Substring,Substr
///////////////////////////////
var city="Washington"
undefined
city.slice(1)
"ashington"
city.slice(3)
"hington"
city.slice(1,3)
"as"
city.substring(1)
"ashington"
city.substring(3)
"hington"
city.substring(1,3)
"as"
city.substr(1)
"ashington"
city.substr(3)
"hington"
city.substr(1,3)
"ash"
//*Both slice and substring work same in case of single positive values and in range of positive values
//(If given 2 values in paranthesis), They start
//from the first position and end at second position.
//*In case of substr, it behaves same for positive single values. In case of two values(given in paranthesis)
//it starts from the first value and gives the length from that position as per the second value.



////////////////////////////
       Negative Values
////////////////////////////
var city="Washington"
undefined
city.slice(-1)
"n"
city.substring(-1)
"Washington"
//Slice works with single digit negative values, It gives digits from the end of the string.
//Substring does not work with single digit negative values.


city.slice(-1,-3)
""
city.substring(-1,-3)
""
//Both slice and substring don't work in case of two negative values defined in a string.

city.slice(1,-3)
"ashing"
city.substring(1,-3)
"W"
//In case of +ve,-ve
//*slice starts from 1st digit and gives the characters until it matches the second digit
//*substring only gives the positive value chacter from the string.



city.slice(-1,3)
""
city.substring(-1,3)
"Was"
city.substring(-2,5)
"Washi"
//In case of -ve,+ve
//*slice doesnot work.
//*substring only gives the positive value chacter from the string.

city.slice(-3,-1)
"to"
city.slice(-5,-1)
"ngto"
city.slice(-5,-2)
"ngt"       
city.substring(-3,-1)
""
//*In case of both -ve numbers,first digit is smaller and second is larger ,slice operation will work, It will give
//the characters from first to second digits.
//*substring does not work in this case.

var city="Washington"
undefined
city.substr(-1)
"n"
city.substr(-3)
"ton"
city.substr(-1,-3)
""
city.substr(-3,-1)
""
city.substr(-3,1)
"t"
city.substr(-5,6)
"ngton"
city.substr(1,-3)
""
//substr in case of single -ve value will give the characters of that position in the string.
//substr in case of both -ve values don't work.
//substr in case of (-ve,+ve) values :
//*will give the values starting from first position and the number of characters as per the second position.
//substr in case of (+ve,-ve) value won't work.
