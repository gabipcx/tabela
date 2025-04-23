url = "https://fakestoreapi.com/products"

fetch('https://fakestoreapi.com/products')

.then(Response => Response.json())
.then(data => {
  const tableBody  = document.getElementById('ProdutosTabela');

  for (let i = 0; i < 10; i++) {
    const product = data[i];
     const row = `
    <tr>
     <td>${product.id}</td>
        <td><img src="${product.image}" alt="${product.title}" style="width: 50px;"></td>
        <td>${product.title}</td>
        <td>${product.category}</td>
        <td>R$ ${product.price.toFixed(2)}</td>
         <td>${product.description}</td>
          <td>${product.rating.rate}</td>
          <td>${product.rating.count}</td>
        </tr>
     `;

     tableBody.innerHTML += row;
 }
 })
     .catch(error => {
      console.error('deu erro vei:', error);
     }); 
 

