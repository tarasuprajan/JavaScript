STRINGS
//////////////////////
var a="suppu"
undefined
a.toUpperCase()
"SUPPU"
a.toLowerCase()
"suppu"
a.toLocaleLowerCase()
"suppu"
a.toLocaleUpperCase()
"SUPPU"
a[0]
"s"
a[-1]
undefined
a.length
5
a[4]
"u"
var city="  Maryland      "
undefined
city.length
16
city.trim()
"Maryland"
var city="London ..   "
undefined
city.trim()
"London .."



var a="SUPPU"
undefined
var b="suppu"
undefined
a==b
false
a.toLowerCase()==b.toLowerCase()
true
a.charAt(0)
"S"
a[0]
"S"

********************
     slice
*****************
var name="Deepu"
undefined
name.slice(1)
"eepu"
name.slice(2)
"epu"
name.slice(1,3)
"ee"
name.slice(1,4)
"eep"

*****************************
        CAMELCASE
******************************
var name="TaraSupraja"
undefined
name.charAt(0).toUpperCase()+name.slice(1).toLowerCase()
"Tarasupraja"

***********************
       Replace
 ***********************
 var data="Welcome to Javascript"
undefined
data.replace("Javascript","Js")
"Welcome to Js"
var data="HI Javascript!! Welcome to Javascript"
undefined
data.replace("Javascript","Js")
"HI Js!! Welcome to Javascript"
data.replace(/Javascript/g,"Js")
"HI Js!! Welcome to Js"      


var city="London ..   "
undefined
city.replace(/ /g,'')
"London.."


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


////////////////////////////
       Negative Values
////////////////////////////
var city="Washington"
undefined
city.slice(-1)
"n"
city.substring(-1)
"Washington"

city.slice(-1,-3)
""
city.substring(-1,-3)
""

city.slice(1,-3)
"ashing"
city.substring(1,-3)
"W"

city.slice(-1,3)
""
city.substring(-1,3)
"Was"
city.substring(-2,5)
"Washi"

city.slice(-3,-1)
"to"
city.slice(-5,-1)
"ngto"
city.slice(-5,-2)
"ngt"    
city.substring(-3,-1)
""   


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


/////////////////
Number to String
//////////////////
var a=798677798
undefined
a.toString()
"798677798"