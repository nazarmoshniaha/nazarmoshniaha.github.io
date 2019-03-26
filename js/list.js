$(function(){
  
    $('.but1').on('click', function(){
    
        $('.technology_pctr').css({'grid-column':'1/3'});
        $('.technology_text').css({'grid-column':'3/5'});
        $('.advantages').css({'padding-left':'25%'});
        $('.advantages').css({'padding-right':'25%'});
        $('.advantages').css({'grid-template-columns':'repeat(2, 1fr)'});
        $('.advantages').css({'grid-template-rows':'1fr 1fr'});
      });
    

    $('.but2').on('click', function(){
    
        $('.technology_pctr').css({'grid-column':'3/5'});
        $('.technology_text').css({'grid-column':'1/3'});
    });

    $('.but3').on('click', function(){
    
        $('.advantages').css({'padding':'0'});
        $('.advantages').css({'grid-template-columns':'repeat(4, 1fr)'});
        $('.advantages').css({'grid-template-rows':'auto'});
    });
 
});