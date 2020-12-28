var a = 2, b = 1; 
	var result = --a - --b + ++b + b--; 

	var html = "a is : "+a;
	html += "<br> b is: "+b;
	html += "<br> result is: "+result;
	document.write(html);