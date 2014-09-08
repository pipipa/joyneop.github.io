(function(alert, text, quadrant, position, style, size){
	/*
	@Author Joy Neop
	@Website http://www.joyneop.com/
	@GitHub https://github.com/JoyNeop
	© 2014 Joy Neop. All rights reserved.
	*/
	window.jnalert = {};

	if (quadrant == undefined || quadrant == null) {
		quadrant = 1;
	}
	if (position == undefined || position == null) {
		position = "absolute";
	}
	if (style == undefined || style == null) {
		style = "color: #FFF !important; border-radius: 3px; opacity: 1;";
	}
	if (size == undefined || size == null) {
		size = [ 320, 32, 362, 60 ];
	}

	// CSS
	var sizeText = "width: " + size + "px;";
	var divId = "jn-alert-3389-C277-D9IR";
	jnalert.divId = "jn-alert-3389-C277-D9IR";
	var styleText = "#" + divId + " { " + style + " }";
	var corner;
	if (quadrant == 1) {
		corner = "top: 15px; right: 15px;";
	} else if (quadrant == 2) {
		corner = "top: 15px; left: 15px;";
	} else if (quadrant == 3) {
		corner = "bottom: 15px; left: 15px;";
	} else {
		// if (quadrant == 4)
		corner = "bottom: 15px; right: 15px;";
	}
	var preStyle = "#jn-alert-3389-C277-D9IR { position: " + position + "; " + corner + sizeText + " z-index: 9999; box-sizing: border-box; max-width: 390px; font-size: 15px; font-weight: 300; line-height: 20px; letter-spacing: 0; overflow: visible; -webkit-transition: all 353ms ease; -moz-transition: all 353ms ease; transition: all 353ms ease; } #jn-alert-3389-C277-D9IR span { padding: 6px 14px; box-sizing: border-box; } #jn-alert-3389-C277-D9IR span * { color: inherit; text-decoration: inherit; }";
	var extraStyle = "#jn-alert-3389-C277-D9IR span:first-child { position: absolute; top: 0; right: 0; display: block; text-align: right; border-radius: inherit; } #jn-alert-3389-C277-D9IR span:last-child { display: none; text-align: left; } #jn-alert-3389-C277-D9IR:hover { background: rgba(0, 0, 0, 0.43312); opacity: 1; " + sizeText + " } #jn-alert-3389-C277-D9IR:hover span:first-child { display: none; } #jn-alert-3389-C277-D9IR:hover span:last-child { display: block; }";
	var styleTag = document.createElement("style");
	styleTag.setAttribute("id", divId + "style");
	jnalert.styleTagContent = preStyle + styleText + extraStyle;
	styleTag.appendChild(document.createTextNode(jnalert.styleTagContent));
	document.getElementsByTagName("head")[0].appendChild(styleTag);

	// DOM
	var div = document.createElement("div");
	var s1 = document.createElement("span");
	s1.innerHTML = alert;
	var s2 = document.createElement("span");
	s2.innerHTML = text;
	s2.style = sizeText;
	s1.setAttribute("id", divId + "span1");
	s2.setAttribute("id", divId + "span2");
	div.setAttribute("id", divId);
	div.setAttribute("style", "font-size: 15px;");
	div.appendChild(s1);
	div.appendChild(s2);
	document.body.appendChild(div);

	// Time
	// Show
	document.getElementById(divId + "style").innerHTML = jnalert.styleTagContent + "#" + jnalert.divId + " { opacity: 1; }";
	document.getElementById(divId + "span1").style.backgroundColor = "rgba(0, 0, 0, 0.43312)";
	// Dim
	window.setTimeout(function(){
		document.getElementById(jnalert.divId + "style").innerHTML = jnalert.styleTagContent + "#" + jnalert.divId + " { opacity: 0.09101; }";
		document.getElementById(jnalert.divId + "span1").style.backgroundColor = "rgba(0, 0, 0, 0)";
		document.getElementById(jnalert.divId + "span1").onmouseleave = function () {
			document.getElementById(jnalert.divId + "span1").style.backgroundColor = "rgba(0, 0, 0, 0)";
		};
	}, 2200);
	console.log(alert);
	console.log(text);
})("Hi, I'm seeking 2015 summer internship...",
	'<a href="http://www.joyneop.com/resume/" style="display: block; width: 364px;" target="_blank">Does your company have an internship program? Maybe I can be one in your company this summer? Click here to see my résumé, thanks : )</a>',
	1,
	"absolute",
	null,
	390
);
