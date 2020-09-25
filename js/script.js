for (let i = 0; i < 6; i++) {
  console.log(i)
  $(`.slick-cards-images${i}`).slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    draggable: false,
    asNavFor: `.slick-card-mini-images${i}`,
  })
  $(`.slick-card-mini-images${i}`).slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: `.slick-cards-images${i}`,
    focusOnSelect: true,
    arrows: false,
  })
}
