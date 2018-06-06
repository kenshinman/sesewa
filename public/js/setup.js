(function ($) {

    var Setup = {
        modal: $('#setupModal'),
        carousel: $('#setupCarousel'),
        getStartedBtn: $('#getStartedBtn'),
        profilePictureWrap: $('#profilePictureWrap'),

        startModal: function () {
            var self = this;
            this.modal.modal({
                keyboard: false,
                backdrop: 'static',
                show: true
            }).on('shown.bs.tab', function () {
                self.updateModal();
            });
        },

        updateModal: function () {
            this.modal.modal('handleUpdate');
        },

        startCarousel: function () {
            var self = this,
                carousel = this.carousel,
                carouselInner = carousel.find('.carousel-inner');
            carousel.carousel({
                interval: false,
                keyboard: false,
                wrap: false
            });

            carousel.on('slide.bs.carousel', function () {
                setTimeout(function () {
                    var activeItemHeight = carousel.find('.item.active').css('height'),
                        newItemHeight = carousel.find('.item.prev').css('height') || carousel.find('.item.next').css('height');

                    carouselInner.css('height', activeItemHeight)
                        .animate({height: newItemHeight}, 600, 'linear', function () {
                            carouselInner.css('height', 'auto');
                        })
                }, 0);

            });

            // Show the carousel indicators when get started btn is clicked
            this.getStartedBtn.one('click', function () {
                carousel.carousel('next').find('.carousel-indicators').addClass('in');
            });

            // Next button
            $('[data-carousel-next]').on('click', function () {
                self.carouselNext();
            });

            // Previous button
            $('[data-carousel-prev]').on('click', function () {
                self.carouselPrev();
            });
        },

        carouselNext: function () {
            this.carousel.carousel('next');
        },
        carouselPrev: function () {
            this.carousel.carousel('prev');
        },

        showHide: function (ele, show) {
            (show) ? $(ele).removeClass('hide') : $(ele).addClass('hide');
        },

        startDropzone: function() {
            this.profilePictureWrap.dropzone({
                url: '/upload/images',
                uploadMulitple: false
            })
        }
    };

    // Setup modal
    Setup.startModal();

    // Setup carousel
    Setup.startCarousel();

    // Setup dropzone for profile picture
    Setup.startDropzone();

    //NYSC show/hide
    $('[name="nysc"]').on('change', function() {
        Setup.showHide('#nyscServiceWrap', $(this).val() === '0')
    });

    $('.preferences-btns .btn')
        .append('<i class="fa fa-plus"></i>')
        .on('click', function(){
            var $this = $(this),
                i = $this.find('.fa').removeClass('fa-plus fa-check');
            if ($this.hasClass('active')) {
                i.addClass('fa-plus');
            }
            else {
                i.addClass('fa-check');
            }
        });

    $('[data-activate-select2]').select2();

    $('#city').cityAutocomplete();
    $('#city2').cityAutocomplete();
})(jQuery);
