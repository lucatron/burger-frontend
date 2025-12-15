import type { BurgerReview } from "../../types/domain";
import "./BurgerReviewCard.css";

type BurgerReviewCardProps = {
  review: BurgerReview;
  onDelete?: (id: string) => void;
};

export default function BurgerReviewCard({
  review,
  onDelete,
}: BurgerReviewCardProps) {
  const averageScore =
    (review.scores.taste + review.scores.texture + review.scores.visuals) / 3;

  return (
    <article className="review_card">
      {review.imageUrl && (
        <img
          src={review.imageUrl}
          alt={review.burgerName}
          className="review_image"
          loading="lazy"
        />
      )}

      <div className="review_content">
        <div className="review_header">
          <div className="review_titles">
            <h3 className="review_burger">{review.burgerName}</h3>
            <span className="review_place">{review.placeName}</span>
          </div>

          {onDelete && (
            <button
              className="review_delete"
              onClick={() => onDelete(review.id)}
              aria-label="Delete review"
            >
              ✕
            </button>
          )}
        </div>

        <p className="review_comment">{review.comment}</p>

        <span className="review_score">⭐ {averageScore.toFixed(1)}</span>
      </div>
    </article>
  );
}
