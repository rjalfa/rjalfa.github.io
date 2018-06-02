$(document).ready(function() {
    //Add Collapser for all sections
    $('.content-section').children('h3').prepend('<i class="fa fa-minus content-collapse"></i>&nbsp;&nbsp;'); 

    $('.content-collapse').on('click', function() {
        $(this).parent().siblings('.content').slideToggle();
        $(this).toggleClass('fa-minus');
        $(this).toggleClass('fa-plus');
    });
});