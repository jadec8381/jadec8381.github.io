var animals = [
	{
		"name": "tiger",
		"color": "blue",
		"flavor": "tart",
		"shape": "round",
		"emoji": "🐯"
	},

	{
		"name": "kangaroo",
		"color": "yellow",
		"flavor": "sweet",
		"shape": "curved",
		"emoji": "🦘"
	},

	{
		"name": "snake",
		"color": "orange",
		"flavor": "zingy",
		"shape": "round",
		"emoji": "🐍"
	},

	{
		"name": "chicken",
		"color": "red",
		"flavor": "fresh",
		"shape": "round",
		"emoji": "🐔"
	},

	{
		"name": "duck",
		"color": "green",
		"flavor": "tart",
		"shape": "oval",
		"emoji": "🦆"
	},

	{
		"name": "lion",
		"color": "pink",
		"flavor": "sweet",
		"shape": "round",
		"emoji": "🦁"
	},

	{
		"name": "bear",
		"color": "purple",
		"flavor": "sweet",
		"shape": "round",
		"emoji": "🐻"
	},

	{
		"name": "cat",
		"color": "red",
		"flavor": "sweet",
		"shape": "diamond",
		"emoji": "🐱"
	},

	{
		"name": "hamster",
		"color": "green",
		"flavor": "delicate",
		"shape": "pear shape",
		"emoji": "🐹"
	},

	{
		"name": "pigeon",
		"color": "red",
		"flavor": "tart",
		"shape": "round",
		"emoji": "🐦"
	},

	{
		"name": "rabbit",
		"color": "peachpuff",
		"flavor": "delicate",
		"shape": "round",
		"emoji": "🐰"
	}
]

for(var i=0; i<animals.length; i++){
	$('#animals').append('<div class="box">' + animals[i].name + '</div>')
}

for(var i=0; i<animals.length; i++){
	var animalsDiv = $('<div/>', {
			'class': 'box'
		})
		.html(animals[i].name)
		.css({'background-color': animals[i].color})

	$('#animals').append(animalsDiv)
}

for(var i=0; i<animals.length; i++){
	var animalsDiv = $('<div/>', {
			'class': 'box'
		})
		.data('animal', animals[i])
		.html(animalss[i].name)
		.css({'background-color': animals[i].color})
		.click(function(){console.log($(this).data("animals").name)})

	$('#animals').append(animalDiv)
}

for(var i=0; i<animals.length; i++){
	var fruitDiv = $('<div/>', {
			'class': 'box'
		})
		.data('animals', animals[i])
		.html(animals[i].name)
		.css({'background-color': animals[i].color})
		.click(function(){
			$(this).append( '<span> is ' +  $(this).data("animals").shape + '</span>')
			})

	$('#animals').append(animalsDiv)
}