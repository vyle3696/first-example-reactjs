$(document).ready(function(){
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

    var isNavVerExpand = false;
    $(".nav-right > .center").click(function(){
        
        if(isNavVerExpand){
            $(".nav-vertical").css({left: '-250px'});
            $(".main-content").css({"left": '0'});
            
            $(".menu-close").text("MENU")
            $(".nav-vertical .nav-left > .top").removeClass("list-load-animation");
        }
        else{
            $(".nav-vertical").css({left: '0'});
            $(".main-content").css({"left": '250px'});
            $(".menu-close").text("CLOSE")
            $(".nav-vertical .nav-left > .top").addClass("list-load-animation");
        }

        isNavVerExpand = !isNavVerExpand;

        
    });

    var isNavHorExpand = false;
    $(".icon-expand").click(function(){
        if(isNavHorExpand){
            $(".nav-horizontal  .list-text").css("right", "-100%");
            $(this).removeClass('xstyle');
            $(".nav-horizontal .list-text").removeClass("list-load-animation");
        }
        else{
            $(".nav-horizontal  .list-text").css("right", "0");
            $(this).addClass("xstyle");
            $(".nav-horizontal .list-text").addClass("list-load-animation");
        }
        isNavHorExpand = !isNavHorExpand;

    });

});