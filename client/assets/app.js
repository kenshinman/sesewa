(function ($) {

    // Bootstrap popovers
    if ($.fn.popover) {
        $('[data-toggle="popover"]').popover();
    }

    var navbarToggle = $('.navbar-toggle'),
        navbarCollapse = $('#navbar-collapse');

    navbarCollapse
        .on('show.bs.collapse', function () {
            navbarToggle.addClass('active');
        })
        .on('shown.bs.collapse', function() {
            $(document).one('click.navbar-menu', function() {
                navbarCollapse.collapse('hide');
            });
        })
        .on('hide.bs.collapse', function () {
            navbarToggle.removeClass('active');
            $(document).off('click.navbar-menu');
        });

})(jQuery);
