/* ex1*/
function showText(){
	document.getElementById('s_text').innerHTML="Hellow SSB";
}

/*  ex 2*/
function showDate (){
	document.getElementById('s_Date').innerHTML=Date();
}
/*  ex 3*/
function bulbon(){
	document.getElementById('img').src="images/bulbon.gif";
}
function bulboff(){
	document.getElementById('img').src="images/bulboff.gif";
}

/*  ex 4*/
function showSad(){
	document.getElementById('s_img').src="images/sad.png";
}

function showHappy(){
	document.getElementById('s_img').src="images/happy.png";
}

/* ex 5*/
function changeColor(){
	document.getElementById('color').style.color="red";
}

/* ex 6*/
function showQus(){
	document.getElementById('a_text').innerHTML="What is your country name? Where are you from?";
}

function showAns(){
	document.getElementById('a_text').innerHTML="My country name is Bangladesh.I am from Chattogram";
}
/* ex 7*/
function changeSize(){
	document.getElementById('Size').style.fontSize="50px";
}

/* ex 8*/
function changeBackground(){
	document.getElementById('css').style.backgroundColor="red";
}

/* ex 9*/
function hideText(){
	document.getElementById('hide').style.display="none";
}
/* ex 10*/
function hideText(){
	document.getElementById('hiden').style.display="none";
}
/* ex 11*/
function ShowText(){
	document.getElementById('hiden').style.display="block";
}

// ex 12
function s_lo(){
    document.getElementById('lo_m').innerHTML = Math.min(0, 150, 30, 20, -8, -200);
}
// ex 13

function m_hi(){
    document.getElementById('hi_m').innerHTML = Math.max(0, 150, 30, 20, -8, -200);
}
// ex 14

	var x,y,z;
	x = 5;
	y = 5;
	z = x + y;
	function cheekValue(){
		document.getElementById('value').innerHTML=z;
	}

// ex 15

	var a,b,c;
	a = 5;
	b = 5;
	c = x - y;
	function Value(){
		document.getElementById('value1').innerHTML=c;
	}
// ex 16

	var e,f,g;
	e = 5;
	f = 5;
	g = e * f;
	function seeValue(){
		document.getElementById('value2').innerHTML=g;
	}

	// ex 17
	function m_floor(){
    document.getElementById('floor').innerHTML = Math.floor(4.6);
}
// ex 18
function m_ceil(){
    document.getElementById('ceil').innerHTML = Math.ceil(4.6);
}
// ex 19
function m_round(){
    document.getElementById('round').innerHTML = Math.round(4.6);
}
// ex 20
function m_pi(){
    document.getElementById('pi').innerHTML = Math.PI;
}
// ex 21
function reverseSortArray(){
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.sort()
    fruits.reverse()

  document.getElementById('reso_a').innerHTML = fruits;
}
// ex 22
function is_Int(){
    document.getElementById('i1_i').innerHTML = Number.isInteger(10);
}

// ex 23
	function varConvert(){
    document.getElementById('v_c').innerHTML = Number("john");

}
// ex 24
function Convert(){
const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Toyota";
cars.push("Audi");
document.getElementById("c").innerHTML = cars; 
	}

	// ex 25

	function Convert1(){
		const car = {type:"Fiat", model:"500", color:"white"};
		car.color = "red";
		car.owner = "Johnson";
		document.getElementById("car").innerHTML = "Car owner is " + car.owner; 

	}

// ex 26

function is_Int1(){
    document.getElementById('i2_i').innerHTML = Number.isInteger(10);
}
