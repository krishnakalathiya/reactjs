import React from "react";

const recipes = [
  {
    id: 1,
    name: "Classic Margherita Pizza",
    ingredients: [
      "Pizza dough",
      "Tomato sauce",
      "Fresh mozzarella cheese",
      "Fresh basil leaves",
      "Olive oil",
      "Salt and pepper to taste",
    ],
    instructions: [
      "Preheat the oven to 475°F (245°C).",
      "Roll out the pizza dough and spread tomato sauce evenly.",
      "Top with slices of fresh mozzarella and fresh basil leaves.",
      "Drizzle with olive oil and season with salt and pepper.",
      "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
      "Slice and serve hot.",
    ],
    prepTimeMinutes: 20,
    cookTimeMinutes: 15,
    servings: 4,
    difficulty: "Easy",
    cuisine: "Italian",
    caloriesPerServing: 300,
    tags: ["Pizza", "Italian"],
    userId: 166,
    image: "https://cdn.dummyjson.com/recipe-images/1.webp",
    rating: 4.6,
    reviewCount: 98,
    mealType: ["Dinner"],
  },
  {
    id: 2,
    name: "Vegetarian Stir-Fry",
    ingredients: [
      "Tofu, cubed",
      "Broccoli florets",
      "Carrots, sliced",
      "Bell peppers, sliced",
      "Soy sauce",
      "Ginger, minced",
      "Garlic, minced",
      "Sesame oil",
      "Cooked rice for serving",
    ],
    instructions: [
      "In a wok, heat sesame oil over medium-high heat.",
      "Add minced ginger and garlic, sauté until fragrant.",
      "Add cubed tofu and stir-fry until golden brown.",
      "Add broccoli, carrots, and bell peppers. Cook until vegetables are tender-crisp.",
      "Pour soy sauce over the stir-fry and toss to combine.",
      "Serve over cooked rice.",
    ],
    prepTimeMinutes: 15,
    cookTimeMinutes: 20,
    servings: 3,
    difficulty: "Medium",
    cuisine: "Asian",
    caloriesPerServing: 250,
    tags: ["Vegetarian", "Stir-fry", "Asian"],
    userId: 143,
    image: "https://cdn.dummyjson.com/recipe-images/2.webp",
    rating: 2.9,
    reviewCount: 26,
    mealType: ["Lunch"],
  },
  {
    id: 3,
    name: "Chocolate Chip Cookies",
    ingredients: [
      "All-purpose flour",
      "Butter, softened",
      "Brown sugar",
      "White sugar",
      "Eggs",
      "Vanilla extract",
      "Baking soda",
      "Salt",
      "Chocolate chips",
    ],
    instructions: [
      "Preheat the oven to 350°F (175°C).",
      "In a bowl, cream together softened butter, brown sugar, and white sugar.",
      "Beat in eggs one at a time, then stir in vanilla extract.",
      "Combine flour, baking soda, and salt. Gradually add to the wet ingredients.",
      "Fold in chocolate chips.",
      "Drop rounded tablespoons of dough onto ungreased baking sheets.",
      "Bake for 10-12 minutes or until edges are golden brown.",
      "Allow cookies to cool on the baking sheet for a few minutes before transferring to a wire rack.",
    ],
    prepTimeMinutes: 15,
    cookTimeMinutes: 10,
    servings: 24,
    difficulty: "Easy",
    cuisine: "American",
    caloriesPerServing: 150,
    tags: ["Cookies", "Dessert", "Baking"],
    userId: 34,
    image: "https://cdn.dummyjson.com/recipe-images/3.webp",
    rating: 4.9,
    reviewCount: 13,
    mealType: ["Snack", "Dessert"],
  },
  {
    id: 4,
    name: "Chicken Alfredo Pasta",
    ingredients: [
      "Fettuccine pasta",
      "Chicken breast, sliced",
      "Heavy cream",
      "Parmesan cheese, grated",
      "Garlic, minced",
      "Butter",
      "Salt and pepper to taste",
      "Fresh parsley for garnish",
    ],
    instructions: [
      "Cook fettuccine pasta according to package instructions.",
      "In a pan, sauté sliced chicken in butter until fully cooked.",
      "Add minced garlic and cook until fragrant.",
      "Pour in heavy cream and grated Parmesan cheese. Stir until the cheese is melted.",
      "Season with salt and pepper to taste.",
      "Combine the Alfredo sauce with cooked pasta.",
      "Garnish with fresh parsley before serving.",
    ],
    prepTimeMinutes: 15,
    cookTimeMinutes: 20,
    servings: 4,
    difficulty: "Medium",
    cuisine: "Italian",
    caloriesPerServing: 500,
    tags: ["Pasta", "Chicken"],
    userId: 136,
    image: "https://cdn.dummyjson.com/recipe-images/4.webp",
    rating: 4.9,
    reviewCount: 82,
    mealType: ["Lunch", "Dinner"],
  },
  {
    id: 5,
    name: "Mango Salsa Chicken",
    ingredients: [
      "Chicken thighs",
      "Mango, diced",
      "Red onion, finely chopped",
      "Cilantro, chopped",
      "Lime juice",
      "Jalapeño, minced",
      "Salt and pepper to taste",
      "Cooked rice for serving",
    ],
    instructions: [
      "Season chicken thighs with salt and pepper.",
      "Grill or bake chicken until fully cooked.",
      "In a bowl, combine diced mango, chopped red onion, cilantro, minced jalapeño, and lime juice.",
      "Dice the cooked chicken and mix it with the mango salsa.",
      "Serve over cooked rice.",
    ],
    prepTimeMinutes: 15,
    cookTimeMinutes: 25,
    servings: 3,
    difficulty: "Easy",
    cuisine: "Mexican",
    caloriesPerServing: 380,
    tags: ["Chicken", "Salsa"],
    userId: 26,
    image: "https://cdn.dummyjson.com/recipe-images/5.webp",
    rating: 2.3,
    reviewCount: 63,
    mealType: ["Dinner"],
  },
];

const RenderingList = () => {
  
  return (
    <>
      <div className="heading">RenderingList</div>
      <div className="flex">
      {recipes.map((r) => {
        return (
          <>
            <div class="bg-neutral-primary-soft block max-w-sm border border-default rounded-base shadow-xs">
              <a href="#">
                <img
                  class="rounded-t-base"
                  src={r.image}
                  alt=""
                />
              </a>
              <div class="p-6 text-center">
                <span class="inline-flex items-center bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium px-1.5 py-0.5 rounded-sm">
                  <svg
                    class="w-3 h-3 me-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M18.122 17.645a7.185 7.185 0 0 1-2.656 2.495 7.06 7.06 0 0 1-3.52.853 6.617 6.617 0 0 1-3.306-.718 6.73 6.73 0 0 1-2.54-2.266c-2.672-4.57.287-8.846.887-9.668A4.448 4.448 0 0 0 8.07 6.31 4.49 4.49 0 0 0 7.997 4c1.284.965 6.43 3.258 5.525 10.631 1.496-1.136 2.7-3.046 2.846-6.216 1.43 1.061 3.985 5.462 1.754 9.23Z"
                    />
                  </svg>
                  Trending
                </span>
                <a href="#">
                  <h5 class="mt-3 mb-6 text-2xl font-semibold tracking-tight text-heading">
                    {r.name}
                  </h5>
                </a>
                <a
                  href="#"
                  class="btn hover:bg-amber-300 inline-flex items-center box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
                >
                  Read more
                  <svg
                    class="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 12H5m14 0-4 4m4-4-4-4"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </>
        );
      })}
      </div>
    </>
  );
};

export default RenderingList;