var fruits = [
	{
		"name": "blueberry",
		"color": "blue",
		"flavor": "tart",
		"shape": "round",
		"emoji": "🔵"
	},

	{
		"name": "banana",
		"color": "yellow",
		"flavor": "sweet",
		"shape": "curved",
		"emoji": "🍌"
	},

	{
		"name": "orange",
		"color": "orange",
		"flavor": "zingy",
		"shape": "round",
		"emoji": "🍊"
	},

	{
		"name": "apple",
		"color": "red",
		"flavor": "fresh",
		"shape": "round",
		"emoji": "🍎"
	},

	{
		"name": "kiwi",
		"color": "green",
		"flavor": "tart",
		"shape": "oval",
		"emoji": "🥝"
	},

	{
		"name": "melon",
		"color": "pink",
		"flavor": "sweet",
		"shape": "round",
		"emoji": "🍉"
	},

	{
		"name": "grape",
		"color": "purple",
		"flavor": "sweet",
		"shape": "round",
		"emoji": "🍇"
	},

	{
		"name": "strawberry",
		"color": "red",
		"flavor": "sweet",
		"shape": "diamond",
		"emoji": "🍓"
	},

	{
		"name": "pear",
		"color": "green",
		"flavor": "delicate",
		"shape": "pear shape",
		"emoji": "🍐"
	},

	{
		"name": "cherry",
		"color": "red",
		"flavor": "tart",
		"shape": "round",
		"emoji": "🍒"
	},

	{
		"name": "peach",
		"color": "peachpuff",
		"flavor": "delicate",
		"shape": "round",
		"emoji": "🍑"
	}
]


function myFunction() {
  var x = document.getElementById("fruits");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}