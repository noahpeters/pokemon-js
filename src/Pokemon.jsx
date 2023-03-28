export default function Pokemon({
  pokemon: { name, imageURL, moves = [] },
  hideMoves
}) {
  return (
    <div className="pokemon">
      {imageURL != null ? (
        <img className="pokemon-img" src={imageURL} alt={name} />
      ) : (
        <div style={{ height: 100, width: 100 }}></div>
      )}
      <div className="pokemon-name">{name}</div>
      <ul className="pokemon-moves">
        {moves.map((move) =>
          (hideMoves ?? []).includes(move) ? null : (
            <li key={move} className="pokemon-move">
              {move}
            </li>
          )
        )}
      </ul>
    </div>
  );
}
