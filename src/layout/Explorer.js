import { runes } from "../data/runes";

export const Explorer = () => {
  return (
    <div>
      <div className="cards">
        {runes.map(({ id, rarity, description, image, name }) => (
          <div className="card" key={id}>
            <div className="card-img">
              <img src={image} alt="rune" />
            </div>
            <div className="card-body">
              <p>{name}</p>
              <p id="rarity">{rarity}</p>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
