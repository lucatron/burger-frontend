import "./Section.css";

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

export default function Section({ title, children }: SectionProps) {
  return (
    <section className="section">
      <div className="section_inner">
        <h2 className="section_title">{title}</h2>
        {children}
      </div>
    </section>
  );
}
