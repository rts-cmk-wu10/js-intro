var myMovies = [
	{
		title: "Forest Gump",
		published: 1994,
		genres: ["drama"],
		actors: ["Jens Jørgen"]
	},
	{
		title: "John Wick",
		published: 2017,
		genres: ["action"],
		actors: ["Keanu Reeves", "Lawrence Fishborne"]
	},
	{
		title: "Bananer i pyjamas The Movie",
		published: 1992,
		genres: ["action", "horror"],
		actors: ["B1", "B2"]
	}
	,
	{
		title: "Alien",
		published: 1979,
		genres: ["action", "horror"],
		actors: ["Sigorney Weaver", "Xenomorph Jørgensen"]
	},
	{
		title: "Landet for længe siden",
		published: 1985,
		genres: ["documentary"],
		actors: ["Lillefod", "Skarptand"]
	},
	{
		title: "Batman",
		published: 1989,
		genres: ["action", "superheroes"],
		actors: ["Jack Nicholson", "Michael Keaton"]
	},
	{
		title: "Ringenes Herre",
		published: 1999,
		genres: ["adventure", "fantasy"],
		actors: ["Viggo Mortensen", "Ian McKellan"]
	},
	{
		title: "Jaws",
		published: 1977,
		genres: ["horror"],
		actors: ["Roy Schneider", "Robert Shaw"]
	},
	{
		title: "Harry Potter",
		published: 2001,
		genres: ["fantasy"],
		actors: ["Daniel Radcliff", "Rupert Grint"]
	},
	{
		title: "Alene Hjemme",
		published: 1996,
		genres: ["action", "adventure"],
		actors: ["Macaulay Culkin", "Donald Trump"]
	}
]

const FORM = document.querySelector(".searchForm")

FORM.addEventListener("submit", submitHandler)

function submitHandler(event) {
	event.preventDefault()

	const RESULTS = myMovies.filter(function(element) {
		return searchTitle(event.target.search.value, element.title)
			|| compare(element.published, event.target.search.value)
			|| findInArray(element.genres, event.target.search.value)
			|| findInArray(element.actors, event.target.search.value)
	})

	//console.log(RESULTS)
	const LIST = RESULTS.map(createList)
	const RESULT_LIST = document.querySelector(".movieResults")

	RESULT_LIST.innerHTML = ""
	LIST.forEach(item => RESULT_LIST.appendChild(item))
	
} // end of submitHandler

function searchTitle(keyword, title) {
	return title
		.toLowerCase()
		.includes(
			keyword.toLowerCase()
		)
}

const compare = (a, b) => a == b

function findInArray(haystack, needle) {
	return haystack.find(function(item) {
		return item.toLowerCase().includes(needle.toLowerCase())
	})
}

function createList(movie) {
	const LI = document.createElement("li")
	LI.className = "movieResult"

	LI.innerHTML = `
	<h3>${movie.title}</h3>
	<span>${movie.published}</span>
	<h4>Genrer</h4>
	<ul class="movieGenres"></ul>
	<h4>Skuespillere</h4>
	<ul class="movieActors"></ul>`

	const movieGenres = LI.querySelector(".movieGenres")
	const movieActors = LI.querySelector(".movieActors")

	movie.genres.forEach(genre => movieGenres.innerHTML += `<li>${genre}</li>`)
	movie.actors.forEach(actor => movieActors.innerHTML += `<li>${actor}</li>`)
	
	return LI
}
