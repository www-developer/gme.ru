$(document).ready(function(){
    $("#sm-nav_bt").click(function(){
        $('.overlay').toggleClass("open");
        $('#bt_open').toggleClass("close");
        $('#bt_close').toggleClass("close");
    });
}); 
