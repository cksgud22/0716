$(function(){
    $(".sub, .sub_bg").hide();

    $(".main>li").hover(function(){
        $(".main>li, .sub, .sub_bg").stop().slideDown();
    },function(){
        $(".sub, .sub_bg").stop().slideUp();
    })

    var n =0;

    setInterval(function(){
        if(n == 2){
            n=0;
        }else{
            n++
        }//if
        $(".left_move").animate({left: n * (-1200) + "px"},500)
        
    }, 3000)
    $(".modal, .pop").hide();
    $(".p_click").click(function(){
        $(".modal, .pop").show();
    })
    $(".close").click(function(){
        $(".modal, .pop").hide();
    })
    
})/* jqery */