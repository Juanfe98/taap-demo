import productsList from "@/app/data/products.json";
export async function getProductsByCategory({ categoryName }) {
  const productsList = await fetch(
    `https://fakestoreapi.com/products/category/${categoryName}`,
  ).then((response) => response.json());
  return productsList;
}

// When the API is active uncomment the code  and delete the import from the prductsJSON
export async function getProducts() {
  // const productsList = await fetch(`http://localhost:8090/products/`).then(
  //   (response) => response.json(),
  // );
  return productsList;
}
