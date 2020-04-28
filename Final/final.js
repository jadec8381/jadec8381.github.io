var images = [
	{
		"name": "影流之主1",
		"color": "red",
		"image" : '<img class="opening-text1" src="../Final-images/openingtext.gif">'
	},

	{
		"name": "影流之主2",
		"color": "red",
		"image" :'<img class="opening-text1" src="../Final-images/openingtext.gif">'
	},
]

console.log(images[0].image)

$('.opening-text1').append(images[0].image)

$('.opening-text2').append(images[0].image)
