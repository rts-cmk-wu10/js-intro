const Animal = function(species, name, age) {
	this.species = species
	
	this.eat = function(x) {
		console.log(this.name, "eats a", x)
	}
	
	this.name = name

	this.age = age
}

const Frank = new Animal("Ferret", "Frank", 11)
const Kurt = new Animal("Kanin", "Kurt", 43)

Kurt.eat("havregrød")
console.log(Frank.age, Frank.species, Frank.name)
