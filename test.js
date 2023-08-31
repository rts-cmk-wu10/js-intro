const MAIN = document.getElementsByClassName("content")[0]

const SECTION = document.createElement("section")

MAIN.append(SECTION)

const overskrift = "Bøh!"
const tekst = "Feta er dog bedst."
const img = {
	src: "meh.png",
	alt: "et billede af et eller andet"
}

SECTION.innerHTML = `<h1>${overskrift}</h1>
<p>${tekst}</p>
<img src="${img.src}" alt="${img.alt}">`

SECTION.querySelector("p").setAttribute("type", "fiskelæber")