window.addEventListener("scroll", function(event) {
	if (window.scrollY >= 50) {
		const HEADER = document.querySelector("header")
		HEADER.style.height = "100px"
		HEADER.style.position = "sticky"
		HEADER.style.top = 0
	}
})
