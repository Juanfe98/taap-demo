import categoriesList from "@/app/data/products_categories.json";
// When the API is active uncomment the code  and delete the import from the products_categories.JSON
export async function getCategories() {
  // const categoriesList = await fetch(`http://localhost:8090/categories/`).then(
  //   (response) => response.json(),
  // );
  return categoriesList;
}
