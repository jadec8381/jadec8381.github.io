var images = [
	{
		"name": "影流之主1",
		"color": "red"
	},

	{
		"name": "影流之主2",
		"color": "red",
	}
]



for(var i=0; i<images.length; i++){
	console.log('with ' + images[i].name + ' I can make:')
	for(var j=0; j<images[i].recipes.length; j++){
		console.log(images[i].recipes[j])
	}
}
console.log(