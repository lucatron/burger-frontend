import type { BurgerReview, Restaurant } from "../types/domain";
import { stubReviews, stubRestaurants } from "../data/stub";

/*
  Simple API abstraction.
  If a real backend exists, this file is the only place that changes.
*/

const API_BASE_URL = "";

async function fakeDelay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const burgerApi = {
  async getLatestReviews(): Promise<BurgerReview[]> {
    if (!API_BASE_URL) {
      await fakeDelay(400);
      return stubReviews;
    }

    const response = await fetch(`${API_BASE_URL}/reviews/latest`);

    if (!response.ok) {
      throw new Error("Failed to fetch reviews");
    }

    return response.json();
  },

  async getNearbyRestaurants(): Promise<Restaurant[]> {
    if (!API_BASE_URL) {
      await fakeDelay(400);
      return stubRestaurants;
    }

    const response = await fetch(`${API_BASE_URL}/restaurants/nearby`);

    if (!response.ok) {
      throw new Error("Failed to fetch restaurants");
    }

    return response.json();
  },
};
