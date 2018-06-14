function getRem(pwidth,prem){
  var html = document.documentElement;
  var oWidth = window.innerWidth<pwidth? window.innerWidth:pwidth;
  html.setAttribute("style","font-size: "+oWidth/pwidth*prem+"px !important");
}
getRem(750,100);
window.onresize = function () {
  getRem(750,100);
};
