const $cardsMenu = document.querySelector(".cards-menu")
const $sectionHeading = document.querySelector(".section-heading")

const handleTitle = ({ name, stars, price, kitchen }) => {
  $sectionHeading.innerHTML = `
            <h2 class="section-title restaurant-title">${name}</h2>
            <div class="card-info">
              <div class="rating">
                ${stars}
              </div>
              <div class="price">От ${price} ₽</div>
              <div class="category">${kitchen}</div>
            </div>`
}

const renderItems = data => {
  data.forEach(({ description, id, image, name, price }) => {
    const $card = document.createElement("div")

    $card.classList.add("card")

    $card.innerHTML = `<img src=${image} alt=${id} class="card-image" />
						<div class="card-text">
							<div class="card-heading">
								<h3 class="card-title card-title-reg">${name}</h3>
							</div>
							<div class="card-info">
								<div class="ingredients">${description}
								</div>
							</div>
							<div class="card-buttons">
								<button class="button button-primary button-add-cart">
									<span class="button-card-text">В корзину</span>
									<span class="button-cart-svg"></span>
								</button>
								<strong class="card-price-bold">${price} ₽</strong>
							</div>
            </div>`

    $cardsMenu.append($card)
  })
}

if (localStorage.getItem("restaurant")) {
  const restaurant = JSON.parse(localStorage.getItem("restaurant"))

  handleTitle(restaurant)

  fetch(`./db/${restaurant.products}`)
    .then(response => response.json())
    .then(data => renderItems(data))
    .catch(error => console.log("###e:", error))
} else {
  window.location.href = "/"
}
