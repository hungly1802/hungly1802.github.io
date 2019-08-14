$(document).ready(function() {
    $('#Carousel').carousel({
        interval: 5000
    })
});
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:20,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            616:{
                items:2,
                nav:false
            },
            808:{
                items:3,
                nav:false
            }

        }
    })
});
