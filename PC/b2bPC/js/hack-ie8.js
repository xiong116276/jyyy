// 选择器
$(".home-product .center-box .row-1 .item:last-child").each(function () {
  $(this).css("border-right",0);
});

//列表页商品
$(".goods-list-container-new .goods-show .show-table .goods-item:nth-child(5n)").each(function () {
  $(this).css("margin-right",0);
});

//添加提示
var tips = function(){
  alert('你所用的浏览器版本过低，为了更好的体验，请升级或更换浏览器！');
};
// tips();