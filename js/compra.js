const sandwichPrices = [
  { name: "X-PICANHA", price: 18.0 },
  { name: "X-BACON", price: 15.0 },
  { name: "X-SALADA", price: 18.0 },
  { name: "2 COXINHAS", price: 10.0 },
  { name: "2 X-PICANHA", price: 15.0 },
  { name: "3 X-PICANHA", price: 42.0 },
  { name: "X-PICANHA + BATATA", price: 22.0 },
  { name: "X-PICANHA + COXINHA", price: 21.0 },
];

document.getElementById("finalizar").addEventListener("click", function () {
  let selectedProducts = [];

  for (let i = 1; i <= 8; i++) {
    let quantityElement = document.getElementById(`quantity${i}`);
    let quantityNumber = parseInt(quantityElement.textContent);

    if (quantityNumber > 0) {
      let nameElement = document.getElementById(`name${i}`);
      let name = nameElement.textContent.trim();
      let priceElement = document.getElementById(`total-price${i}`);
      let totalPrice = priceElement.textContent;

      selectedProducts.push({
        name: name,
        quantity: quantityNumber,
        totalPrice: totalPrice,
      });
    }
  }

  // Armazene os produtos selecionados no localStorage
  localStorage.setItem("selectedProducts", JSON.stringify(selectedProducts));

  // Redirecione para a página de agradecimento
  window.location.href = "telafinal.html";
});

function updateTotalPrice(totalPriceElement, name, quantityNumber, type) {
  const trimmedName = name.textContent.trim();
  const unitPrice = sandwichPrices.find(
    (sandwich) => sandwich.name === trimmedName
  );
  const totalPrice = unitPrice.price * quantityNumber;
  totalPriceElement.textContent = totalPrice.toFixed(2).replace(".", ",");
  updateFinalPrice(unitPrice.price, type);
}

function updateFinalPrice(price, type) {
  var currentFinalPriceElement = document.getElementById("valortotal");
  if (type === "up") {
    var newTotalPrice = parseInt(currentFinalPriceElement.textContent) + price;
    currentFinalPriceElement.textContent = newTotalPrice;
  } else {
    var newTotalPrice = parseInt(currentFinalPriceElement.textContent) - price;
    currentFinalPriceElement.textContent = newTotalPrice;
  }
  var freteElement = document.getElementById("frete");
  if (currentFinalPriceElement.textContent >= 80) {
    freteElement.textContent = "Grátis";
  } else {
    freteElement.textContent = "5,50";
  }
}

document.getElementById("seta-up").addEventListener("click", function () {
  var quantityElement = document.getElementById("quantity1");
  var quantityNumber = parseInt(quantityElement.textContent);
  quantityNumber += 1;
  quantityElement.textContent = quantityNumber;
  var totalPriceElement = document.getElementById("total-price1");
  var name = document.getElementById("name1");

  updateTotalPrice(totalPriceElement, name, quantityNumber, "up");
});

document.getElementById("seta-down").addEventListener("click", function () {
  var quantityElement = document.getElementById("quantity1");
  var quantityNumber = parseInt(quantityElement.textContent);
  if (quantityNumber === 0) {
    return;
  }
  quantityNumber -= 1;
  quantityElement.textContent = quantityNumber;
  var totalPriceElement = document.getElementById("total-price1");
  var name = document.getElementById("name1");

  updateTotalPrice(totalPriceElement, name, quantityNumber);
});

document.getElementById("seta-up2").addEventListener("click", function () {
  var quantityElement = document.getElementById("quantity2");
  var quantityNumber = parseInt(quantityElement.textContent);
  quantityNumber += 1;
  quantityElement.textContent = quantityNumber;
  var totalPriceElement = document.getElementById("total-price2");
  var name = document.getElementById("name2");

  updateTotalPrice(totalPriceElement, name, quantityNumber, "up");
});

document.getElementById("seta-down2").addEventListener("click", function () {
  var quantityElement = document.getElementById("quantity2");
  var quantityNumber = parseInt(quantityElement.textContent);
  if (quantityNumber === 0) {
    return;
  }
  quantityNumber -= 1;
  quantityElement.textContent = quantityNumber;
  var totalPriceElement = document.getElementById("total-price2");
  var name = document.getElementById("name2");

  updateTotalPrice(totalPriceElement, name, quantityNumber);
});

document.getElementById("seta-up3").addEventListener("click", function () {
  var quantityElement = document.getElementById("quantity3");
  var quantityNumber = parseInt(quantityElement.textContent);
  quantityNumber += 1;
  quantityElement.textContent = quantityNumber;
  var totalPriceElement = document.getElementById("total-price3");
  var name = document.getElementById("name3");

  updateTotalPrice(totalPriceElement, name, quantityNumber, "up");
});

document.getElementById("seta-down3").addEventListener("click", function () {
  var quantityElement = document.getElementById("quantity3");
  var quantityNumber = parseInt(quantityElement.textContent);
  if (quantityNumber === 0) {
    return;
  }
  quantityNumber -= 1;
  quantityElement.textContent = quantityNumber;
  var totalPriceElement = document.getElementById("total-price3");
  var name = document.getElementById("name3");

  updateTotalPrice(totalPriceElement, name, quantityNumber);
});

document.getElementById("seta-up4").addEventListener("click", function () {
  var quantityElement = document.getElementById("quantity4");
  var quantityNumber = parseInt(quantityElement.textContent);
  quantityNumber += 1;
  quantityElement.textContent = quantityNumber;
  var totalPriceElement = document.getElementById("total-price4");
  var name = document.getElementById("name4");

  updateTotalPrice(totalPriceElement, name, quantityNumber, "up");
});

document.getElementById("seta-down4").addEventListener("click", function () {
  var quantityElement = document.getElementById("quantity4");
  var quantityNumber = parseInt(quantityElement.textContent);
  if (quantityNumber === 0) {
    return;
  }
  quantityNumber -= 1;
  quantityElement.textContent = quantityNumber;
  var totalPriceElement = document.getElementById("total-price4");
  var name = document.getElementById("name4");

  updateTotalPrice(totalPriceElement, name, quantityNumber);
});

document.getElementById("seta-up5").addEventListener("click", function () {
  var quantityElement = document.getElementById("quantity5");
  var quantityNumber = parseInt(quantityElement.textContent);
  quantityNumber += 1;
  quantityElement.textContent = quantityNumber;
  var totalPriceElement = document.getElementById("total-price5");
  var name = document.getElementById("name2");

  updateTotalPrice(totalPriceElement, name, quantityNumber, "up");
});

document.getElementById("seta-down5").addEventListener("click", function () {
  var quantityElement = document.getElementById("quantity5");
  var quantityNumber = parseInt(quantityElement.textContent);
  if (quantityNumber === 0) {
    return;
  }
  quantityNumber -= 1;
  quantityElement.textContent = quantityNumber;
  var totalPriceElement = document.getElementById("total-price5");
  var name = document.getElementById("name5");

  updateTotalPrice(totalPriceElement, name, quantityNumber);
});

document.getElementById("seta-up6").addEventListener("click", function () {
  var quantityElement = document.getElementById("quantity6");
  var quantityNumber = parseInt(quantityElement.textContent);
  quantityNumber += 1;
  quantityElement.textContent = quantityNumber;
  var totalPriceElement = document.getElementById("total-price6");
  var name = document.getElementById("name6");

  updateTotalPrice(totalPriceElement, name, quantityNumber, "up");
});

document.getElementById("seta-down6").addEventListener("click", function () {
  var quantityElement = document.getElementById("quantity6");
  var quantityNumber = parseInt(quantityElement.textContent);
  if (quantityNumber === 0) {
    return;
  }
  quantityNumber -= 1;
  quantityElement.textContent = quantityNumber;
  var totalPriceElement = document.getElementById("total-price6");
  var name = document.getElementById("name6");

  updateTotalPrice(totalPriceElement, name, quantityNumber);
});

document.getElementById("seta-up7").addEventListener("click", function () {
  var quantityElement = document.getElementById("quantity7");
  var quantityNumber = parseInt(quantityElement.textContent);
  quantityNumber += 1;
  quantityElement.textContent = quantityNumber;
  var totalPriceElement = document.getElementById("total-price7");
  var name = document.getElementById("name7");

  updateTotalPrice(totalPriceElement, name, quantityNumber, "up");
});

document.getElementById("seta-down7").addEventListener("click", function () {
  var quantityElement = document.getElementById("quantity7");
  var quantityNumber = parseInt(quantityElement.textContent);
  if (quantityNumber === 0) {
    return;
  }
  quantityNumber -= 1;
  quantityElement.textContent = quantityNumber;
  var totalPriceElement = document.getElementById("total-price7");
  var name = document.getElementById("name7");

  updateTotalPrice(totalPriceElement, name, quantityNumber);
});

document.getElementById("seta-up8").addEventListener("click", function () {
  var quantityElement = document.getElementById("quantity8");
  var quantityNumber = parseInt(quantityElement.textContent);
  quantityNumber += 1;
  quantityElement.textContent = quantityNumber;
  var totalPriceElement = document.getElementById("total-price8");
  var name = document.getElementById("name8");

  updateTotalPrice(totalPriceElement, name, quantityNumber, "up");
});

document.getElementById("seta-down8").addEventListener("click", function () {
  var quantityElement = document.getElementById("quantity8");
  var quantityNumber = parseInt(quantityElement.textContent);
  if (quantityNumber === 0) {
    return;
  }
  quantityNumber -= 1;
  quantityElement.textContent = quantityNumber;
  var totalPriceElement = document.getElementById("total-price8");
  var name = document.getElementById("name8");

  updateTotalPrice(totalPriceElement, name, quantityNumber);
});
