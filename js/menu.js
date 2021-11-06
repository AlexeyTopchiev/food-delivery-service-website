const partner = "tanuki"

const renderItems = data => {
  data.forEach(el => console.log(el))
}

fetch(`./db/${partner}.json`)
  .then(response => response.json())
  .then(data => renderItems(data))
  .catch(error => console.log("###e:", error))
