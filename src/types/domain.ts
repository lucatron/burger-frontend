export type BurgerScores = {
  taste: number; // 1 - 10
  texture: number; // 1 - 10
  visuals: number; // 1 - 10
};

export type BurgerReview = {
  id: string;
  burgerName: string;
  placeName: string;
  comment: string;
  scores: BurgerScores;
  imageUrl?: string;
  createdAt: string;
};

export type Restaurant = {
  id: string;
  name: string;
  address: string;
  openingHours: string;
  distanceKm?: number;
};
