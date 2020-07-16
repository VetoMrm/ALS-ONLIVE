$(document).ready(function() {
    $("#bestmentor-slider").owlCarousel({
        items: 4,
        itemsDesktop: [1000, 3],
        itemDesktopSmall: [979, 2],
        itemTablet: [768, 2],
        itemMobile: [650, 1],
        pagination: true,
        autoPlay: true,
        dots: true,
        autoPlayTime: 3000,
        autoPlayHoverPause: true,
    })
})

$(document).ready(function() {
    $("#happystudent-slider").owlCarousel({
        items: 1,
        itemsDesktop: [1000, 1],
        itemDesktopSmall: [979, 1],
        itemTablet: [768, 1],
        itemMobile: [650, 1],
        pagination: true,
        autoPlay: true,
        dots: true,
        autoPlayTime: 3000,
        autoPlayHoverPause: true,
    })
})