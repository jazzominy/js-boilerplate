function output() {
	var el = document.createElement("div");
	el.innerHTML = "Hello boilerplate";
	return el;
}

document.body.appendChild(output());
