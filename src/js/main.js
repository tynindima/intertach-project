$(document).ready(function () {

  $('.slider').slick({
    arrows: true,
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    slidesPerRow: 1,
    rows: 2,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesPerRow: 1,
          rows: 2,
        }
      },
      {
        breakpoint: 788,
        settings: {
          slidesToShow: 1,
          rows: 1,
          variableWidth: true,
          arrows: false,
        }
      },
    ]
  });

});
