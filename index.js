if(screen.width >= 1024){
    

var navItems = document.querySelectorAll(".nav-item");

$(navItems).hover(function(){
    $(this).addClass("bottom-border-gradient")
}, function() {
    $(this).removeClass("bottom-border-gradient")
});


var articles = document.querySelectorAll(".articles-box")

$(articles).hover(function(){
    $(this.querySelector(".articles-heading")).css("color", "#2cc4a0");
}, function() {
    $(this.querySelector(".articles-heading")).css("color", "hsl(233, 26%, 24%)");
});


var refs = document.querySelectorAll("#footer a");

$(refs).hover(function() {
    $(this).css("color", "#2cc4a0")
}, function() {
    $(this).css("color", "#fff")

});



var icons = document.querySelectorAll("#footer i");

$(icons).hover(function() {
    $(this).css("color", "#2cc4a0")
}, function() {
    $(this).css("color", "#fff")
})


}