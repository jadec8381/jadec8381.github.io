var images = [
	{
		"name": "有些事",
		"image" : '<img class="youxieshi" src="../Final-images/有些事.gif">',
		"left": "200px",
		"top": "200px"
	},

	{
		"name": "windows_default_wallpaper",
		"image" :'<img class="windows_default_wallpaper" src="../Final-images/windows_default_wallpaper.jpg">',
		"left": "300px",
		"top": "400px"
	},

	{
		"name": "QQ秀_1",
		"image" : '<img class="qq_show_1" src="../Final-images/qq秀1.gif">',
		"left": "150px",
		"top": "100px"
	},

	{
		"name": "QQ秀2",
		"image" : '<img class="" src="../Final-images/qq秀2.gif">',
		"left": "60px",
		"top": "70px"
	},

	{
		"name": "QQ秀3",
		"image" : '<img class="qq_show_3" src="../Final-images/qq秀3.gif">',
		"left": "100px",
		"top": "250px"
	},

	{
		"name": "plant1",
		"image" :'<img class="plant1" src="../Final-images/plant1.gif">',
		"left": "30px",
		"top": "50px"
	},


	{
		"name": "漂亮宝贝不干了",
		"image" :'<img class="plbbbgl" src="../Final-images/plbbbgl.jpg">',
		"left": "20px",
		"top": "40px"
	},

	{
		"name": "草，垃圾",
		"image" : '<img class="jietoutuya_laji" src="../Final-images/jietoutuya_laji.jpg">',
		"left": "20px",
		"top": "100px"
	},

	{
		"name": "上楼洗澡！",
		"image" :'<img class="jietoutuya_xizao" src="../Final-images/jietoutuya_xizao.jpg">',
		"left": "100px",
		"top": "100px"
	},


	{
		"name": "ps终于打开了！",
		"image" :'<img class="ps_isfinally_opened" src="../Final-images/photoshop终于打开了!.png">',
		"left": "150px",
		"top": "150px"
	},

	{
		"name": "靠危近险",
		"image" : '<img class="jietoutuya_kaoweijinxian" src="../Final-images/靠危近险.jpg">',
		"left": "150px",
		"top": "400px"
	},

	{
		"name": "pink butterfly accessory",
		"image" :'<img class="pink_butterfly_accessory" src="../Final-images/粉蝴蝶挂件.gif">',
		"left": "200px",
		"top": "20px"
	},

	{
		"name": "QQ秀4",
		"color": "red",
		"image" :'<img class="qq_show_4" src="../Final-images/qq秀4.gif">',
		"left": "10px",
		"top": "20px",
	},
]

var phrases = [
	{	"title": "此处不祥，乱涂乱画",
		"shape": "rectangle",
	}
]

var audio = [
	{
		"name": "两只蝴蝶",
		"audio": '<source src="../Final-images/两只蝴蝶.mp3" type="audio/mp3">'
	}
]

// var filterArray = images.filter(function(images){ return images.color === 'red'});

// $(".audio").animate({ 
        // top: "-=30px",
     
      // }, 1000);
// the above is for audio player animation (bouncing around the page); work on it later

// for(var i=0; i<5; i++){
// 	 $('.phrases').append('<div style="text-align: center;>')
// }

for(var i=0; i<phrases.length; i++){
	$('.title').append("<div class='title'>"+phrases[i].title+"<br>"+"</div>")
}
// this is for the phrases appearing on the page


 for(var i=0; i<images.length; i++){
 	var imagesDiv = $('<div/>', {
 			'class': 'box'
 		})
		.html(images[i].image)
		.css({'top': images[i].top, 'left': images[i].left})

	$('.images').append(imagesDiv)
}

// for(var i=0; i<images.length; i++){
// 	var imagesDiv = $('<div/>', {
// 			'class': 'box'
// 		})
// 		.data('image', images[i])
// 		.html(images[i].name)
// 		.css({'background-color': images[i].image})
// 		.click(function(){console.log($(this).data("images").name)})

// 	$('#images').append(imageDiv)
// }

for(var i=0; i<images.length; i++){
	var imageDiv = $('<div/>', {
			'class': 'box'
		})
		.data('images', images[i])
		.html(images[i].name)
		.css({'background-color': images[i].color})
		.click(function(){
			$(this).append( '<span> is ' +  $(this).data("images").image + '</span>')
			})

	$('.images').append(imagesDiv)
}
