import featured from "../constants/featured";

type CardProps = {
  title: string;
  p: string;
};
function Card({ title, p }: CardProps) {
  return (
    <hgroup>
      <h3>{title}</h3>
      <p>{p}</p>
    </hgroup>
  );
}

function Featured() {
  return (
    <section className="featured-articles">
      <h2>New</h2>
      {featured.map((content) => (
        <Card title={content.title} p={content.p} />
      ))}
    </section>
  );
}

export default Featured;
