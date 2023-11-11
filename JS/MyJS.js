debugger
$(function () {
    //$('.coun').counterUp();
    $('.coun').counterUp({
        delay: 10,
        duration: 3000
    });
    mybutton = document.getElementById("myBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }
    $("#myBtn").click(function () {

        $("body,html").animate({
            scrollTop: $("#topheader").offset().top
        }, 2000)

    });
    //
    $(window).scroll(function () {
        //debugger;
        var s = $(window).scrollTop()
        if (s > 80) {
            $(".navbar").addClass("sticky")
        }
        else {
            $(".navbar").removeClass("sticky")
        }
    });
    setTimeout(function () {
        $('.loader_bg').fadeToggle();
    }, 2000);
});
