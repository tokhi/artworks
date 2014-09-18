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
}); // JQuery is loaded