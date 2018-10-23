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
	
});
