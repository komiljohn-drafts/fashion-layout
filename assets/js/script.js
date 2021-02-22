const slickProps = {
  centerMode: true,
  cssEase: 'linear',
  centerPadding: '60px',
  slidesToShow: 4,
  arrows: false,
  autoplay: true,
  speed: 3500,
  easing: 'linear',
  draggable: false,
  autoplaySpeed: 0
}

$('.woman__slider').slick({
  ...slickProps
  // responsive: [
  //     {
  //       breakpoint: 768,
  //       settings: {
  //           arrows: false,
  //           centerMode: true,
  //           centerPadding: '40px',
  //           slidesToShow: 3
  //       }
  //     },
  //       {
  //       breakpoint: 480,
  //       settings: {
  //           arrows: false,
  //           centerMode: true,
  //           centerPadding: '40px',
  //           slidesToShow: 1
  //       }
  //     }
  // ]
});
$('.man__slider').slick({
  ...slickProps,
  rtl: true,
  // responsive: [
  //     {
  //       breakpoint: 768,
  //       settings: {
  //           arrows: false,
  //           centerMode: true,
  //           centerPadding: '40px',
  //           slidesToShow: 3
  //       }
  //     },
  //       {
  //       breakpoint: 480,
  //       settings: {
  //           arrows: false,
  //           centerMode: true,
  //           centerPadding: '40px',
  //           slidesToShow: 1
  //       }
  //     }
  // ]
});