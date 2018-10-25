$(document).ready(function(){
	var $grid = $('.grid').masonry({
	    itemSelector: '.grid-item',
	    //gutter: 10,
	    columnWidth: '.grid-sizer',
	    percentPosition: true
	    //fitWidth: true
	    
	});

	$grid.imagesLoaded()
	.progress( function() {
	  $grid.masonry('layout');
	})
	.done( function( instance ) {
	    $('#overlay-loader').hide();
	    $(".item-project  .item-project-inner").each(function(index) {
	    //$(this).addClass("animated animatedFadeInUp fadeInUp");
	    $(this).addClass("load-project-animation ");
	});
	})


	// var psV = new PerfectScrollbar('#navv');
    // var psH = new PerfectScrollbar('#navh');

    $( window ).resize(function() {
        if($( window ).width() <= 1224){
            $(".nav-vertical").css({left: '-250px'});
            $(".main-content").css({"left": '0'});
            
            $(".menu-close").text("MENU")
            $(".nav-vertical .nav-left > .top").removeClass("list-load-animation");
            isNavVerExpand = false;
        }else{
            $(".nav-horizontal  .list-text").css("right", "-100%");
            $(".icon-expand").removeClass('xstyle');
            $(".nav-horizontal .list-text").removeClass("list-load-animation");
            isNavHorExpand = false;
        }
      });
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#btn-move-top').fadeIn(); 
        } else { 
            $('#btn-move-top').fadeOut(); 
        } 
    }); 

    $('#btn-move-top').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 


    // var  demoDiv = document.getElementById('navv');
    // console.log(demoDiv);
    // const ps = new PerfectScrollbar(demoDiv, {
    //     minScrollbarLength: 2,
    //     wheelSpeed: 2,
    //     wheelPropagation: true,
    //     minScrollbarLength: 20
    //   });
    // console.log(ps);
    // ps.update();

    // var isNavVerExpand = false;
    // $(".nav-right > .center").click(function(){
        
    //     if(isNavVerExpand){
    //         $(".nav-vertical").css({left: '-250px'});
    //         $(".main-content").css({"left": '0'});
            
    //         $(".menu-close").text("MENU")
    //         $(".nav-vertical .nav-left > .top").removeClass("list-load-animation");
    //     }
    //     else{
    //         $(".nav-vertical").css({left: '0'});
    //         $(".main-content").css({"left": '250px'});
    //         $(".menu-close").text("CLOSE")
    //         $(".nav-vertical .nav-left > .top").addClass("list-load-animation");
    //     }

    //     isNavVerExpand = !isNavVerExpand;

        
    // });

    // var isNavHorExpand = false;
    // $(".icon-expand").click(function(){
    //     if(isNavHorExpand){
    //         $(".nav-horizontal  .list-text").css("right", "-100%");
    //         $(this).removeClass('xstyle');
    //         $(".nav-horizontal .list-text").removeClass("list-load-animation");
    //     }
    //     else{
    //         $(".nav-horizontal  .list-text").css("right", "0");
    //         $(this).addClass("xstyle");
    //         $(".nav-horizontal .list-text").addClass("list-load-animation");
    //     }
    //     isNavHorExpand = !isNavHorExpand;

    // });
	
});
