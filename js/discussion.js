$(document).ready(function (){
    (function fun2() { $("#pinlun").on("click", "button",
    function() { $(this).parent().parent().remove(); })})()
})
function fun1(){ $('#pinlun').append( "<div id='neirong'>" + text.value+"<br><p><button id='btn_2'>删除评论</button></p></div>"); text.value="";}