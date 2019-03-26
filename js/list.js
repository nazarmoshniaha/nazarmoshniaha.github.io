$(function(){
  
    $('.but1').on('click', function(){
    
        $('.technology_pctr').css({'grid-column':'1/3'});
        $('.technology_text').css({'grid-column':'3/5'});
        $('.technology_pctr').css({'grid-row':'3/4'});
        $('.technology_text').css({'grid-row':'3/4'});
        $('.technology_pctr').css({'justify-self':'end'});

        $('.advantages').css({'padding-left':'25%'});
        $('.advantages').css({'padding-right':'25%'});
        $('.advantages').css({'grid-template-columns':'repeat(2, 1fr)'});
        $('.advantages').css({'grid-template-rows':'1fr 1fr'});
        $('.advantages').css({'grid-row':'4/5'});
        $('.advantages').css({'grid-row':'4/5'});

        $('.sale_pctr').css({'grid-column':'1/3'});
        $('.sale_form').css({'grid-column':'3/5'});
        $('.sale_pctr').css({'justify-self':'end'});

        $('.slogan_pctr').css({'grid-row':'2/3'});
        $('.slogan_text').css({'grid-row':'2/3'});
      });
    

    $('.but2').on('click', function(){
    
        $('.technology_pctr').css({'grid-column':'3/5'});
        $('.technology_text').css({'grid-column':'1/3'});
        $('.technology_pctr').css({'grid-row':'2/3'});
        $('.technology_text').css({'grid-row':'2/3'});
        $('.technology_pctr').css({'justify-self':'center'});

        $('.slogan_pctr').css({'grid-row':'4/5'});
        $('.slogan_text').css({'grid-row':'4/5'});

        $('.advantages').css({'grid-row':'3/4'});
        $('.advantages').css({'padding':'0'});
        $('.advantages').css({'grid-template-columns':'repeat(4, 1fr)'});
        $('.advantages').css({'grid-template-rows':'auto'});
        //$('.advantages').css({'padding-left':'25%'});
        //$('.advantages').css({'padding-right':'25%'});
        //$('.advantages').css({'grid-template-columns':'repeat(2, 1fr)'});
    });


    $('.but3').on('click', function(){
    
        $('.advantages').css({'padding':'0'});
        $('.advantages').css({'grid-template-columns':'repeat(4, 1fr)'});
        $('.advantages').css({'grid-template-rows':'auto'});

        $('.sale_pctr').css({'grid-column':'3/5'});
        $('.sale_form').css({'grid-column':'1/3'});
        $('.sale_pctr').css({'grid-row':'5/6'});
        $('.sale_form').css({'grid-row':'5/6'});
        $('.sale_pctr').css({'justify-self':'center'});

        $('.technology_pctr').css({'grid-column':'1/3'});
        $('.technology_text').css({'grid-column':'3/5'});
        $('.technology_pctr').css({'grid-row':'4/5'});
        $('.technology_text').css({'grid-row':'4/5'});

        $('.slogan_pctr').css({'grid-row':'2/3'});
        $('.slogan_text').css({'grid-row':'2/3'});

    });
 
});