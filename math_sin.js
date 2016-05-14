var i=0;
var j=0;
var y=[];

var i_increment = 40;

var d2r = Math.PI / 180; //degree2radian


while (i <= 1440) {
	
	y[j++] = (Math.sin(i * d2r) ) +1;
	i += i_increment;
	// console.log(y[j-1]);
}

console.log(y.toString());