$(document).ready(function(){
    $("#btm1").click(function(){
        $("#div1").animate({
            height: "300px",
        });
    });
    $("#btm2").click(function(){
        $("#div2").animate({ marginLeft: 400});
    });
    $(window).scroll(function(){
        if($(window).scrollTop()>700 || $(window).scrollTop<900){
            //console.log($(window).scrollTop());
            $('#div3').css({
                position: 'fixed',
                top: '0',
                width: '100%'
            });
        }
        if($(window).scrollTop()>900) {
            $('#div3').css({position: 'static'});
        }
        if($(window).scrollTop()<700) {
            $('#div3').css({position: 'static'});
        }

        
    });
    $("#btm3").click(function(){
        $("#para1").wrap("<div style='background:blue'></div>");
    });
    $("#btm4").click(function(){
        $('#test3').val('Done');
        $('#btm4').prop("disabled",true);
    });
    $("#btm5").click(function(){
       var p_blocks = $("#section6").find("p");
       for(const [i, val] of Object.entries(p_blocks)){
        if($(val).hasClass("intro") == false) {
            $(val).css("background", "red");
            break;
        }
    }
    //    console.log("hello");
    //    console.log(Object.entries(p_blocks));
    });
    $('#btm6').click(function(){
        var li = $('#section7').find('li');
        for(const[i,val] of Object.entries(li)){
            if(($(val).text()) >=4 && ($(val).text()) <=6){
                $(val).css("background", "red");
            }
        }
    });
    $('#btm7').click(function(){
        var li = $('#section8').find('li');
        for(const[i,val] of Object.entries(li)){
            if(($(val).text()) >1){
                $(val).css("background", "red");
            }
        }
    });
    $('#tab1').click(function(){
        $('#tab1_content').text("Tab 1 content");
           });
    $('#tab2').click(function(){
        $('#tab1_content').text("tab 2 conetent");
    });
    $('#btm8').click(function(){
        $("html").animate({scrollTop: 0}, 1000);
    });
});
