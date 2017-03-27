$(document).ready(function () {


    //animation apperaing
    $(".pic").show("slide", {direction: "left"}, 1500);

    $(".form").fadeIn(1000);

    setTimeout(function () {
        $(".text-over").addClass("active");
    }, 2000);

    $("form").on('submit', function (e) {
        e.preventDefault();
        var reqData = {
            name: this.name.value,
            phone: this.phone.value,
            email: this.email.value,
            surname: this.surname ? this.surname.value : ''
        };

        $.ajax({
            url: '#someurl',
            method: 'POST',
            data: reqData
        });
        console.log(reqData)
    });

    //initialize counters on page scroll to them
    countersInit();

    //slider
    $('.commentsSlider').slick({
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        arrows: false,
        infinity: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


});

function countersInit() {
    var counters = [];

    counters.push(new CountUp("profit", 0, 454330, 0, 2.5, {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        prefix: '',
        suffix: ''
    }));
    counters.push(new CountUp("daysOfRunning", 0, 967, 0, 2.5, {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        prefix: '',
        suffix: ''
    }));
    counters.push(new CountUp("winningTrades", 0, 74, 0, 2.5, {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        prefix: '',
        suffix: '%'
    }));

    counters.push(new CountUp("drawdowns", 0, 9, 0, 5, {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        prefix: '',
        suffix: '%'
    }));

    var Observer = function () {
        var bottomOffset = 250;
        var el = $('.counters');
        var scrollAmount = $(window).scrollTop();
        var elPos = el.position().top;
        var scrolledSumm = scrollAmount + $(window).height() - bottomOffset;
        if (scrolledSumm >= elPos) {
            console.log('started');
            counters.forEach(function (e) {
                e.start();
            })
        }
        else {
            requestAnimationFrame(Observer)
        }

    };
    //reqAF.js file
    requestAnimFrame(Observer);
}
