// to get current year
function getYear() {
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();
var images = [
  "images/banner/b2.png",
  "images/banner/b3.png",
  "images/banner/b4.png",
  "images/banner/b5.png", // Thêm nhiều ảnh nếu cần
  "images/banner/b6.png",
  "images/banner/b7.png",
];

var currentIndex = 0; // Chỉ số ảnh hiện tại

// Hàm để thay đổi ảnh
function changeImage() {
  currentIndex++; // Tăng chỉ số ảnh
  if (currentIndex >= images.length) {
    currentIndex = 0; // Nếu đã đến ảnh cuối, quay lại ảnh đầu
  }
  document.getElementById("myImage").src = images[currentIndex]; // Thay đổi ảnh
}

// Thay đổi ảnh sau mỗi 2 giây (2000 milliseconds)
setInterval(changeImage, 2500);

// isotope js
$(window).on("load", function () {
  // Xử lý khi bấm vào menu chính (filters_menu)
  $(".filters_menu li").click(function () {
    $(".filters_menu li").removeClass("active");
    $(this).addClass("active");

    // Lấy giá trị filter
    var data = $(this).attr("data-filter");

    // Kiểm tra nếu filter là 'monchinh', hiển thị filter_monchinh
    if (data === ".monchinh") {
      $(".filters_monchinh").show();
    } else {
      $(".filters_monchinh").hide(); // Ẩn filter_monchinh nếu không phải 'monchinh'
    }

    // Áp dụng filter cho isotope
    $grid.isotope({
      filter: data,
    });
  });

  // Xử lý các item bên trong filters_monchinh
  $(".filters_monchinh li").click(function () {
    $(".filters_monchinh li").removeClass("active");
    $(this).addClass("active");

    var data = $(this).attr("data-filter");
    $grid.isotope({
      filter: data,
    });
  });

  // Khởi tạo isotope
  var $grid = $(".grid").isotope({
    itemSelector: ".all",
    percentPosition: false,
    masonry: {
      columnWidth: ".all",
    },
  });

  // Ẩn filter_monchinh ban đầu
  $(".filters_monchinh").hide();
});

// nice select
$(document).ready(function () {
  $("select").niceSelect();
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
    '<i class="fa fa-angle-right" aria-hidden="true"></i>',
  ],
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1000: {
      items: 2,
    },
  },
});
