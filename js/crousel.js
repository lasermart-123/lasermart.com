// Slick //

$(document).ready(function(){

    $('.my-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 500,

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
        slidesToShow: 3,
        slidesToScroll: 1, 
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,

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
        slidesToShow: 3,
        slidesToScroll: 1,
         arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,         
     
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
        slidesToShow: 3,
        slidesToScroll: 1, 
          arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000, 
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

    $('.testimonial-slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,

    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 576,
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

