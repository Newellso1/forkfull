export async function fetchRecipes() {
  try {
    const response = await fetch("https://dummyjson.com/recipes");
    if (!response.ok) throw new Error("Failed to fetch recipes");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

// export async function fetchTags() {
//   try {
//     const response = await fetch("https://dummyjson.com/recipes/tags");
//     if (!response.ok) throw new Error("Failed to fetch tags");
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// }
