$(window).load(function(){  
    var spotlight = {  
        
        opacity : 0.2,  
  
     
        imgWidth : $('.spotlightWrapper ul li').find('img').width(),  
        imgHeight : $('.spotlightWrapper ul li').find('img').height()  
  
    };  
 
    $('.spotlightWrapper ul li').css({ 'width' : spotlight.imgWidth, 'height' : spotlight.imgHeight });  
  
    
    $('.spotlightWrapper ul li').hover(function(){  
  
     
        $(this).find('img').addClass('active').css({ 'opacity' : 1});  
  
      
        $(this).siblings('li').find('img').css({'opacity' : spotlight.opacity}) ;  
  
       
    }, function(){  
   
        $(this).find('img').removeClass('active');  
  
    });  
  
   
    $('.spotlightWrapper ul').bind('mouseleave',function(){  
        
        $(this).find('img').css('opacity', 1);  
    });  
  
});