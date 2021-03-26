$(document).ready(function() {
    //Zoom on scroll
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        $(".zoom img").css({
            width: (100 + scroll/2) + "%",
        })    
    });
    //Opacity low on scroll
    $(window).scroll(function(){
        $(".zoom").css("opacity", 1 - $(window).scrollTop()/700)
    })
    //Cursore magnetico
    VanillaTilt.init(document.querySelector(".boSet"), {
		max: 25,
		speed: 400
	});
    VanillaTilt.init(document.querySelectorAll(".boSet"));
})
