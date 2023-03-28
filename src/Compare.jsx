import Pokemon from "./Pokemon";
import usePokemon from "./usePokemon";
import { useMemo } from "react";

export default function Compare() {
  const pikachu = usePokemon("pikachu");
  const voltorb = usePokemon("voltorb");
  const common = useMemo(
    () => ({
      name: "common",
      moves: pikachu.moves.filter((move) => voltorb.moves.includes(move))
    }),
    [pikachu, voltorb]
  );

  return (
    <div className="compare">
      <Pokemon pokemon={pikachu} hideMoves={common.moves} />
      <Pokemon pokemon={voltorb} hideMoves={common.moves} />
      <Pokemon pokemon={common} />
    </div>
  );
}
