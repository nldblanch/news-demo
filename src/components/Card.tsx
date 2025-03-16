type CardProps = {
  src: string;
  h4: string;
  h5: string;
  p: string;
};

function Card({ src, h4, h5, p }: CardProps) {
  return (
    <div className="card">
      <img src={src} />
      <div className="card-content">
        <h4>{h4}</h4>
        <h5>{h5}</h5>
        <p>{p}</p>
      </div>
    </div>
  );
}

export default Card;
