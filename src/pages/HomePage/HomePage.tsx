import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import BurgerReviewCard from "../../components/BurgerReviewCard/BurgerReviewCard";
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";

import { burgerApi } from "../../api/burgerApi";
import type { BurgerReview, Restaurant } from "../../types/domain";

import "./HomePage.css";

type LoadState<T> =
  | { status: "idle" | "loading" }
  | { status: "success"; data: T }
  | { status: "error"; message: string };

export default function HomePage() {
  const navigate = useNavigate();

  const [reviews, setReviews] = useState<LoadState<BurgerReview[]>>({
    status: "idle",
  });

  const [restaurants, setRestaurants] = useState<LoadState<Restaurant[]>>({
    status: "idle",
  });

  useEffect(() => {
    async function loadData() {
      try {
        setReviews({ status: "loading" });
        setRestaurants({ status: "loading" });

        const [reviewsData, restaurantsData] = await Promise.all([
          burgerApi.getLatestReviews(),
          burgerApi.getNearbyRestaurants(),
        ]);

        setReviews({ status: "success", data: reviewsData });
        setRestaurants({
          status: "success",
          data: restaurantsData,
        });
      } catch (error) {
        setReviews({
          status: "error",
          message: "Failed to load reviews",
        });
        setRestaurants({
          status: "error",
          message: "Failed to load restaurants",
        });
      }
    }

    loadData();
  }, []);
  function handleDeleteReview(id: string) {
    setReviews((prev) => {
      if (prev.status !== "success") {
        return prev;
      }

      return {
        status: "success",
        data: prev.data.filter((review) => review.id !== id),
      };
    });
  }

  return (
    <div className="home">
      <Navbar brandName="Burger Frontend 1.0™" />

      <Hero
        title="Rate burgers. Share photos."
        description="Discover and review the best burgers around you."
        buttonText="Discover places"
        onButtonClick={() => navigate("/discover")}
      />

      <Section title="Latest reviews">
        {reviews.status === "loading" && (
          <p className="muted">Loading reviews...</p>
        )}

        {reviews.status === "error" && (
          <p className="error">{reviews.message}</p>
        )}

        {reviews.status === "success" && (
          <div className="grid">
            {reviews.data.map((review) => (
              <BurgerReviewCard
                key={review.id}
                review={review}
                onDelete={handleDeleteReview}
              />
            ))}
          </div>
        )}
      </Section>

      <Section title="Nearby restaurants">
        {restaurants.status === "loading" && (
          <p className="muted">Loading restaurants...</p>
        )}

        {restaurants.status === "error" && (
          <p className="error">{restaurants.message}</p>
        )}

        {restaurants.status === "success" && (
          <div className="grid grid_cards">
            {restaurants.data.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        )}
      </Section>
    </div>
  );
}
