class Meals {
  constructor(
    id,
    categoryIds,
    title,
    imageUrl,
    ingredients,
    steps,
    duration,
    complexity,
    affordability,
    isGlutenFree,
    isVegen,
    isVegetarian,
    isLactoseFree
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.imageUrl = imageUrl;
    this.ingredients = ingredients;
    this.steps = steps;
    this.duration = duration;
    this.complexity = complexity;
    this.affordability = affordability;
    this.isGlutenFree = isGlutenFree;
    this.isVegen = isVegen;
    this.isVegetarian = isVegetarian;
    this.isLactoseFree = isLactoseFree;
  }
}

export default Meals;
