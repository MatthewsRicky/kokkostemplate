type MenuOption = {
  name: string;
  price: number;
};

export type MenuItem = {
  id: string;
  name: string;
  description?: string;
  price?: number;
  priceLabel?: string;
  vegetarian?: boolean;
  options?: MenuOption[];
};

export type MenuCategory = {
  name: string;
  slug: string;
  description?: string;
  items: MenuItem[];
};

/**
 * Creates a predictable ID from a category and item name.
 *
 * Example:
 * createId("breakfast", "Eggs on Toast")
 * → "breakfast-eggs-on-toast"
 */
const createId = (category: string, name: string, suffix?: string) => {
  const base = `${category}-${name}`
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  return suffix ? `${base}-${suffix}` : base;
};

/**
 * Kokkos Cafe Bistro menu
 *
 * Prices are in Kenyan Shillings (KSh).
 */
export const menuCategories: MenuCategory[] = [
  {
    name: "Breakfast",
    slug: "breakfast",
    description: "Start the day properly.",
    items: [
      {
        id: createId("breakfast", "Eggs on Toast"),
        name: "Eggs on Toast",
        description: "2 eggs done to your liking, served with butter & toast",
        price: 540,
        vegetarian: true,
      },
      {
        id: createId("breakfast", "Crepes"),
        name: "Crepes",
        description:
          "Thin pan-fried egg batter served with either honey, jam or maple syrup",
        price: 650,
      },
      {
        id: createId("breakfast", "Omelette"),
        name: "Omelette",
        description: "3 egg omelette with toast. Add your mix or sides.",
        price: 650,
      },
      {
        id: createId("breakfast", "Frenchy"),
        name: "Frenchy",
        description:
          "Bread dipped in a vanilla infused egg wash & seared. Served with honey, jam or maple syrup",
        price: 790,
      },
      {
        id: createId("breakfast", "Wake & Bacon"),
        name: "Wake & Bacon",
        description:
          "Fried egg, bacon & cheese sandwiched between an English Muffin",
        price: 890,
      },
      {
        id: createId("breakfast", "Morning Glory"),
        name: "Morning Glory",
        description:
          "Egg, bacon & cheese on a bed of grilled tomato & onion. Pressed in a soft baguette",
        price: 890,
      },
      {
        id: createId("breakfast", "Eggs Benedict"),
        name: "Eggs Benedict",
        description:
          "Poached eggs on bacon, spinach & mushrooms served on an English muffin drizzled with hollandaise",
        price: 990,
      },
      {
        id: createId("breakfast", "Mediterranean"),
        name: "Mediterranean",
        description:
          "3 eggs cooked to your liking, served with black olives, grated tomato, prosciutto, olive oil & toast",
        price: 1090,
      },
      {
        id: createId("breakfast", "Fruit Bowl"),
        name: "Fruit Bowl",
        description:
          "Cold cuts of seasonal fruits served with a dollop of natural yogurt & granola",
        price: 690,
        vegetarian: true,
      },
      {
        id: createId("breakfast", "Filled Croissant"),
        name: "Filled Croissant",
        description: "Fresh croissant filled with scrambled egg and ham",
        price: 990,
      },
      {
        id: createId("breakfast", "Extras", "light"),
        name: "Extras",
        description:
          "Grilled Tomato, Baked Beans, Spinach, Chillies, Onions, Avocado",
        price: 120,
        vegetarian: true,
      },
      {
        id: createId("breakfast", "Extras", "sides"),
        name: "Extras",
        description: "Sausage, Mushrooms, Bacon, Feta, Cheddar, Home Fries",
        price: 250,
      },
      {
        id: createId("breakfast", "Extras", "special"),
        name: "Extras",
        description: "Prosciutto, Cheese krainer",
        price: 350,
      },
    ],
  },

  {
    name: "Sandwiches",
    slug: "sandwiches",
    description: "Handheld classics with a Kokkos twist.",
    items: [
      {
        id: createId("sandwiches", "Honey Mustard Chicken"),
        name: "Honey Mustard Chicken",
        description:
          "Chicken strips marinated in Honey & Dijon. Placed on lettuce and tomato covered with parmesan",
        price: 990,
      },
      {
        id: createId("sandwiches", "The Shroom"),
        name: "The Shroom",
        description:
          "Fresh Mushrooms sautéed in olive oil with peppers & zucchini. Topped with crumbled feta.",
        price: 1090,
        vegetarian: true,
      },
      {
        id: createId("sandwiches", "Capresse"),
        name: "Capresse",
        description:
          "Fresh mozzarella slices on basil & tomato, drizzled with a zesty lime dressing",
        price: 990,
        vegetarian: true,
      },
      {
        id: createId("sandwiches", "Roast Beef"),
        name: "Roast Beef",
        description:
          "Perfect roast. Thinly sliced on caramelised onions, grilled zucchini, cheddar & Dijon",
        price: 1090,
      },
      {
        id: createId("sandwiches", "Milano"),
        name: "Milano",
        description:
          "Prosciutto crudo, shaved parmesan, tomato & basil with a light drizzle of Italian dressing",
        price: 1190,
      },
      {
        id: createId("sandwiches", "Smoked Salmon"),
        name: "Smoked Salmon",
        description:
          "Salmon on a bed of cream cheese, avocado, dill and capers",
        price: 1790,
      },
      {
        id: createId("sandwiches", "Yellow Fin Tuna"),
        name: "Yellow Fin Tuna",
        description:
          "Flaky tuna in mayo, on a bed of lettuce, tomato finished with slices of boiled egg & cheddar",
        price: 990,
      },
      {
        id: createId("sandwiches", "Gourmet Steak"),
        name: "Gourmet Steak",
        description:
          "Slices of beef fillet over caramelised onions, brie cheese & asparagus finished with a balsamic glaze",
        price: 1290,
      },
      {
        id: createId("sandwiches", "Ham and Cheese"),
        name: "Ham and Cheese",
        description: "Classic cooked ham slices with cheddar cheese",
        price: 890,
      },
      {
        id: createId("sandwiches", "Chicken Melt"),
        name: "Chicken Melt",
        description:
          "Grilled Chicken strips on stringy mozzarella smeared with a tangy basil pesto sauce",
        price: 990,
      },
    ],
  },

  {
    name: "Pastas",
    slug: "pastas",
    description: "Italian comfort food, made in-house.",
    items: [
      {
        id: createId("pastas", "Pamodoro"),
        name: "Pamodoro",
        description:
          "Pasta in tomato sauce, olive oil and fresh basil in spaghetti",
        price: 990,
        vegetarian: true,
      },
      {
        id: createId("pastas", "Baharini"),
        name: "Baharini",
        description:
          "Seafood pasta cooked in tomato sauce with a touch of garlic, lemon and parmesan in penne",
        price: 1690,
      },
      {
        id: createId("pastas", "Carbonara"),
        name: "Carbonara",
        description: "Tossed in egg, bacon and parmesan in spaghetti",
        price: 1190,
      },
      {
        id: createId("pastas", "Bolognese"),
        name: "Bolognese",
        description:
          "Beef minced cooked in a tomato sauce flavoured with garlic, carrots and dried herbs in spaghetti",
        price: 1190,
      },
      {
        id: createId("pastas", "Pesto"),
        name: "Pesto",
        description: "Freshly mortared Basil tossed with parmesan in penne",
        price: 1090,
        vegetarian: true,
      },
      {
        id: createId("pastas", "Reco Con Pollo"),
        name: "Reco Con Pollo",
        description:
          "Chicken strips cooked in a tomato curry sauce with bacon, cream and parmesan in penne",
        price: 1290,
      },
      {
        id: createId("pastas", "Arabiata"),
        name: "Arabiata",
        description:
          "Tomato sauce, garlic, chilli flakes, olives and basil in penne",
        price: 990,
        vegetarian: true,
      },
      {
        id: createId("pastas", "Mac & Cheese"),
        name: "Mac & Cheese",
        description: "Classic macaroni and cheese with bacon or mushroom",
        price: 990,
      },
      {
        id: createId("pastas", "Extras"),
        name: "Extras",
        description: "Olives, Cheese, Sauce, Bacon, Chicken, Mushrooms, Tuna",
        price: 250,
      },
    ],
  },

  {
    name: "Snacks",
    slug: "snacks",
    description: "Something small, something to share.",
    items: [
      {
        id: createId("snacks", "Veggie Tempura"),
        name: "Veggie Tempura",
        description: "Mixed vegetables coated & fried in Japanese batter",
        price: 790,
        vegetarian: true,
      },
      {
        id: createId("snacks", "Falafel"),
        name: "Falafel",
        description:
          "6pcs. Textured chickpea, parsley and coriander parcels deep fried and served with spicy green sauce and hummus",
        price: 890,
        vegetarian: true,
      },
      {
        id: createId("snacks", "Hummus"),
        name: "Hummus",
        description:
          "Blended chickpeas in fragrant spices, served with homemade pita",
        price: 790,
        vegetarian: true,
      },
      {
        id: createId("snacks", "Sailfish Carpaccio"),
        name: "Sailfish Carpaccio",
        description:
          "Thinly sliced smoked sailfish, topped with rucola & parmesan drizzled with olive oil",
        price: 1590,
      },
      {
        id: createId("snacks", "Calamari Tails"),
        name: "Calamari Tails",
        description: "Seasoned, breaded & deep-fried calamari tentacles",
        price: 790,
      },
      {
        id: createId("snacks", "Fish Fingers"),
        name: "Fish Fingers",
        description:
          "6pcs. Seasoned, breaded & deep-fried fish of the day with tartar sauce",
        price: 890,
      },
      {
        id: createId("snacks", "Roasted Tomato & Basil Soup"),
        name: "Roasted Tomato & Basil Soup",
        description: "Flavoured with garlic and oregano",
        price: 790,
        vegetarian: true,
      },
      {
        id: createId("snacks", "Chicken Wings"),
        name: "Chicken Wings",
        description:
          "4pcs. Deep fried wings tossed in BBQ, buffalo, teriyaki or Tikka sauce",
        price: 790,
      },
      {
        id: createId("snacks", "Mummy's Samosas"),
        name: "Mummy's Samosas",
        description:
          "3pcs. Crispy fried homemade pastry filled with either meat, veg or feta",
        price: 590,
      },
    ],
  },

  {
    name: "Salads",
    slug: "salads",
    description: "Fresh, generous and full of colour.",
    items: [
      {
        id: createId("salads", "El Griego"),
        name: "El Griego",
        description:
          "Cucumber, tomato, olives, feta, peppers, onions and avocado with the Greek dressing",
        price: 1090,
        vegetarian: true,
      },
      {
        id: createId("salads", "Caesar"),
        name: "Caesar",
        description: "Mixed lettuce, parmesan, croutons with Caesar dressing",
        price: 990,
      },
      {
        id: createId("salads", "Chef Mix"),
        name: "Chef Mix",
        description:
          "Lettuce, carrot, olives, feta, baby tomatoes, julienned peppers tossed in balsamic vinaigrette",
        price: 1090,
        vegetarian: true,
      },
      {
        id: createId("salads", "Nicoise"),
        name: "Nicoise",
        description:
          "Mixed lettuce, cherry tomatoes, cucumber, onion, egg, baby potatoes and yellow fin tuna in a mayo dressing",
        price: 1290,
      },
      {
        id: createId("salads", "Spicy Tikka"),
        name: "Spicy Tikka",
        description:
          "Lettuce, peppers, baby potatoes topped with either Fish, Chicken or Paneer Tikka",
        price: 1190,
      },
      {
        id: createId("salads", "Kachumbari"),
        name: "Kachumbari",
        description:
          "Kenyan style sliced tomatoes and onions tossed in lime juice (optional green chillies)",
        price: 450,
        vegetarian: true,
      },
      {
        id: createId("salads", "Couscous Tabbouleh"),
        name: "Couscous Tabbouleh",
        description:
          "Chopped parsley in a medley of cherry tomatoes, cucumber, feta and couscous dressed with a simple vinaigrette",
        price: 1190,
        vegetarian: true,
      },
      {
        id: createId("salads", "Extras"),
        name: "Extras",
        description:
          "Bacon, Cheese, Chicken Strips, Sun Dried Tomatoes, Boiled Egg",
        price: 250,
      },
    ],
  },

  {
    name: "Burgers",
    slug: "burgers",
    description: "Big flavours, properly stacked.",
    items: [
      {
        id: createId("burgers", "El Classico"),
        name: "El Classico",
        description: "Plain beef burger, add toppings of your choice",
        price: 890,
      },
      {
        id: createId("burgers", "BBQ"),
        name: "BBQ",
        description:
          "Beef burger topped with caramelised onions, gherkins. Smeared with BBQ sauce",
        price: 1190,
      },
      {
        id: createId("burgers", "Gringo"),
        name: "Gringo",
        description:
          "Beef burger topped with jalapenos, fried onions, cheddar cheese & avocado. Drizzle of flaming hot sauce",
        price: 1390,
      },
      {
        id: createId("burgers", "French Affair"),
        name: "French Affair",
        description:
          "Beef burger topped with sautéed mushrooms & brie cheese. Accompanied by Dijon mustard",
        price: 1390,
      },
      {
        id: createId("burgers", "Kokkos Blue"),
        name: "Kokkos Blue",
        description:
          "Beef burger topped with bacon & gorgonzola cheese. Finished with our signature sauce",
        price: 1390,
      },
      {
        id: createId("burgers", "Maroccan"),
        name: "Maroccan",
        description: "Lamb burger topped with feta, peppers & coriander",
        price: 1290,
      },
      {
        id: createId("burgers", "Kuku"),
        name: "Kuku",
        description:
          "Breaded or grilled chicken breast on coleslaw & chilli mayo",
        price: 1090,
      },
      {
        id: createId("burgers", "Thai Fish Burger"),
        name: "Thai Fish Burger",
        description:
          "Grilled fish fillet with a fusion of fresh, spicy and sour flavours finished with a sweet chili sauce",
        price: 1290,
      },
      {
        id: createId("burgers", "Veggie Man"),
        name: "Veggie Man",
        description:
          "Textured vegetable patty, seasoned with a spice mix & feta",
        price: 950,
        vegetarian: true,
      },
      {
        id: createId("burgers", "Crab Burger"),
        name: "Crab Burger",
        description:
          "Sweet flaky crab meat with aromatic herbs smeared with tartar sauce",
        price: 1390,
      },
      {
        id: createId("burgers", "Extras"),
        name: "Extras",
        description: "Bacon, Egg, Cheese, Mushrooms, Avocado, Jalapeno",
        price: 250,
      },
    ],
  },

  {
    name: "Mains",
    slug: "mains",
    description: "Hearty plates for lunch and dinner.",
    items: [
      {
        id: createId("mains", "Chilli Con Carne"),
        name: "Chilli Con Carne",
        description:
          "Mexican inspired mince dish with jalapenos, corn & kidney beans cooked in Guinness",
        price: 1190,
      },
      {
        id: createId("mains", "Beef Filet"),
        name: "Beef Filet",
        description:
          "Prime cut of tenderloin grilled to your liking. Accompanied with Mushroom, Pepper or Chimichurri sauce",
        priceLabel: "150g — KSh 1,090 · 300g — KSh 1,890",
        options: [
          {
            name: "150g",
            price: 1090,
          },
          {
            name: "300g",
            price: 1890,
          },
        ],
      },
      {
        id: createId("mains", "Surf & Turf"),
        name: "Surf & Turf",
        description:
          "Generous size Fillet cooked with King prawns and Calamari rings",
        price: 2090,
      },
      {
        id: createId("mains", "Chicken Schnitzel"),
        name: "Chicken Schnitzel",
        description:
          "Pounded chicken breast, deep fried in a coating of seasoned bread crumbs",
        price: 1190,
      },
      {
        id: createId("mains", "Spring Chicken"),
        name: "Spring Chicken",
        description:
          "Crispy fried ½ spring chicken. Variation — sautéed with onion, garlic and chillies",
        price: 990,
      },
      {
        id: createId("mains", "Pork Chops"),
        name: "Pork Chops",
        description:
          "Pork loin seared in honey & soy OR garlic butter & rosemary",
        price: 1590,
      },
      {
        id: createId("mains", "Black Tiger Prawns"),
        name: "Black Tiger Prawns",
        description:
          "Butterflied prawns simply grilled with garlic butter and parsley",
        price: 1790,
      },
      {
        id: createId("mains", "Calamari Rings"),
        name: "Calamari Rings",
        description:
          "Classic calamari rings, grilled or battered. Served with tartar sauce",
        price: 1290,
      },
      {
        id: createId("mains", "Fish of the Day"),
        name: "Fish of the Day",
        description:
          "Salt water fish fillets either grilled or battered. Served with tartar sauce",
        price: 1290,
      },
      {
        id: createId("mains", "Vegetable Stir Fry"),
        name: "Vegetable Stir Fry",
        description:
          "Mixed greens and coloured vegetables tossed in garlic, onions, mushroom and soy finished off with toasted nuts",
        priceLabel: "Veg 990 · Chicken 1,480 · Beef 1,680 · Prawns 1,780",
        options: [
          {
            name: "Veg",
            price: 990,
          },
          {
            name: "Chicken",
            price: 1480,
          },
          {
            name: "Beef",
            price: 1680,
          },
          {
            name: "Prawns",
            price: 1780,
          },
        ],
      },
      {
        id: createId("mains", "Tuscan Fish"),
        name: "Tuscan Fish",
        description:
          "Grilled fish fillet cooked in creamy tomato sauce with olives, capers, lemon and herbs",
        price: 1290,
      },
    ],
  },

  {
    name: "Indian Curries",
    slug: "indian-curries",
    description: "Fragrant curries inspired by the subcontinent.",
    items: [
      {
        id: createId("indian-curries", "Chicken Curry"),
        name: "Chicken Curry",
        price: 1290,
      },
      {
        id: createId("indian-curries", "Veg Korma"),
        name: "Veg Korma",
        price: 1090,
        vegetarian: true,
      },
      {
        id: createId("indian-curries", "Lamb Curry"),
        name: "Lamb Curry",
        price: 1390,
      },
      {
        id: createId("indian-curries", "Chick Pea Curry"),
        name: "Chick Pea Curry",
        price: 1090,
        vegetarian: true,
      },
      {
        id: createId("indian-curries", "Palak Paneer"),
        name: "Palak Paneer",
        price: 1290,
        vegetarian: true,
      },
      {
        id: createId("indian-curries", "Prawn Curry"),
        name: "Prawn Curry",
        price: 1590,
      },
      {
        id: createId("indian-curries", "Butter Chicken"),
        name: "Butter Chicken",
        price: 1290,
      },
      {
        id: createId("indian-curries", "Paneer Makhni"),
        name: "Paneer Makhni",
        price: 1290,
        vegetarian: true,
      },
      {
        id: createId("indian-curries", "Goan Fish Curry"),
        name: "Goan Fish Curry",
        price: 1290,
      },
    ],
  },
];
