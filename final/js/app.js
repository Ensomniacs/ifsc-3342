/* Filter Buttons */
  $(document).ready(function(){

$(".filter-button").click(function(){
    var value = $(this).attr('data-filter');
    
    if(value == "all")
    {
        //$('.filter').removeClass('hidden');
        $('.filter').show('1000');
    }
    else
    {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
        $(".filter").not('.'+value).hide('3000');
        $('.filter').filter('.'+value).show('3000');
        
    }
});

if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});

/*Carousel*/
jQuery(document).ready(function() {
    /*
        Stop video playing when the CAROUSEL slides to another element
    */
    $('#myCarousel').on('slid.bs.carousel', function(e) {
        var currentSlide = $('#myCarousel .carousel-item').eq(e.from);
        var currentSlideEmbed = currentSlide.children('.embed-responsive');
        if(currentSlideEmbed.length > 0) {
            var videoIFrame = currentSlideEmbed.children('iframe');
            var videoURL = videoIFrame.attr('src');
            videoIFrame.attr('src', videoURL);
        }
    });
});