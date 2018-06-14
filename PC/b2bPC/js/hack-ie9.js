//兼容 ie9 及以下 版本 不支持的一些 css 属性

//input placeholder属性
(function (win,doc) {
  var inputs = document.getElementsByTagName('input');

  for (var i = 0,len = inputs.length;i<len;i++){
    if(inputs[i].attributes['placeholder'].nodeValue.length > 0){
      var text = inputs[i].attributes['placeholder'].nodeValue;
      if(inputs[i].value.replace(/(^\s*)|(\s*$)/g,'').length < 1){
        inputs[i].value = text;

        if (inputs[i].addEventListener) {
          inputs[i].addEventListener("focus", function () {
            if(this.value !== text){
              this.value = this.value;
            }else {
              this.value = "";
            }
          });
          inputs[i].addEventListener("blur", function () {
            if(this.value !== text){
              if(this.value.replace(/(^\s*)|(\s*$)/g,'').length < 1){
                this.value = text;
              }else{
                this.value = this.value;
              }
            }else{
              this.value = text;
            }
          });
        } else if (inputs[i].attachEvent) {
          inputs[i].attachEvent("onfocus", function (event) {
            if(event.srcElement.value !== text){
              event.srcElement.value = event.srcElement.value;
            }else {
              event.srcElement.value = "";
            }
          });
          inputs[i].attachEvent("onblur", function (event) {
            if(event.srcElement.value !== text){
              if(event.srcElement.value.replace(/(^\s*)|(\s*$)/g,'').length < 1){
                event.srcElement.value = text;
              }else{
                event.srcElement.value = event.srcElement.value;
              }
            }else{
              this.value = text;
            }
          });
        }
      }
    }
  }
})(window,document);




