let selectedProducts = JSON.parse(localStorage.getItem("selectedProducts"));

console.log(selectedProducts);

if (selectedProducts && selectedProducts.length > 0) {
  let orderDetails = document.getElementById("order-details");
  let totalPrice = 0;

  selectedProducts.forEach((product) => {
    let productElement = document.createElement("p");
    let productPrice = parseFloat(product.totalPrice.replace("R$", "").replace(",", "."));
    totalPrice += productPrice;

    productElement.textContent = `${product.name} - Quantidade: ${product.quantity} - Total: R$${product.totalPrice}`;
    orderDetails.appendChild(productElement);
  });

  // Adicione a lógica de cobrança de frete
  let shippingCost = 0;
  let shippingInfo = ""; // Variável para armazenar a informação sobre o frete

  if (totalPrice < 80) {
    shippingCost = 15;
    shippingInfo = "Frete: R$15,00";
  } else {
    shippingInfo = "Frete: Grátis";
  }

  let totalElement = document.createElement("p");
  let finalPrice = totalPrice + shippingCost;
  totalElement.textContent = `Preço Total: R$${finalPrice.toFixed(2).replace(".", ",")}`;
  orderDetails.appendChild(totalElement);

  // Adicione o parágrafo para exibir a informação sobre o frete
  let shippingElement = document.getElementById("shipping-cost");
  shippingElement.textContent = shippingInfo;

  let statusElement = document.createElement("p");
  statusElement.textContent = "Status: Em preparação";
  orderDetails.appendChild(statusElement);

  let estimationElement = document.createElement("p");
  estimationElement.textContent = "Estimativa de entrega: 30 minutos";
  orderDetails.appendChild(estimationElement);
}
