import type { BurgerReview, Restaurant } from "../types/domain";

/* Mocked burger reviews (used on Home) */
export const stubReviews: BurgerReview[] = [
  {
    id: "rev1",
    burgerName: "Classic Smash",
    placeName: "Burger House",
    comment: "Juicy, crispy edges, very well balanced.",
    scores: {
      taste: 9,
      texture: 8,
      visuals: 8,
    },
    imageUrl: "/images/burger_1.jpeg",
    createdAt: new Date().toISOString(),
  },
  {
    id: "rev2",
    burgerName: "Double Bacon",
    placeName: "Smash Bros",
    comment: "Heavy but satisfying. Bacon was on point.",
    scores: {
      taste: 8,
      texture: 9,
      visuals: 7,
    },
    imageUrl: "/images/burger_2.jpeg",
    createdAt: new Date().toISOString(),
  },
];

/* Mocked restaurants (used on Discover) */
export const stubRestaurants: Restaurant[] = [
  {
    id: "r1",
    name: "Burger House",
    address: "Main Street 12",
    openingHours: "Mon–Sun 10:00 – 22:00",
    distanceKm: 1.4,
  },
  {
    id: "r2",
    name: "Smash Bros",
    address: "Liberty Avenue 5",
    openingHours: "Mon–Sun 11:00 – 23:00",
    distanceKm: 2.1,
  },
  {
    id: "r3",
    name: "Urban Grill",
    address: "Market Road 8",
    openingHours: "Tue–Sun 12:00 – 22:00",
    distanceKm: 0.9,
  },
  {
    id: "r4",
    name: "The Patty Club",
    address: "Sunset Boulevard 21",
    openingHours: "Mon–Fri 12:00 – 21:00",
    distanceKm: 3.2,
  },
  {
    id: "r5",
    name: "Fire & Bun",
    address: "Industrial Zone 3",
    openingHours: "Thu–Sun 16:00 – 23:00",
    distanceKm: 4.0,
  },
];
