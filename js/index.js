console.log("Your index.js file is loaded correctly!")

$("#myID").on("click", function(){
    console.log("You clicked on #myID");
    $(".fadeMe").fadeToggle("slow");
});

$("li").on({
    mouseenter: function () {
        $(this).append($("<span> ***</span>"));
    },
    mouseleave: function () {
        $(this).find("span").last().remove();
    }
});

$("li.fade").on(function(){
    $(this).fadeOut(100);
    $(this).fadeIn(500);
});