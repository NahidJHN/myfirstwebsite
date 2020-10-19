$(document).ready(function () {
   $(".owl-carousel").owlCarousel(
      {
       autoplay:true,
       loop:true,
       responsiveClass:true,
       responsiveRefreshRate:true,
       responsive:{
          0:{
             items:1
          },
          767:{
            items:2
          },
          991:{
             items:3
          }
       }
   }
   );
});

let activityImageOverlay = document.querySelectorAll(".activityImageOverlay");
let h1 = document.querySelectorAll(".activityImageCaption h1");
let h1Text=h1[0].innerText


for (let i = 0; i < activityImageOverlay.length; i++) {
   activityImageOverlay[i].addEventListener("mouseover", function () {
      h1[i].innerText = ""
   })
}
for (let i = 0; i < activityImageOverlay.length; i++) {
   activityImageOverlay[i].addEventListener("mouseout", function () {
      h1[i].innerText = h1Text
   })
}



let avater = document.querySelectorAll(".avater");
let testimonialText = document.querySelector(".testimonialText");
let activeAvaterImg = document.querySelector(".activeAvaterImg");
let i

var slideIndex = 1;
clickFuntion(2)

function clickFuntion(n) {
   sliderFunction(slideIndex = n)
}


function sliderFunction(n) {
   for (i = 0; i < avater.length; i++) {
      avater[i].className = avater[i].className.replace(" activeAvaterImg", "");
   }
   avater[slideIndex-1].className += " activeAvaterImg";
}



//click to top button show hide function
window.onscroll = function () {
   scrollFunction()
}

function scrollFunction() {
   let scrollbar = document.querySelector(".clickToTop");
   if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      scrollbar.style.display = "block"
   } else {
      scrollbar.style.display = "none"
   }
}

//click to top function
function clickToTop() {
   document.documentElement.scrollTop = 0;

}




function onEmbedLoad() {
   initEmbed([null, null, null, null, null, [
         [
            [2, "spotlight", null, [
               ["gid", "9A1gNITn-fgprxF-mMU58Q"]
            ], null, null, null, [
               [null, null, null, null, null, null, null, null, null, null, null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 1]],
               ["0x8856a03af474f38f:0xf8301daadf5f7670", "Fourth Ward, Charlotte, NC, USA", null, [null, null, 35.2310009, -80.84193069999999], 1, 1], null, null, null, null, null, null, null, null, 11, null, [null, "hh,hplexp,a", null, null, null, null, null, null, null, null, null, null, null, 1, null, null, null, [null, null, null, null, 0, 0, null, null, 1, null, null, 1, null, null, null, 0], null, null, null, [null, null, null, null, null, 2, 3, 2]], null, null, null, null, null, [14, 29]
            ]]
         ]
      ], null, ["en_US", "in"],
      [null, null, null, "/maps/api/js/ApplicationService.GetEntityDetails", "/maps/embed/upgrade204", null, "/maps/embed/record204"], null, null, null, null, null, null, null, null, "gzRwX9bEBZC7rQGeh43YCA", null, null, null, [
         [
            [13035.46901327725, -80.84521075000001, 35.23465719999999],
            [0, 0, 0], null, 13.10000038146973
         ], null, 0, [
            ["0x8856a03af474f38f:0xf8301daadf5f7670", "Fourth Ward, Charlotte, NC, USA", [35.2310009, -80.84193069999999]], "Fourth Ward", ["Charlotte, NC", "USA"], null, null, null, null, null, null, null, null, null, null, "Charlotte, NC, USA", null, null, null, null, null, [null, null, null, null, null, null, null, 1], null, null, null, 1, 1, null, null, "ChIJj_N09DqgVogRcHZf36odMPg", null, null, "0ahUKEwiWkpXq3YjsAhWQXSsKHZ5DA4sQ8BcIAigAMAA"
         ]
      ], null, 0, [null, null, null, null, null, null, null, null, null, [0, 0]], 0, null, null, null, null, null, null, [1]
   ]);
}

function onApiLoad() {
   var embed = document.createElement('script');
   embed.src = "https://maps.gstatic.com/maps-api-v3/embed/js/42/6/init_embed.js";
   document.body.appendChild(embed);
}