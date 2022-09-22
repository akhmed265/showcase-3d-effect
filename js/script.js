document.addEventListener('DOMContentLoaded', function() {

  const showSlider = new  Swiper('showcase-carousel', {
    loop: true,
    slidesPerView: 3
  })

  document.querySelector('video').playbackRate = 2
}) 