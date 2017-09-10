function output() {
	var el = document.createElement("div");
	el.innerHTML = "Hello boilerplate";
	el.classList.add("hello");
	return el;
}

document.body.appendChild(output());
