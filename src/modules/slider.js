import Swiper, { Autoplay, Navigation, Pagination, Scrollbar } from "swiper"

Swiper.use([Autoplay, Navigation, Pagination, Scrollbar])

const slider = () => {
  const swiper = new Swiper(".swiper", {
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },

    // If we need pagination
    pagination: {
      el: ".swiper-pagination"
    },

    // Navigation arrows
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev"
    // },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar"
    }
  })
}

export default slider
