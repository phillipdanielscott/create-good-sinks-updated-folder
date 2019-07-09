$(document).ready(function() {
  function initCollapsibleWithjQuery() {
    var collapsibleButtons$ = $(".collapsible");
    collapsibleButtons$.each(function(index, ele) {
       var collapsible$ = $(ele),
           content$ = collapsible$.next();
       collapsible$.click(function() {
         collapsible$.toggleClass("active");
         if (!collapsible$.hasClass("active")) {
           content$.css("maxHeight", "0px");
         } else {
           content$.css("maxHeight", content$.prop("scrollHeight")+"px");
         }
       });
    });
  }

 /************************************************************************
  * Create a collapsible section. When a user clicks on a collapsible the element immediately
  * after it will toggle being open and closed.
  * @param collapsibles$ [$(".collapsible")] jQuery DOM object to make collapsible. This is the "trigger" part.
  */
 function initializeCollapsible(collapsibles$) {
   if (collapsibles$ === null) {
     var collapsibles$ = $(".collapsible");
   }

  collapsibles$.each(function(index, ele) {
       var collapsible$ = $(ele),
           content$ = collapsible$.next();
       collapsible$.click(function() {
         collapsible$.toggleClass("active");
         if (collapsible$.hasClass("active")) {
           content$.css("maxHeight", content$.prop("scrollHeight")+"px");
         } else {
           content$.css("maxHeight", "0px");
         }
       });
    });
 }

  function initCollapsibleWithVanillaJs() {
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    }

  }

 initCollapsibleWithjQuery();
 // initCollapsibleWithVanillaJs();



 // Initiate the wowjs animation library
new WOW().init();

if (window.matchMedia("(max-width: 768px)").matches) {
  /* The viewport is less than, or equal to, 700 pixels wide */
  console.log("I am 768 or less");
  $('.diagram-box-right').removeClass("fadeInLeft").addClass("fadeInDown");
  $('.diagram-left').removeClass("fadeInRight").addClass("fadeInUp");
  $("header").removeClass("mobile_nav-fixed--true").addClass("mobile_nav-fixed--false");
    $("#side-gallery-images").removeClass("left-thumbnails");
}




});
