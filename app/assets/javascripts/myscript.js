$(function() {


	// highlight the current nav
	$("#home a:contains('Home')").parent().addClass('active');
	// $("#home a:contains('Artists')").parent().addClass('active');

    // make menu drop down automatically
    $('ul.nav li.dropdown').hover(function() {
        $('.dropdown-menu', this).fadeIn();
    }, function() {
        $('.dropdown-menu', this).fadeOut('fast');
    }); // hover

    // photo grid
    // $("[data-toggle='tooltip']").tooltip({ animation: true});

    //modal photos
    $('.modalphotos img').on('click', function(){
        $('#modal').modal({
            show: true,
        });
        var mysrc = this.src.substr(0, this.src.length-7) + '.jpg';
        $('#modalimage').attr('src',mysrc);
    });
}); // JQuery is loaded