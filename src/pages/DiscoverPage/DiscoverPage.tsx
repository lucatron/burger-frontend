import { useEffect, useMemo, useState } from "react";

import Navbar from "../../components/Navbar/Navbar";
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";

import { burgerApi } from "../../api/burgerApi";
import type { Restaurant } from "../../types/domain";

import "./DiscoverPage.css";

type LoadState<T> =
  | { status: "idle" | "loading" }
  | { status: "success"; data: T }
  | { status: "error"; message: string };

export default function DiscoverPage() {
  const [restaurants, setRestaurants] = useState<LoadState<Restaurant[]>>({
    status: "idle",
  });

  const [search, setSearch] = useState("");

  useEffect(() => {
    async function loadRestaurants() {
      try {
        setRestaurants({ status: "loading" });
        const data = await burgerApi.getNearbyRestaurants();
        setRestaurants({ status: "success", data });
      } catch {
        setRestaurants({
          status: "error",
          message: "Failed to load restaurants",
        });
      }
    }

    loadRestaurants();
  }, []);

  const filteredRestaurants = useMemo(() => {
    if (restaurants.status !== "success") return [];
    return restaurants.data.filter((r) =>
      r.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [restaurants, search]);

  return (
    <div className="discover">
      <Navbar brandName="Burger Frontend 1.0™" />

      <main className="discover_inner">
        <h1 className="discover_title">Discover</h1>
        <p className="discover_subtitle">Find burger places near you</p>

        <input
          className="discover_search"
          placeholder="Search restaurants..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {restaurants.status === "loading" && (
          <p className="muted">Loading...</p>
        )}

        {restaurants.status === "error" && (
          <p className="error">{restaurants.message}</p>
        )}

        {restaurants.status === "success" && (
          <div className="discover_grid">
            {filteredRestaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
