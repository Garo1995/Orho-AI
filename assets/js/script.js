
$(document).ready(function () {
    setTimeout(function () {
        $(".banner-main").addClass("start-anime");
        $("header").addClass("header-anime");
    }, 700);
});

const revealOnScroll = () => {
    const elementsToReveal = document.querySelectorAll('.animate-on-scroll');
    const triggerPoint = window.innerHeight * 0.85;

    elementsToReveal.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < triggerPoint) {
            element.classList.add('visible');
        }
    });
};

// 🔄 Attach listeners
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);





$('.menu-scroll a').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
        let $target = $(this.hash);
        $target = $target.length && $target
            || $('[name=' + this.hash.slice(1) +']');
        if ($target.length) {
            let targetOffset = $target.offset().top-130;
            $('html,body')
                .animate({scrollTop: targetOffset}, 1000);
            return false;
        }
    }
});







$(function () {
    let Accordion = function (el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;
        let links = this.el.find('.link');
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    };

    Accordion.prototype.dropdown = function (e) {
        let $el = e.data.el;
        $this = $(this),
            $next = $this.next();
        $next.slideToggle();
        if (!e.data.multiple) {

            $el.find('.submenu').not($next).slideUp();
        }
        if (!$this.hasClass('open')) {
            $('.link').each(function () {
                $(this).removeClass('open')
            })
            $this.addClass('open')
        } else {
            $this.removeClass('open')
        }
    }
    let accordion = new Accordion($('#accordion'), false);
});





let reviewsSwiper = new Swiper(".reviews-slider", {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    pagination: {
        el: ".reviews-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".reviews-button-next",
        prevEl: ".reviews-button-prev",
    },
    breakpoints: {
        1079: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 10,
        },
        1020: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 10,
        },
        767: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 10,
        },
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 10,
        },
    },

});



let possibilSwiper = new Swiper(".possibil-slider", {
    slidesPerView: 2,
    spaceBetween: 8,
    loop: true,
    pagination: {
        el: ".possibil-pagination",
        clickable: true,
    },
    breakpoints: {
        1020: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 10,
        },
        767: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 10,
        },
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 10,
        },
    },

});





