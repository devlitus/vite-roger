import "./cardPolaroid.css";
export const CardPolaroid = ({ src, title }) => {
  return (
    <div className="card">
      <div className="card-polariod">
        <img className="polaroid-image" src={src} alt={title} />
        <div className="card-title">
          <h2 className="title">{title}</h2>
        </div>
      </div>
    </div>
  );
};
