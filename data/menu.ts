export type MenuItemOption = {
  label: string;
  price: number;
};

export type MenuItem = {
  id: string;
  name: string;
  description?: string;
  price?: number;
  priceLabel?: string;
  vegetarian?: boolean;
  options?: MenuItemOption[];
};

export type MenuCategory = {
  slug: string;
  name: string;
  description?: string;
  image?: string;
  items: MenuItem[];
};

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

const item = (
  category: string,
  name: string,
  data: Omit<MenuItem, "id" | "name"> = {},
): MenuItem => ({
  id: createId(category, name),
  name,
  ...data,
});

export const menuCategories: MenuCategory[] = [
  {
    slug: "breakfast",
    name: "Breakfast",
    description:
      "Slow mornings, eggs, fresh fruit and generous Kokkos breakfast favourites.",
    items: [
      item("breakfast", "Eggs on Toast", {
        description: "2 eggs done to your liking, served with butter & toast",
        price: 540,
        vegetarian: true,
      }),

      item("breakfast", "Crepes", {
        description:
          "Thin pan-fried egg batter served with either honey, jam or maple syrup",
        price: 650,
      }),

      item("breakfast", "Omelette", {
        description:
          "3 egg omelette with toast. Add your mix or sides, choices below",
        price: 650,
      }),

      item("breakfast", "Frenchy", {
        description:
          "Bread dipped in a vanilla infused egg wash & seared. Served with honey, jam or maple syrup",
        price: 790,
      }),

      item("breakfast", "Wake & Bacon", {
        description:
          "Fried egg, bacon & cheese sandwiched between an English Muffin",
        price: 890,
      }),

      item("breakfast", "Morning Glory", {
        description:
          "Egg, bacon & cheese on a bed of grilled tomato & onion. Pressed in a soft baguette",
        price: 890,
      }),

      item("breakfast", "Eggs Benedict", {
        description:
          "Poached eggs on bacon, spinach & mushrooms served on an English muffin drizzled with hollandaise",
        price: 990,
      }),

      item("breakfast", "Mediterranean", {
        description:
          "3 eggs cooked to your liking, served with black olives, grated tomato, prosciutto, olive oil & toast",
        price: 1090,
      }),

      item("breakfast", "Fruit Bowl", {
        description:
          "Cold cuts of seasonal fruits served with a dollop of natural yogurt & granola",
        price: 690,
        vegetarian: true,
      }),

      item("breakfast", "Filled Croissant", {
        description: "Fresh croissant filled with scrambled egg and ham",
        price: 990,
      }),

      item("breakfast", "Extras", {
        description:
          "Grilled Tomato, Baked Beans, Spinach, Chillies, Onions, Avocado",
        price: 120,
        vegetarian: true,
      }),

      item("breakfast", "Extras-1", {
        description: "Sausage, Mushrooms, Bacon, Feta, Cheddar, Home Fries",
        price: 250,
        vegetarian: true,
      }),

      item("breakfast", "Extras-2", {
        description: "Prosciutto, Cheese krainer",
        price: 350,
        //suffix: "premium",
      }),
    ],
  },

  {
    slug: "sandwiches",
    name: "Sandwiches",
    description:
      "Generous sandwiches built around fresh ingredients and bold flavours.",
    items: [
      item("sandwiches", "Honey Mustard Chicken", {
        description:
          "Chicken strips marinated in Honey & Dijon. Placed on lettuce and tomato covered with parmesan",
        price: 990,
      }),

      item("sandwiches", "The Shroom", {
        description:
          "Fresh Mushrooms sautéed in olive oil with peppers & zucchini. Topped with crumbled feta.",
        price: 1090,
        vegetarian: true,
      }),

      item("sandwiches", "Capresse", {
        description:
          "Fresh mozzarella slices on basil & tomato, drizzled with a zesty lime dressing",
        price: 990,
        vegetarian: true,
      }),

      item("sandwiches", "Roast Beef", {
        description:
          "Perfect roast. Thinly sliced on caramelised onions, grilled zucchini, cheddar & Dijon",
        price: 1090,
      }),

      item("sandwiches", "Milano", {
        description:
          "Prosciutto crudo, shaved parmesan, tomato & basil with a light drizzle of Italian dressing",
        price: 1190,
      }),

      item("sandwiches", "Smoked Salmon", {
        description:
          "Salmon on a bed of cream cheese, avocado, dill and capers",
        price: 1790,
      }),

      item("sandwiches", "Yellow Fin Tuna", {
        description:
          "Flaky tuna in mayo, on a bed of lettuce, tomato finished with slices of boiled egg & cheddar",
        price: 990,
      }),

      item("sandwiches", "Gourmet Steak", {
        description:
          "Slices of beef fillet over caramelised onions, brie cheese & asparagus finished with a balsamic glaze",
        price: 1290,
      }),

      item("sandwiches", "Ham and Cheese", {
        description: "Classic cooked ham slices with cheddar cheese",
        price: 890,
      }),

      item("sandwiches", "Chicken Melt", {
        description:
          "Grilled Chicken strips on stringy mozzarella smeared with a tangy basil pesto sauce",
        price: 990,
      }),
    ],
  },

  {
    slug: "pastas",
    name: "Pastas",
    description:
      "Classic pasta dishes with Italian-inspired sauces and Kokkos twists.",
    items: [
      item("pastas", "Pamodoro", {
        description:
          "Pasta in tomato sauce, olive oil and fresh basil in spaghetti",
        price: 990,
        vegetarian: true,
      }),

      item("pastas", "Baharini", {
        description:
          "Seafood pasta cooked in tomato sauce with a touch of garlic, lemon and parmesan in penne",
        price: 1690,
      }),

      item("pastas", "Carbonara", {
        description: "Tossed in egg, bacon and parmesan in spaghetti",
        price: 1190,
      }),

      item("pastas", "Bolognese", {
        description:
          "Beef minced cooked in a tomato sauce flavoured with garlic, carrots and dried herbs in spaghetti",
        price: 1190,
      }),

      item("pastas", "Pesto", {
        description: "Freshly mortared Basil tossed with parmesan in penne",
        price: 1090,
        vegetarian: true,
      }),

      item("pastas", "Reco Con Pollo", {
        description:
          "Chicken strips cooked in a tomato curry sauce with bacon, cream and parmesan in penne",
        price: 1290,
      }),

      item("pastas", "Arabiata", {
        description:
          "Tomato sauce, garlic, chilli flakes, olives and basil in penne",
        price: 990,
        vegetarian: true,
      }),

      item("pastas", "Mac & Cheese", {
        description: "Classic macaroni and cheese with bacon or mushroom",
        price: 990,
      }),

      item("pastas", "Extras", {
        description: "Olives, Cheese, Sauce, Bacon, Chicken, Mushrooms, Tuna",
        price: 250,
      }),
    ],
  },

  {
    slug: "snacks",
    name: "Snacks",
    description:
      "Easy-going plates for sharing, grazing or enjoying with a drink.",
    items: [
      item("snacks", "Veggie Tempura", {
        description: "Mixed vegetables coated & fried in Japanese batter",
        price: 790,
        vegetarian: true,
      }),

      item("snacks", "Falafel (6pcs)", {
        description:
          "Textured chickpea, parsley and coriander parcels deep fried and served with spicy green sauce and hummus",
        price: 890,
        vegetarian: true,
      }),

      item("snacks", "Hummus", {
        description:
          "Blended chickpeas in fragrant spices, served with homemade pita",
        price: 790,
        vegetarian: true,
      }),

      item("snacks", "Sailfish Carpaccio", {
        description:
          "Thinly sliced smoked sailfish, topped with rucola & parmesan drizzled with olive oil",
        price: 1590,
      }),

      item("snacks", "Calamari Tails", {
        description: "Seasoned, breaded & deep-fried calamari tentacles",
        price: 790,
      }),

      item("snacks", "Fish Fingers (6pcs)", {
        description:
          "Seasoned, breaded & deep-fried fish of the day with tartar sauce",
        price: 890,
      }),

      item("snacks", "Roasted Tomato & Basil Soup", {
        description: "Flavoured with garlic and oregano",
        price: 790,
        vegetarian: true,
      }),

      item("snacks", "Chicken Wings (4pcs)", {
        description:
          "Deep fried wings tossed in BBQ, buffalo, teriyaki or Tikka sauce",
        price: 790,
      }),

      item("snacks", "Mummy's Samosas (3pcs)", {
        description:
          "Crispy fried homemade pastry filled with either meat, veg or feta",
        price: 590,
      }),
    ],
  },

  {
    slug: "salads",
    name: "Salads",
    description:
      "Fresh salads combining crisp vegetables, herbs, cheese and house dressings.",
    items: [
      item("salads", "El Griego", {
        description:
          "Cucumber, tomato, olives, feta, peppers, onions and avocado with the Greek dressing",
        price: 1090,
        vegetarian: true,
      }),

      item("salads", "Caesar", {
        description: "Mixed lettuce, parmesan, croutons with Caesar dressing",
        price: 990,
        vegetarian: true,
      }),

      item("salads", "Chef Mix", {
        description:
          "Lettuce, carrot, olives, feta, baby tomatoes, Julienned peppers tossed in balsamic vinaigrette",
        price: 1090,
        vegetarian: true,
      }),

      item("salads", "Nicoise", {
        description:
          "Mixed lettuce, cherry tomatoes, cucumber, onion, egg, baby potatoes and yellow fin tuna in a mayo dressing",
        price: 1290,
      }),

      item("salads", "Spicy Tikka", {
        description:
          "Lettuce, peppers, baby potatoes topped with either Fish, Chicken or Paneer Tikka",
        price: 1190,
      }),

      item("salads", "Kachumbari", {
        description:
          "Kenyan style sliced tomatoes and onions tossed in lime juice (optional green chillies)",
        price: 450,
        vegetarian: true,
      }),

      item("salads", "Coucous Tabbouleh", {
        description:
          "Handful of chopped parsley in a medley of cherry tomatoes, cucumber, feta and couscous. Dressed with a simple vinaigrette",
        price: 1190,
        vegetarian: true,
      }),

      item("salads", "Extras", {
        description:
          "Bacon, Cheese, Chicken Strips, Sun Dried Tomatoes, Boiled Egg",
        price: 250,
      }),
    ],
  },

  {
    slug: "burgers",
    name: "Burgers",
    description:
      "Kokkos burgers with beef, chicken, fish, lamb, crab and vegetarian options.",
    items: [
      item("burgers", "El Classico", {
        description: "Plain beef burger, add toppings of your choice",
        price: 890,
      }),

      item("burgers", "BBQ", {
        description:
          "Beef burger topped with caramelised onions, gherkins. Smeared with BBQ sauce",
        price: 1190,
      }),

      item("burgers", "Gringo", {
        description:
          "Beef burger topped with jalapenos, fried onions, cheddar cheese & avocado. Drizzle of flaming hot sauce",
        price: 1390,
      }),

      item("burgers", "French Affair", {
        description:
          "Beef burger topped with sautéed mushrooms & brie cheese. Accompanied by Dijon mustard",
        price: 1390,
      }),

      item("burgers", "Kokkos Blue", {
        description:
          "Beef burger topped with bacon & gorgonzola cheese. Finished with our signature sauce",
        price: 1390,
      }),

      item("burgers", "Maroccan", {
        description: "Lamb burger topped with feta, peppers & coriander",
        price: 1290,
      }),

      item("burgers", "Kuku", {
        description:
          "Breaded or grilled chicken breast on coleslaw & chilli mayo",
        price: 1090,
      }),

      item("burgers", "Thai Fish Burger", {
        description:
          "Grilled fish fillet with a fusion of fresh, spicy and sour flavours finished with a sweet chili sauce",
        price: 1290,
      }),

      item("burgers", "Veggie Man", {
        description:
          "Textured vegetable patty, seasoned with a spice mix & feta",
        price: 950,
        vegetarian: true,
      }),

      item("burgers", "Crab Burger", {
        description:
          "Sweet flaky crab meat with aromatic herbs smeared with tartar sauce",
        price: 1390,
      }),

      item("burgers", "Extras", {
        description: "Bacon, Egg, Cheese, Mushrooms, Avocado, Jalapeno",
        price: 250,
      }),
    ],
  },

  {
    slug: "mains",
    name: "Mains",
    description:
      "Hearty Kokkos favourites featuring meat, seafood, fish and vegetables.",
    items: [
      item("mains", "Chilli Con Carne", {
        description:
          "Mexican inspired mince dish with jalapenos, corn & kidney beans cooked in Guinness",
        price: 1190,
      }),

      item("mains", "Beef Filet", {
        description:
          "Prime cut of tenderloin grilled to your liking. Accompanied with Mushroom, Pepper or Chimichurri sauce",
        options: [
          { label: "150g", price: 1090 },
          { label: "300g", price: 1890 },
        ],
      }),

      item("mains", "Surf & Turf", {
        description:
          "Generous size Fillet cooked with King prawns and Calamari rings",
        price: 2090,
      }),

      item("mains", "Chicken Schnitzel", {
        description:
          "Pounded chicken breast, deep fried in a coating of seasoned bread crumbs",
        price: 1190,
      }),

      item("mains", "Spring Chicken", {
        description:
          "Crispy fried ½ spring chicken. Variation — sautéed with onion, garlic and chillies",
        price: 990,
      }),

      item("mains", "Pork Chops", {
        description:
          "Pork loin seared in honey & soy OR garlic butter & rosemary",
        price: 1590,
      }),

      item("mains", "Black Tiger Prawns", {
        description:
          "Butterflied prawns simply grilled with garlic butter and parsley",
        price: 1790,
      }),

      item("mains", "Calamari Rings", {
        description:
          "Classic calamari rings, grilled or battered. Served with tartar sauce",
        price: 1290,
      }),

      item("mains", "Fish of the Day", {
        description:
          "Salt water Fish fillets either grilled or battered. Served with tartar sauce",
        price: 1290,
      }),

      item("mains", "Vegetable Stir Fry", {
        description:
          "Mixed greens and coloured vegetables tossed in garlic, onions, mushroom and soy finished off with toasted nuts",
        options: [
          { label: "Veg", price: 990 },
          { label: "Chicken", price: 1480 },
          { label: "Beef", price: 1680 },
          { label: "Prawns", price: 1780 },
        ],
      }),

      item("mains", "Tuscan Fish", {
        description:
          "Grilled fish fillet cooked in creamy tomato sauce with olives, capers, lemon and herbs",
        price: 1290,
      }),
    ],
  },

  {
    slug: "indian-curries",
    name: "Indian Curries",
    description: "A selection of aromatic Indian-inspired curries.",
    items: [
      item("indian-curries", "Chicken Curry", {
        price: 1290,
      }),

      item("indian-curries", "Veg Korma", {
        price: 1090,
        vegetarian: true,
      }),

      item("indian-curries", "Lamb Curry", {
        price: 1390,
      }),

      item("indian-curries", "Chick Pea Curry", {
        price: 1090,
        vegetarian: true,
      }),

      item("indian-curries", "Palak Paneer", {
        price: 1290,
        vegetarian: true,
      }),

      item("indian-curries", "Prawn Curry", {
        price: 1590,
      }),

      item("indian-curries", "Butter Chicken", {
        price: 1290,
      }),

      item("indian-curries", "Paneer Makhni", {
        price: 1290,
        vegetarian: true,
      }),

      item("indian-curries", "Goan Fish Curry", {
        price: 1290,
      }),
    ],
  },

  /*
   * -----------------------------------------------------------
   * BEVERAGES
   * -----------------------------------------------------------
   *
   * Kokkos has a separate beverage menu, but the current
   * official website's text-rendered menu does not expose the
   * beverage items/prices.
   *
   * Keep these categories here so the menu architecture is
   * ready. Populate the items only from the establishment's
   * current beverage menu rather than inventing prices.
   */

//   {
//     slug: "coffee",
//     name: "Coffee",
//     description: "Kokkos coffee and espresso drinks.",
//     items: [],
//   },

//   {
//     slug: "tea",
//     name: "Tea",
//     description: "Tea and hot infusions.",
//     items: [],
//   },

//   {
//     slug: "fresh-juices",
//     name: "Fresh Juices",
//     description: "Freshly prepared juices and fruit drinks.",
//     items: [],
//   },

//   {
//     slug: "smoothies",
//     name: "Smoothies",
//     description: "Fresh fruit smoothies and blended drinks.",
//     items: [],
//   },

//   {
//     slug: "milkshakes",
//     name: "Milkshakes",
//     description: "Thick, chilled milkshakes.",
//     items: [],
//   },

//   {
//     slug: "soft-drinks",
//     name: "Soft Drinks",
//     description: "Cold soft drinks and refreshments.",
//     items: [],
//   },

//   {
//     slug: "cocktails",
//     name: "Cocktails",
//     description: "Classic and Kokkos cocktails.",
//     items: [],
//   },

//   {
//     slug: "beer-cider",
//     name: "Beer & Cider",
//     description: "Beer and cider selections.",
//     items: [],
//   },

//   {
//     slug: "wine",
//     name: "Wine",
//     description: "Wine by the glass and bottle.",
//     items: [],
//   },

//   {
//     slug: "spirits",
//     name: "Spirits",
//     description: "Spirits and mixed drinks.",
//     items: [],
//   },
];
