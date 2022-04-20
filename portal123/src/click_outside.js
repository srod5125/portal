export function clickOutside(node) {
	
	const handleClick = (event) => {
		if (!node.contains(event.target)) {
            //does fire
            //console.log("fires")
			node.dispatchEvent(new CustomEvent("outclick"));
		}
	};

	document.addEventListener("click", handleClick, true);

	return {
		destroy() {
			document.removeEventListener("click", handleClick, true);
		}
	};
}