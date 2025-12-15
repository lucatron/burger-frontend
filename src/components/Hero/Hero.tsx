import "./Hero.css";

type HeroProps = {
  title: string;
  description: string;
  buttonText: string;
  onButtonClick: () => void;
};

export default function Hero({
  title,
  description,
  buttonText,
  onButtonClick,
}: HeroProps) {
  return (
    <section className="hero">
      <div className="hero_inner">
        <h1 className="hero_title">{title}</h1>
        <p className="hero_description">{description}</p>

        <button className="hero_button" onClick={onButtonClick}>
          {buttonText}
        </button>
      </div>
    </section>
  );
}
