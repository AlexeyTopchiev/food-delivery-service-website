const renderItems = data => {
  data.forEach(el => console.log(el))
}

fetch("https://simple-food-market-default-rtdb.firebaseio.com/db/partners.json")
  .then(response => response.json())
  .then(data => renderItems(data))
  .catch(error => console.log("###e:", error))
