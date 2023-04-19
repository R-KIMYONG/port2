/*$(function(){
    $(".s1 .sub").on("mouseenter",function(){
        vid = $(this).find("video").get(0);
        vid.play();

        wi = $(this).index();
        $(".s1 .sub").eq(wi).stop().animate({width:"40%"});

        text = $(this).index();
        $(".te1").eq(text).stop().animate({right:"0%"},800);

        vw = $(this).index();
        $("video").eq(vw).stop().animate({opacity:"1"});

        bgt =$(this).index();
        $(".bgt h2").eq(bgt).stop().animate({opacity:"0.3"})

        tie=$(this).index();
        $(".a1").eq(tie).stop().css({display:"none"})
        $(".a2").eq(tie).stop().fadeIn()
        
    })


    $(".s1 .sub").on("mouseleave",function(){
        vid.pause();
        
        wi = $(this).index();
        $(".s1 .sub").eq(wi).stop().animate({width:"20%"});

        text = $(this).index();
        $(".te1").eq(text).stop().animate({right:"-400%"},800);

        vw = $(this).index();
        $("video").eq(vw).stop().animate({opacity:"0"});

        bgt =$(this).index();
        $(".bgt h2").eq(bgt).stop().animate({opacity:"0"})

        tie=$(this).index();
        $(".a2").eq(tie).stop().css({display:"none"})
        $(".a1").eq(tie).stop().fadeIn()
        
    })

    setInterval(function(){
        $(".po1").stop().animate({marginLeft:"-100%"},function(){            
            $(".po1").css({marginLeft:"0px"});
            $("a").first().appendTo(".po1")                    
        })
    },2000)



let i = 0;
$(".gn1 .g1").on("click",function(){
    mo = $(this).index();
    if(i==0){
        mo =$(this).index();
        $(".s1 .sub").eq(mo).stop().animate({width:"100%"})
        vid = $(".s1 .sub").find("video").get(0);
        vid.play();
        tit =$(this).index();
        $(".sub .a1").eq(tit).stop().css({display:"block"})
        wi = $(this).index();
        $(".s1 .sub").stop().animate({width:"0%"});
        $(".s1 .sub").eq(wi).stop().animate({width:"100%"});

        text = $(this).index();
        $(".te1").eq(text).stop().animate({right:"0%"},800);

        vw = $(this).index();
        $("video").eq(vw).stop().animate({opacity:"1"});

        bgt =$(this).index();
        $(".bgt h2").eq(bgt).stop().animate({opacity:"0.3"})
        i=1;
    }else{
    $(".s1 .sub").eq(mo).stop().animate({width:"0%"})
    vid = $(".s1 .sub").find("video").get(0);
    vid.pause();

    tit =$(this).index();
    $(".sub .a1").eq(tit).stop().css({display:"none"})
    
    wi = $(this).index();
    $(".s1 .sub").eq(wi).stop().animate({width:"0%"});

    text = $(this).index();
    $(".te1").eq(text).stop().animate({right:"-400%"},800);

    vw = $(this).index();
    $("video").eq(vw).stop().animate({opacity:"0"});

    bgt =$(this).index();
    $(".bgt h2").eq(bgt).stop().animate({opacity:"0"})
        i=0;
        
    }
})
})*/


$(function(){
    let pc =767;
    if(matchMedia("screen and (min-width: 768px)").matches){
        $(".s1 .sub").on("mouseenter",function(){
            vid = $(this).find("video").get(0);
            vid.play();
    
            wi = $(this).index();
            $(".s1 .sub").eq(wi).stop().animate({width:"40%"});
    
            text = $(this).index();
            $(".te1").eq(text).stop().animate({right:"0%"},800);
    
            vw = $(this).index();
            $("video").eq(vw).stop().animate({opacity:"1"});
    
            bgt =$(this).index();
            $(".bgt h2").eq(bgt).stop().animate({opacity:"0.3"})
    
            tie=$(this).index();
            $(".a1").eq(tie).stop().css({display:"none"})
            $(".a2").eq(tie).stop().fadeIn()
            
        })
    
    
        $(".s1 .sub").on("mouseleave",function(){
            vid.pause();
            
            wi = $(this).index();
            $(".s1 .sub").eq(wi).stop().animate({width:"20%"});
    
            text = $(this).index();
            $(".te1").eq(text).stop().animate({right:"-400%"},800);
    
            vw = $(this).index();
            $("video").eq(vw).stop().animate({opacity:"0"});
    
            bgt =$(this).index();
            $(".bgt h2").eq(bgt).stop().animate({opacity:"0"})
    
            tie=$(this).index();
            $(".a2").eq(tie).stop().css({display:"none"})
            $(".a1").eq(tie).stop().fadeIn()
            
        })
    
        setInterval(function(){
            $(".po1").stop().animate({marginLeft:"-100%"},function(){            
                $(".po1").css({marginLeft:"0px"});
                $("a").first().appendTo(".po1")                    
            })
        },2000)
    }else{
        let i = 0;
        $(".gn1 .g1").on("click",function(){
            mo = $(this).index();
            if(i==0){
                mo =$(this).index();
                $(".s1 .sub").eq(mo).stop().animate({width:"100%"})
                vid = $(".s1 .sub").find("video").get(0);
                vid.play();
                tit =$(this).index();
                $(".sub .a1").eq(tit).stop().css({display:"block"})
                wi = $(this).index();
                $(".s1 .sub").stop().animate({width:"0%"});
                $(".s1 .sub").eq(wi).stop().animate({width:"100%"});
        
                text = $(this).index();
                $(".te1").eq(text).stop().animate({right:"0%"},800);
        
                vw = $(this).index();
                $("video").eq(vw).stop().animate({opacity:"1"});
        
                bgt =$(this).index();
                $(".bgt h2").eq(bgt).stop().animate({opacity:"0.3"})
                i=1;
            }else{
            $(".s1 .sub").eq(mo).stop().animate({width:"0%"})
            vid = $(".s1 .sub").find("video").get(0);
            vid.play();
    
            tit =$(this).index();
            $(".sub .a1").eq(tit).stop().css({display:"none"})
            
            wi = $(this).index();
            $(".s1 .sub").eq(wi).stop().animate({width:"0%"});
    
            text = $(this).index();
            $(".te1").eq(text).stop().animate({right:"-400%"},800);
    
            vw = $(this).index();
            $("video").eq(vw).stop().animate({opacity:"0"});
    
            bgt =$(this).index();
            $(".bgt h2").eq(bgt).stop().animate({opacity:"0"})
                i=0;
                
            }
        })

    }
})