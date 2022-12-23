$(document).ready(function() {

    $("#1").click(function() {

        document.getElementById("MyDiv").style.display = 'block';
            document.getElementById("fade").style.display = 'block';
            var bgdiv = document.getElementById("fade");
            bgdiv.style.width = document.body.scrollWidth;
            $("#fade").height($(document).height());

    });
    $("#fade").click(function() {
        document.getElementById("MyDiv").style.display = 'none';
        document.getElementById("fade").style.display = 'none';
    });
});