const PEOPLE = [
	{
		name: "Brian",
		age: 43,
		iq: 9000
	},{
		name: "Carsten",
		age: 50,
		iq: 8999
	},{
		name: "Troels",
		age: 14,
		iq: 8999
	},{
		name: "Bjørn",
		age: 11,
		iq: 8999
	}
]

PEOPLE.forEach(function(result) {
	document.body.innerHTML += `
		<h2>${result.name} er ${result.age} år og
		hans IQ er ${result.iq}</h2>`
})
