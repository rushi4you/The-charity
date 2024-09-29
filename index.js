$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        }
    }
})


$(".owl-prev").empty().append('<i class="fa-solid fa-circle-right"></i>');
$(".owl-next").empty().append('<i class="fa-solid fa-circle-left"></i>');

