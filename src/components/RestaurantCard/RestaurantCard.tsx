import type { Restaurant } from "../../types/domain";
import "./RestaurantCard.css";

type RestaurantCardProps = {
  restaurant: Restaurant;
};

export default function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    <article className="restaurant_card">
      <h3 className="restaurant_name">{restaurant.name}</h3>

      <p className="restaurant_address">{restaurant.address}</p>

      <p className="restaurant_hours">🕒 {restaurant.openingHours}</p>

      {restaurant.distanceKm !== undefined && (
        <span className="restaurant_distance">
          📍 {restaurant.distanceKm} km
        </span>
      )}
    </article>
  );
}
