//秒杀轮播
var seckill = new Swiper('.swiper-container-seckill',{
  slidesPerView : 5,
  slidesPerGroup : 5,
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
  calculateHeight : true,
});

//秒杀倒计时
function timeCount(t) {
  //IE 不支持new Date() 带参数调用；
  var myDate = function (t) {
    var arr = t.split(' ');
    var days = arr[0].split('-');
    var mi = arr[1].split(':');
    var date = new Date();
    //给date赋值  年月日
    date.setUTCFullYear(days[0], days[1] - 1, days[2]);
    //给date赋值 时分秒  首先转换utc时区 ：+8
    date.setUTCHours(mi[0] - 8, mi[1], mi[2]);
    return date;
  };
  var time_end = "";
  if(typeof(t) == "number"){
    time_end = t;
  }else if(typeof(t)=="string"){
    time_end = myDate(t).getTime();
  }
  var time_n = parseInt(new Date().getTime());
  var count = time_end - time_n;

  var timer = setInterval(function () {
    var days = parseInt(count/(1000 * 60 * 60 *24));
    var hours = parseInt((count % (1000 * 60 * 60 *24))/(1000 * 60 * 60));
    var minutes = parseInt((count % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = parseInt((count % (1000 * 60)) / 1000);
    count = (parseInt(count/1000) - 1)*1000;
    if(days < 10){
      days = '0'+days;
    }
    if(hours < 10){
      hours = '0'+hours;
    }
    if(minutes < 10){
      minutes = '0'+minutes
    }
    if(seconds < 10){
      seconds = '0'+seconds
    }
    $(".seckill-time .t-d").text(days);
    $(".seckill-time .t-h").text(hours);
    $(".seckill-time .t-m").text(minutes);
    $(".seckill-time .t-s").text(seconds);

    if(count < 1000){
      clearInterval(timer);
      $(".seckill-time .t-d").text('00');
      $(".seckill-time .t-h").text('00');
      $(".seckill-time .t-m").text('00');
      $(".seckill-time .t-s").text('00');
    }
  },1000);
}
timeCount(1528365600000);