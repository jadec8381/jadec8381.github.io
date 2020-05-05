var images = [
	{
		"name": "影流之主1",
		"image" : '<img class="opening-text1" src="../Final-images/openingtext.gif">',
		"left": "500px",
		"top": "100px",
	},

	{
		"name": "影流之主1",
		"image" :'<img class="opening-text1" src="../Final-images/openingtext.gif">',
		"left": "500px",
		"top": "600px",
	},

	// {
	// 	"name": "黄玫瑰",
	// 	"image" :'<img class="plant3" src="../Final-images/plant3.gif">',
	// },

]


 for(var i=0; i<images.length; i++){
 	var imagesDiv = $('<div/>', {
 			'class': 'box'
 		})
		.html(images[i].image)
		.css({
			'position':'absolute',
			'width':'50vh',
			'top': images[i].top, 
			'left': images[i].left})

	$('.images').append(imagesDiv)
}

$('.borderimg1').css({
                  "border" : "10px solid transparent",
                  "padding" : "10px",
                  "border-image" : "url(../Final-images/plant3.gif) 30 round"
                })

