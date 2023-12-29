export async function getProductsByCategory({ categoryName }) {
  const productsList = await fetch(
    `https://fakestoreapi.com/products/category/${categoryName}`,
  ).then((response) => response.json());
  return productsList;
}
