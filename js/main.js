
$.backstretch("../images/bg.jpg");

var setActiveLink = $("#topNav").on("click","a",function(){
    $("#topNav .active").toggleClass("active");
    $this = $(this);
    $this.toggleClass("active");

})
function getContent(fragmentId,callback){
    var request = new XMLHttpRequest();
    request.onload = function(){
        callback(request.responseText);
    };
    request.open("GET","../html/"+fragmentId+".html")
    request.send(null);
    
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



