// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("h_top").style.top = "-100px";
        document.getElementById("h_bottom").style.top = "-100px";
      } else {
        document.getElementById("h_top").style.top = "auto";
        document.getElementById("h_bottom").style.top = "auto";
      }
}