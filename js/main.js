
$.backstretch("../images/bg.jpg");

var setActiveLink = $("#topNav").on("click","a",function(){
    $("#topNav .active").toggleClass("active");
    $this = $(this);
    $this.toggleClass("active");

