// jsを記述する際はここに記載していく

// オリジナル改修
// MOREボタンでニュース追加

var news = '<div class="news-3"><div class="news"><img src="./img/news_img.jpg" alt=""><p class="news-date">2016/11/18</p><p>チーズアカデミー卒業生のコスゲさんによるチーズだけをふんだんに使用した話題のピザ屋Kosuge Pizza」が渋谷でオープンしました！</p></div><div class="news"><img src="./img/news_img.jpg" alt=""><p class="news-date">2016/11/18</p><p>チーズアカデミー卒業生のコスゲさんによるチーズだけをふんだんに使用した話題のピザ屋Kosuge Pizza」が渋谷でオープンしました！</p></div><div class="news"><img src="./img/news_img.jpg" alt=""><p class="news-date">2016/11/18</p><p>チーズアカデミー卒業生のコスゲさんによるチーズだけをふんだんに使用した話題のピザ屋Kosuge Pizza」が渋谷でオープンしました！</p></div></div>';

$("#addNews").on("click", function () {
    $("#addNews").before(news);
});

$(window).on("load", function () {
    $(".content,#loading-title-1,#loading-title-2,#loading-title-3,#loading-title-4,#loading-title-5,#loading-title-6,#loading-title-7,#loading-title-8,#loading-title-9,#loading-title-10,#loading-title-11,#loading-title-12,#loading-title-13,#loading-title-14,#loading-title-15,#loading-title-16,#loading-title-17,#loading-title-18,#loading-title-19,#loading-title-20,#loading-title-21,#loading-title-22").hide();
    $("body").addClass("remove-scrolling");

    $("#loading-title-1").delay(100).fadeIn(100);
    $("#loading-title-2").delay(200).fadeIn(100);
    $("#loading-title-3").delay(300).fadeIn(100);
    $("#loading-title-4").delay(400).fadeIn(100);
    $("#loading-title-5").delay(500).fadeIn(100);
    $("#loading-title-6").delay(600).fadeIn(100);
    $("#loading-title-7").delay(800).fadeIn(100);
    $("#loading-title-8").delay(900).fadeIn(100);
    $("#loading-title-9").delay(1100).fadeIn(100);
    $("#loading-title-10").delay(1200).fadeIn(100);
    $("#loading-title-11").delay(1300).fadeIn(100);
    $("#loading-title-12").delay(1400).fadeIn(100);
    $("#loading-title-13").delay(1500).fadeIn(100);
    $("#loading-title-14").delay(1600).fadeIn(100);
    $("#loading-title-15").delay(1800).fadeIn(100);
    $("#loading-title-16").delay(1900).fadeIn(100);
    $("#loading-title-17").delay(2000).fadeIn(100);
    $("#loading-title-18").delay(2200).fadeIn(100);
    $("#loading-title-19").delay(2300).fadeIn(100);
    $("#loading-title-20").delay(2400).fadeIn(100);
    $("#loading-title-21").delay(2500).fadeIn(100);
    $("#loading-title-22").delay(2600).fadeIn(100, function () {
    });

    $('#loading').delay(3100).fadeOut(500, function () {
        $("body").removeClass("remove-scrolling");
        $(".content").fadeIn(500);
    });
});

$(".slider").slick({
    centerMode: true,
    centerPadding: "35%",
    autoplay: true,
    autoplaySpeed: 750,
    speed: 1000,
    infinite: true,
    arrows: false
});