Template.employer.events({

});

Template.employer.helpers({

});

Template.employer.onRendered(function () {
    var signupBox = $('.employer-signup-box'),
        signupForm = $('#signupForm');


    $('[data-start-signup]').on('click', startSignUp);

    $('#clientTicker').bxSlider({
        ticker: true,
        speed: 65000,
        tickerHover: true,
        useCSS: true,
    });

    function startSignUp() {
        var y = signupBox.offset().top - 50;
        $('html, body').animate({
            scrollTop: y
        }, 400, function () {
            signupForm.find('.form-control:eq(0)').focus();
        });
    }
});

Template.employer.onCreated(function () {

});
