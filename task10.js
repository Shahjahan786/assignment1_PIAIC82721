	var aValue;
	var html = "Value after variable declaration is: "+aValue ;
	aValue = 5;
	html += "<br>Initial value: "+aValue;
	aValue++;
	html += "<br>Value after increment is: "+aValue;

	aValue += 7;

	html += "<br>Value after addition is: " + aValue;

	aValue--;

	html += "<br>Value after decrement is: " + aValue;

	aValue %= 3;

	html += "<br>The remainder is :  " + aValue;

	document.write(html);