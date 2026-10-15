## 🍽️ List Meals by First Letter

### 📌 API Endpoint

**API:** [TheMealDB – Meals Starting with A](https://www.themealdb.com/api/json/v1/1/search.php?f=a)

```text
https://themealdb.com/api/json/v1/1/search.php?f=a
```

### 📦 API Response

The API returns a JSON object containing a `meals` array. Each meal includes its ID, name, category, cuisine, image, ingredients, measurements, cooking instructions, and other recipe details.

### 🧾 Expanded JSON Response Example
This is a shortened example showing the response structure and several meal objects. The actual API returns the full recipe data for each meal.

```json
{
  "meals": [
    {
      "idMeal": "53483",
      "strMeal": "Acaraje black-eyed pea fritters with shrimp filling",
      "strMealAlternate": null,
      "strCategory": "Seafood",
      "strArea": null,
      "strCountry": "Brazil",
      "strInstructions": "Prepare the filling with onion, ginger, garlic, chilli, prawns, tomatoes and coriander. Prepare the black-eyed pea fritters, fry until golden and crisp, fill with the shrimp mixture and serve.",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/dxs5t71782678369.jpg",
      "strTags": null,
      "strYoutube": "",
      "strIngredient1": "Black Eyed Peas",
      "strIngredient2": "Garlic",
      "strIngredient3": "Green Chilli",
      "strIngredient4": "Red Onions",
      "strIngredient5": "Plain Flour",
      "strMeasure1": "800g",
      "strMeasure2": "1 clove",
      "strMeasure3": "1",
      "strMeasure4": "1 small finely diced",
      "strMeasure5": "2 tablespoons",
      "strSource": "https://www.bbcgoodfood.com/recipes/caraje-black-eyed-pea-fritters-shrimp-filling",
      "strImageSource": null,
      "strCreativeCommonsConfirmed": null,
      "dateModified": "2026-06-28 21:24:02"
    },
    {
      "idMeal": "53527",
      "strMeal": "Achiote Oil (Aceite Achiotado) Recipe",
      "strMealAlternate": null,
      "strCategory": "Miscellaneous",
      "strArea": null,
      "strCountry": "Colombia",
      "strInstructions": "Heat vegetable or olive oil with achiote seeds for 2–3 minutes. Let stand for 5 minutes, strain and store in a tightly sealed jar.",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/iuws3q1783801530.jpg",
      "strTags": null,
      "strYoutube": "",
      "strIngredient1": "Vegetable Oil",
      "strIngredient2": "Achiote Seeds",
      "strMeasure1": "2 cups",
      "strMeasure2": "4 tablespoons",
      "strSource": "https://www.mycolombianrecipes.com/achiote-oil-of-achiote/",
      "strImageSource": null,
      "strCreativeCommonsConfirmed": null,
      "dateModified": "2026-07-11 21:23:55"
    },
    {
      "idMeal": "53262",
      "strMeal": "Adana kebab",
      "strMealAlternate": null,
      "strCategory": "Lamb",
      "strArea": "Turkish",
      "strCountry": "Turkey",
      "strInstructions": "Prepare the pepper and minced lamb mixture with red pepper paste, spices and oil. Chill, shape around skewers and grill until cooked.",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/04axct1763793018.jpg",
      "strTags": null,
      "strYoutube": "https://www.youtube.com/watch?v=Wj7sXu9B_ME",
      "strIngredient1": "Romano Pepper",
      "strIngredient2": "Lamb Mince",
      "strIngredient3": "Red Pepper Paste",
      "strIngredient4": "Pul Biber",
      "strIngredient5": "Sunflower Oil",
      "strMeasure1": "2 large",
      "strMeasure2": "800g",
      "strMeasure3": "3 tablespoons",
      "strMeasure4": "1 tablespoon",
      "strMeasure5": "3 tablespoons",
      "strSource": "https://www.bbcgoodfood.com/recipes/adana-kebab",
      "strImageSource": null,
      "strCreativeCommonsConfirmed": null,
      "dateModified": "2025-11-22 06:28:49"
    }
  ]
}
```

> **Note:** The JSON above is an illustrative excerpt, not the complete API response. The instructions and recipe fields have been shortened for readability.

## 🔑 Important Response Properties

| Property | Description |
|---|---|
| `meals` | Array containing matching meals |
| `idMeal` | Unique ID of a meal |
| `strMeal` | Name of the meal |
| `strMealThumb` | Meal image URL |
| `strCategory` | Meal category |
| `strArea` | Cuisine or regional information |
| `strCountry` | Country associated with the meal |
| `strInstructions` | Cooking instructions |
| `strIngredient1` – `strIngredient20` | Ingredients |
| `strMeasure1` – `strMeasure20` | Ingredient quantities |
| `strYoutube` | Recipe video URL |
| `strSource` | Original recipe source |
| `strTags` | Recipe tags |
| `dateModified` | Last modification date, when available |

### 💻 JavaScript Example

```javascript
const foodDataRes = fetch(
  "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
)
  .then(res => res.json())
  .then(data => {
    console.log(data);
    console.log(data.meals);
  });
```

### Accessing Meal Data

```javascript
data.meals.map(meal => {
  console.log(meal.strMeal);
  console.log(meal.strMealThumb);
  console.log(meal.strCategory);
});
```


### 📚 References

- [TheMealDB API Documentation](https://www.themealdb.com/docs_api_guide.php)
- [Live API Response](https://www.themealdb.com/api/json/v1/1/search.php?f=a)

**Project:** Meal Hub  
**API Provider:** TheMealDB