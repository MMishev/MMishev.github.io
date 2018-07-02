
$.backstretch("images/bg.jpg");

var setActiveLink = $("#topNav").on("click","a",function(){
    $("#topNav .active").toggleClass("active");
    $this = $(this);
    $this.toggleClass("active");

})
function getContent(fragmentId,callback){
    var partials ={
        home:"home",
        groups:"groups",
        topscorers:"topscorers",
        stadiums:"stadiums",
        info:"info"

    }

    callback(partials[fragmentId]);
}
function navigate(){
    var contentDiv = $("#main");
    fragmentId = location.hash.substr(1);
    getContent(fragmentId,function(content){
        contentDiv.html(content)
    })
}

if(!location.hash){
    location.hash="#home"
}

navigate();

$(window).on("hashchange",navigate);



