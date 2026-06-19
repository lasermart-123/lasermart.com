// Slick //

$(document).ready(function(){

    $('.my-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 200,

        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
     $('.laserSlider').slick({
        slidesToShow: 4,
        slidesToScroll: 1, 
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2500,

        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
     $('.laserSlider-left').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
         arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2500,         
     
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
     $('.laserSlider-right').slick({
        slidesToShow: 4,
        slidesToScroll: 1, 
          arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2500, 
        cssEase: 'linear',       
        rtl: true,

        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

});

//about
/*$('#laserSlider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    infinite: true,
    rtl: true
});*/

