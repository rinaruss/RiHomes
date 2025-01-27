// Gallery Slider


$('.product-dtl-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.product-dtl-nav'
});
$('.product-dtl-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.product-dtl-for',
    dots: false,
    centerMode: false,
    arrows: false,
    focusOnSelect: true,
    responsive: [{
        breakpoint: 500,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false
        }
    }]
});

// Gallery Slider
// blogslider start
$('.property-sale-slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1100,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
            }
        }
    ]
});



// prp-slider
$('.prtyp-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1100,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
            }
        }
    ]
});

// blogslider end// brand slider start
$('.brand-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 8000,
    cssEase: 'linear',
    arrows: false,
    dots: false,
    pauseOnHover: false,

    responsive: [{
            breakpoint: 1100,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: false
            }
        }
    ]
});

// brand slider end// home 3 feature
////////////////
function mediaSize() {
    // / Set the matchMedia /
    if (window.matchMedia("(min-width: 575px)").matches) {
        const panels = document.querySelectorAll(".col-custom");
        panels.forEach((panel) => {
            panel.addEventListener("click", () => {
                removeActiveClasses();
                panel.classList.add("active");
            });
        });

        function removeActiveClasses() {
            panels.forEach((panel) => {
                panel.classList.remove("active");
            });
        }
    } else {
        // / Reset for CSS changes ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“ Still need a better way to do this! /
        $(".col-custom ").addClass("active");
    }
}
// / Call the function /
mediaSize();
// / Attach the function to the resize event listener /
window.addEventListener("resize", mediaSize, false);


$(".count").each(function() {
    $(this)
        .prop("Counter", 0)
        .animate({
            Counter: $(this).text(),
        }, {
            duration: 4000,

            easing: "swing",

            step: function(now) {
                $(this).text(Math.ceil(now));
            },
        });
});
var $currentSlide = $('.pagingInfo .current-slide');
var $totalSlides = $('.pagingInfo .total-slides');
var $slickElement = $('.home-baner-slider');

$(document).ready(function(slick) {
    $currentSlide.text(('0' + 1).slice(-2));
    $totalSlides.text(('0' + $(".home-baner-slider").length).slice(-2));
})

$slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    $currentSlide.text(('0' + i).slice(-2));
    $totalSlides.text(('0' + slick.slideCount).slice(-2));
});

// blogslider start
$('.home-baner-slider').slick({
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1100,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
            }
        }
    ]
});

// blogslider end



// clinet-slider start
$('.clinet-slider').slick({
    dots: false,
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1100,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
            }
        }
    ]
});

// blogslider end


// clinet-slider start
$('.property-slider').slick({
    dots: false,
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1100,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
            }
        }
    ]
});

// blogslider end

// clinet-slider start
$('.prp-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1100,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
            }
        }
    ]
});

// blogslider end
// clinet-slider start
$('.gal-slider').slick({
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    cssEase: 'linear',
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1100,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
            }
        }
    ]
});

// blogslider end


// Gallery Slider


$('.product-dtl-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.product-dtl-nav'
});
$('.product-dtl-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.product-dtl-for',
    dots: false,
    centerMode: false,
    arrows: false,
    focusOnSelect: true,
    responsive: [{
        breakpoint: 500,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false
        }
    }]
});

// Gallery Slider


// wow animation js 

$(function() {
    new WOW().init();
});


// responsive menu js 

$(function() {
    $('#menu').slicknav();
});



// slick slider in tabs js start

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += "active";
}


// slick slider in tabs js end



// search button js

(function($) {

    $.fn.searchBox = function(ev) {

        var $searchEl = $('.search-elem');
        var $placeHolder = $('.placeholder');
        var $sField = $('#search-field');

        if (ev === "open") {
            $searchEl.addClass('search-open')
        };

        if (ev === 'close') {
            $searchEl.removeClass('search-open'),
                $placeHolder.removeClass('move-up'),
                $sField.val('');
        };

        var moveText = function() {
            $placeHolder.addClass('move-up');
        }

        $sField.focus(moveText);
        $placeHolder.on('click', moveText);

        $('.submit').prop('disabled', true);
        $('#search-field').keyup(function() {
            if ($(this).val() != '') {
                $('.submit').prop('disabled', false);
            }
        });
    }

}(jQuery));

$('.search-btn').on('click', function(e) {
    $(this).searchBox('open');
    e.preventDefault();
});

$('.close').on('click', function() {
    $(this).searchBox('close');
});



$(document).ready(function() {
    $('#hide-show a').click(function() {
        $('.price_drpdwn').slideToggle("slow");
        // Alternative animation for example
        // slideToggle("fast");
    });
});


$(document).ready(function() {
    $('#hide-show2 a').click(function() {
        $('.price_drpdwn2').slideToggle("slow");
        // Alternative animation for example
        // slideToggle("fast");
    });
});


$(document).ready(function() {
    $('#hide-show3 a').click(function() {
        $('.price_drpdwn3').slideToggle("slow");
        // Alternative animation for example
        // slideToggle("fast");
    });
});

$(document).ready(function() {
    $('#hide-show4 a').click(function() {
        $('.price_drpdwn4').slideToggle("slow");
        // Alternative animation for example
        // slideToggle("fast");
    });
});



$(document).ready(function() {
    $('#hide-show5 a').click(function() {
        $('.price_drpdwn5').slideToggle("slow");
        // Alternative animation for example
        // slideToggle("fast");
    });
});

$(document).ready(function() {
    $('.adv_bath a').click(function() {
        $('.price_drpdwn6').slideToggle("slow");
        // Alternative animation for example
        // slideToggle("fast");
    });
});












// formula: c = (r * p) / (1 - (Math.pow((1 + r), (-n))))
function calculateMortgage(p, r, n) {
    r = percentToDecimal(r);
    n = yearsToMonths(n);
    var pmt = (r * p) / (1 - (Math.pow((1 + r), (-n))));
    return parseFloat(pmt.toFixed(2));
}

function percentToDecimal(percent) {
    return (percent / 12) / 100;
}

function yearsToMonths(year) {
    return year * 12;
}
var htmlEl = document.getElementById("outMonthly");

function postPayments(pmt) {
    htmlEl.innerText = "$" + pmt;
}
var btn = document.getElementById("btnCalculate");
btn.onclick = function() {
    var cost = document.getElementById("inCost").value.replace('$', '');
    var downPayment = document.getElementById("inDown").value.replace('$', '');
    var interest = document.getElementById("inInterest").value.replace('%', '');
    var term = document.getElementById("inTerm").value.replace(' years', '');

    if (cost == "" && downPayment == "" && interest == "" && term == "") {
        htmlEl.innerText = "Please fill out all fields.";
        return false;
    }
    if (cost < 0 || cost == "" || isNaN(cost)) {
        htmlEl.innerText = "Please enter a valid loan amount.";
        return false;
    }
    if (downPayment < 0 || downPayment == "" || isNaN(downPayment)) {
        htmlEl.innerText = "Please enter a valid down payment.";
        return false;
    }
    if (interest < 0 || interest == "" || isNaN(interest)) {
        htmlEl.innerText = "Please enter a valid interest rate.";
        return false;
    }
    if (term < 0 || term == "" || isNaN(term)) {
        htmlEl.innerText = "Please enter a valid length of loan.";
        return false;
    }
    var amountBorrowed = cost - downPayment;
    var pmt = calculateMortgage(amountBorrowed, interest, term);
    postPayments(pmt);
};






var checkList = document.getElementById('list1');
var items = document.getElementById('items');
checkList.getElementsByClassName('anchor')[0].onclick = function(evt) {
    if (items.classList.contains('visible')) {
        items.classList.remove('visible');
        items.style.display = "none";
    } else {
        items.classList.add('visible');
        items.style.display = "block";
    }

}

items.onblur = function(evt) {
    items.classList.remove('visible');
}

(function($) {
    $.fn.countTo = function(options) {
        options = options || {};

        return $(this).each(function() {
            // set options for current element
            var settings = $.extend({},
                $.fn.countTo.defaults, {
                    from: $(this).data("from"),
                    to: $(this).data("to"),
                    speed: $(this).data("speed"),
                    refreshInterval: $(this).data("refresh-interval"),
                    decimals: $(this).data("decimals")
                },
                options
            );

            // how many times to update the value, and how much to increment the value on each update
            var loops = Math.ceil(settings.speed / settings.refreshInterval),
                increment = (settings.to - settings.from) / loops;

            // references & variables that will change with each update
            var self = this,
                $self = $(this),
                loopCount = 0,
                value = settings.from,
                data = $self.data("countTo") || {};

            $self.data("countTo", data);

            // if an existing interval can be found, clear it first
            if (data.interval) {
                clearInterval(data.interval);
            }
            data.interval = setInterval(updateTimer, settings.refreshInterval);

            // initialize the element with the starting value
            render(value);

            function updateTimer() {
                value += increment;
                loopCount++;

                render(value);

                if (typeof settings.onUpdate == "function") {
                    settings.onUpdate.call(self, value);
                }

                if (loopCount >= loops) {
                    // remove the interval
                    $self.removeData("countTo");
                    clearInterval(data.interval);
                    value = settings.to;

                    if (typeof settings.onComplete == "function") {
                        settings.onComplete.call(self, value);
                    }
                }
            }

            function render(value) {
                var formattedValue = settings.formatter.call(self, value, settings);
                $self.html(formattedValue);
            }
        });
    };

    $.fn.countTo.defaults = {
        from: 0, // the number the element should start at
        to: 0, // the number the element should end at
        speed: 1000, // how long it should take to count between the target numbers
        refreshInterval: 100, // how often the element should be updated
        decimals: 0, // the number of decimal places to show
        formatter: formatter, // handler for formatting the value before rendering
        onUpdate: null, // callback method for every time the element is updated
        onComplete: null // callback method for when the element finishes updating
    };

    function formatter(value, settings) {
        return value.toFixed(settings.decimals);
    }
})(jQuery);

jQuery(function($) {
    // custom formatting example
    $(".count-number").data("countToOptions", {
        formatter: function(value, options) {
            return value
                .toFixed(options.decimals)
                .replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
        }
    });

    // start all the timers
    $(".timer").each(count);

    function count(options) {
        var $this = $(this);
        options = $.extend({}, options || {}, $this.data("countToOptions") || {});
        $this.countTo(options);
    }
});