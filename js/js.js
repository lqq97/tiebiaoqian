/**
 * Created by Administrator on 2016/8/25.
 */
window.onload=function() {
    function trim(str) {
        return str.replace(/(^\s*)|(\s*$)/g, '');
    }

    var box = document.getElementById('box');
    var input = box.getElementsByTagName('input')[0];
    var ul = box.getElementsByTagName('ul')[0];

    input.onkeydown = function (e) {
        var event = e || window.event;
        var keyCode = event.which || event.keyCode;
       /* console.log(keyCode);*/
        if (keyCode == 13 || keyCode == 32) {
            var newLi = document.createElement('li');
            var Val = trim(input.value);
            var lis = ul.getElementsByTagName('li');
            if (Val == '') {
                return alert('请输入标签内容');
            }
            if (Val.length > 12) {
                return alert('标签长度过长');
            }
            for (var i = 0; i < lis.length; i++) {
                var spanHtml = lis[i].getElementsByTagName('span')[0].innerHTML;
                if (spanHtml == Val) {
                    return alert('请勿输入重复内容');
                }
            }
            newLi.innerHTML = '<span>' + Val + '</span><i>x</i>';
            ul.appendChild(newLi);
            input.value = '';
        }
    }

    ul.onclick=function(e){
        var event=e||window.event;
        var target=event.target|| event.srcElement;
        if(target.nodeName.toLowerCase()=='i'){
            target.parentNode.parentNode.removeChild(target.parentNode);
        }
    }

    input.onfocus=function(){
        var Val=trim(this.value);
        if(Val=='添加标签，用空格或回车确认'){
            this.value='';
            this.style.color='#000';
        }
    }
    input.onblur=function(){
        var Val=trim(this.value);
        if(Val==''){
            this.value='添加标签，用空格或回车确认';
            this.style.color=lightpink;
        }
    }


}





