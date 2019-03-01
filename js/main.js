$(document).ready( function() {
  $(".reviews__list").slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 8000,
    adaptiveHeight: true,
    arrows: false
  });


  $(".sign-up").on("click", function(e) {
    e.preventDefault();
    $("body").toggleClass("no-scroll");
    $(".modal-form__overlay").show();
    $(".modal-form__content").toggleClass("modal-form__content--active");
  });


  $(".modal-form__close-btn").on("click", function() {
    $(".modal-form__content").toggleClass("modal-form__content--active");
    $(".modal-form__overlay").hide();
    $("body").toggleClass("no-scroll");
  });


  $(".modal-form__overlay").on("click", function() {
    $(".modal-form__content").toggleClass("modal-form__content--active");
    $(this).hide();
    $("body").toggleClass("no-scroll");
  });
});
