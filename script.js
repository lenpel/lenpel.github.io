// close responsive menu after click event
$('.navbar-collapse ul li a').click(function(){
  $('.navbar-toggle:visible').click();
});

$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});


// contact form -> send message and display thank you alert
var message = "";

$("#sendMessage").on("click", function() {
    message = $("#contactform").serialize();
    $.ajax({
        url: "//formspree.io/dynamicrealities@gmail.com",
        method: "POST",
        data: {message: message},
        dataType: "json"
    });
    alert('Thanks for the email, we\'ll be in touch promptly.');
    return false;
});

// --- typewriter effect for about section
// --- called in document.ready()
let totalCount = 0;

function typeText(fldName) {
  let content = $(fldName).text();
  $(fldName).text('');

  var ele = '<span>' + content.split('').join('</span><span>') + '</span>';

  $(ele).hide().appendTo(fldName).each(function (i) {
    $(this).delay(100 * totalCount).css({
      display: 'inline',
      opacity: 0
    }).animate({
      opacity: 1
    }, 100);
    totalCount++;
  });
};

$(document).ready(function(){

  // ---typewriter effect for about section
  // ---animate in loop
  function looping() {
    typeText('#text1');
    typeText('#text2');
    typeText('#text3');
    typeText('#text4');
    typeText('#text5');
    setTimeout(function(){
      looping();
    }, 40000);
    // reset totalCount before next loop
    totalCount = 0;
  }
  looping();


  // ----Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  // ===== Scroll to Top ====
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 100) {        // If page is scrolled more than 100px
        $('#scroll-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#scroll-top').fadeOut(200);   // Else fade out the arrow
    }
  });
  $('#scroll-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
    return false;
  });

});
