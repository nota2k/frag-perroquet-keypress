$(document).ready(function () {


function createGrid(size) {
    var ratioW = Math.floor($(window).width()/size),
        ratioH = Math.floor($(window).height()/size);
    
    var parent = $('<div />', {
        class: 'grid', 
        width: ratioW  * size, 
        height: ratioH  * size
    }).addClass('grid').appendTo('.container-line');

    for (var i = 0; i < ratioH; i++) {
        for(var p = 0; p < ratioW; p++){
            $('<div />', {
                width: size - 1, 
                height: size - 1
            }).appendTo(parent);
        }
    }
}

createGrid(21);


});

$('.cut').click(function() {
    $('.cut').not(this).removeClass('select')
    $(this).toggleClass("select");
}); 

$(document).on("keyup", function(event) {   
    var code = event.keyCode || event.which;

    if(code == 37)
        {   $('.select.hori').removeClass('reverse');
            $('.select.hori').addClass('left');
            $(".select.left").animate({
            left: "-=21px"
            });
        }
        else if(code == 39)
        {   
            $('.select.hori').addClass('right');
            $(".select.right").animate({
            right: "-=21px"
            });
            $('.select.hori').addClass('reverse');
            $(".select.left").animate({
            left: "-=-21px"
            });
        }

    if(code == 38)
        {   $('.select.verti').removeClass('reverse');
            $('.select.verti').addClass('up');
            $(".select.up").animate({
            top: "-=21px"
            });
        }
        else if(code == 40)
        {   $('.select.verti').addClass('down');
            $(".select.down").animate({
            bottom: "-=21px"
            });
            $('.select.verti').addClass('reverse');
            $(".select.up").animate({
            top: "-=-21px"
            });
        }    
});

$('.select').unbind('click');

$(document).on('click', '.reset', function(event){
    $('.cut').css({"top":"", "bottom":"", "left": "", "right" : ""});
    $('.cut').removeClass('select');
})

$(document).ready(function(){
      $('#box').on('click',function(){
       if($(this).is(':checked')){
        $('.container-line').css("display", "none");
        } else {
        $('.container-line').css("display", "");    
        }
});
    })
