$(document).ready(function() {
    
    var url = window.location.href;

    url = url.substring(0, (url.indexOf("#") == -1) ? url.length : url.indexOf("#"));

    url = url.substring(0, (url.indexOf("?") == -1) ? url.length : url.indexOf("?"));

    url = url.substr(url.lastIndexOf("/") + 1);
    
    if(url == ''){
        url = 'home.html';
    }

    $('.menu li').each(function(){

        var href = $(this).find('a').attr('href');

        if(url == href){

            var parentClass = $(this).parent('ul').attr('class');
            
            if(parentClass == 'submenu'){
                
                $(this).addClass('subactive');
                $(this).parents('.menu li').addClass('active');
            }else{

                $(this).addClass('active');
            }
           
        }
    });

    $("ul.menu > li").hover(function() {
        $(this).find("ul.submenu").show(200);
    }, function(){
        $(this).find("submenu").hide(200);
    });

        $(window).on("scroll", function () {
            if ($(window).scrollTop()) {
                $('nav').addClass('black');
            }
            else{
                $('nav').removeClass('black');
            }
        });

         jQuery(document).ready(function(){ 
        $(function(){
            $('#slideshow p:gt(0)').hide();
                setInterval(function(){
                    $('#slideshow :first-child').fadeOut(2000)
                        .next('p').fadeIn(2000)
                        .end().appendTo('#slideshow');}, 
                        3000);
            });
        });
   
});