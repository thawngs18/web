// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();
var images = [
    'images/f2.jpg',
    'images/f1.png',
    'images/f3.png',
    'images/f4.png', // Thêm nhiều ảnh nếu cần
];

var currentIndex = 0; // Chỉ số ảnh hiện tại

// Hàm để thay đổi ảnh
function changeImage() {
    currentIndex++; // Tăng chỉ số ảnh
    if (currentIndex >= images.length) {
        currentIndex = 0; // Nếu đã đến ảnh cuối, quay lại ảnh đầu
    }
    document.getElementById('myImage').src = images[currentIndex]; // Thay đổi ảnh
}

// Thay đổi ảnh sau mỗi 2 giây (2000 milliseconds)
setInterval(changeImage, 3000);

// isotope js
$(window).on('load', function () {
    $('.filters_menu li').click(function () {
        $('.filters_menu li').removeClass('active');
        $(this).addClass('active');

        var data = $(this).attr('data-filter');
        $grid.isotope({
            filter: data
        })
    });

    var $grid = $(".grid").isotope({
        itemSelector: ".all",
        percentPosition: false,
        masonry: {
            columnWidth: ".all"
        }
    })
});

// nice select
$(document).ready(function() {
    $('select').niceSelect();
  });

/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});