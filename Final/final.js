var images = [
	{
		"name": "影流之主1",
		"image" : '<img class="opening-text1" src="../Final-images/openingtext.gif">',
		"left": "500px",
		"top": "150px",
		"width": "200px",
		"zIndex": "5",
	},

	{
		"name": "影流之主1",
		"image" :'<img class="opening-text1" src="../Final-images/openingtext.gif">',
		"left": "500px",
		"top": "650px",
		"width": "200px",
		"zIndex": "5",
	},

	// {
	// 	"name": "影流之主",
	// 	"image": "../Final-images/openingdancing.mp4",
	// 	"left": "500px",
	// 	"top": "300",
	// }

	// {
	// 	"name": "黄玫瑰",
	// 	"image" :'<img class="plant3" src="../Final-images/plant3.gif">',
	// },

]

//video
// var vid = document.getElementById("openingdancing");
// vid.autoplay = true;
// vid.load();

 for(var i=0; i<images.length; i++){
 	var imagesDiv = $('<div/>', {
 			'class': 'box'
 		})
		.html(images[i].image)
		.css({
			'position':'absolute',
			'width':images[i].width,
			'z-index': images[i].zIndex,
			'top': images[i].top, 
			'left': images[i].left})

	$('.images').append(imagesDiv)
}

//border image styling 

$('.borderimg1').css({
            "border" : "10px solid transparent",
            "padding" : "30px",
            "border-image" : "url(../Final-images/plant3.gif) 20 round",
            "top": "30px",
})

//for video styling

$('#opening').css({
	"margin": "0 auto",
	"border": "10px",
	"top": "300px",
	"left": "640px",
	"width": "180px",
	"position": "absolute",
	'z-index': "6",

})

$('#opening2').css({
	"margin": "0 auto",
	"border": "10px",
	"top": "300px",
	"left": "340px",
	"width": "180px",
	"position": "absolute",
	'z-index': "6",

})

$('#opening3').css({
	"margin": "0 auto",
	"border": "10px",
	"top": "300px",
	"left": "940px",
	"width": "180px",
	"position": "absolute",
	'z-index': "6",

})

//video autoplay
document.getElementById('opening').play();


