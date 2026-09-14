export const images = {
  /**
   * Primary site imagery
   */
  hero: "/images/kokkos/hero.jpg",

  /**
   * Homepage
   */
  homepage: {
    intro: "/images/kokkos/story.jpg",
    story: "/images/kokkos/story-atmosphere.jpg",
    world: "/images/kokkos/story-food.jpg",
    gallery: [
      "/images/kokkos/gallery-01.jpg",
      "/images/kokkos/gallery-02.jpg",
      "/images/kokkos/gallery-03.jpg",
      "/images/kokkos/story-people.jpg",
      "/images/kokkos/story-food.jpg",
      "/images/kokkos/menu-pasta.jpg",
      "/images/kokkos/menu-burgers.jpg",
      "/images/kokkos/menu-mains.jpg",
    ],
  },

  /**
   * Story page
   */
  story: {
    hero: "/images/kokkos/story-hero.jpg",
    origin: "/images/kokkos/story.jpg",
    food: "/images/kokkos/story-food.jpg",
    people: "/images/kokkos/story-people.jpg",
    atmosphere: "/images/kokkos/story-atmosphere.jpg",
  },

  /**
   * Cakes page
   */
  cakes: {
    hero: "/images/kokkos/cake-celebration.jpg",
    gallery: [
      "/images/kokkos/cake-01.jpg",
      "/images/kokkos/cake-02.jpg",
      "/images/kokkos/cake-03.jpg",
      "/images/kokkos/cake-04.jpg",
      "/images/kokkos/cake-05.jpg",
    ],
    celebration: "/images/kokkos/cake-celebration.jpg",
    home: "/images/kokkos/cake-01.jpg",
  },

  /**
   * Contact page
   */
  contact: {
    hero: "/images/kokkos/contact-hero.jpg",
    location: "/images/kokkos/location.webp",
    atmosphere: "/images/kokkos/story-atmosphere.jpg",
  },

  /**
   * Menu imagery
   *
   * These are editorial category images rather than
   * individual menu-item images.
   */
  menu: {
    breakfast: "/images/kokkos/menu-breakfast.jpg",
    pasta: "/images/kokkos/menu-pasta.jpg",
    burgers: "/images/kokkos/menu-burgers.jpg",
    mains: "/images/kokkos/menu-mains.jpg",
    curries: "/images/kokkos/menu-curries.jpg",
    salad: "/images/kokkos/menu-salad.jpg",
    gallery: [
      "/images/kokkos/menu-breakfast.jpg",
      "/images/kokkos/menu-pasta.jpg",
      "/images/kokkos/menu-burgers.jpg",
      "/images/kokkos/menu-mains.jpg",
      "/images/kokkos/menu-curries.jpg",
      "/images/kokkos/menu-salad.jpg",
    ],
  },

  /**
   * Reusable individual images
   */
  individual: {
    cake01: "/images/kokkos/cake-01.jpg",
    cake02: "/images/kokkos/cake-02.jpg",
    cake03: "/images/kokkos/cake-03.jpg",
    cake04: "/images/kokkos/cake-04.jpg",
    cake05: "/images/kokkos/cake-05.jpg",
    gallery01: "/images/kokkos/gallery-01.jpg",
    gallery02: "/images/kokkos/gallery-02.jpg",
    gallery03: "/images/kokkos/gallery-03.jpg",
    story: "/images/kokkos/story.jpg",
    storyHero: "/images/kokkos/story-hero.jpg",
    storyFood: "/images/kokkos/story-food.jpg",
    storyPeople: "/images/kokkos/story-people.jpg",
    storyAtmosphere: "/images/kokkos/story-atmosphere.jpg",
    contactHero: "/images/kokkos/contact-hero.jpg",
    location: "/images/kokkos/location.webp",
  },
} as const;

export const kokkosImages = {
  hero: {
    src: "/images/kokkos/hero.jpg",
    alt: "Kokkos café entrance and oceanfront atmosphere",
  },
  interior: {
    src: "/images/kokkos/story-people.jpg",
    alt: "Warm Kokkos interior with guests and café details",
  },
  food: {
    src: "/images/kokkos/story-food.jpg",
    alt: "Fresh Kokkos dishes and signature food plating",
  },
  atmosphere: {
    src: "/images/kokkos/story-atmosphere.jpg",
    alt: "Kokkos sunset atmosphere and beachside dining mood",
  },
} as const;
