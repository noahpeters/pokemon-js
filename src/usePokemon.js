const JSONDataCache = {};
const RequestCache = {};

function useJSONFromURL(url) {
  if (JSONDataCache[url] != null) {
    return JSONDataCache[url];
  }
  if (RequestCache[url] != null) {
    throw RequestCache[url];
  }
  const request = new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      JSONDataCache[url] = json;
      resolve(json);
    } catch (ex) {
      reject(ex);
    } finally {
      delete RequestCache[url];
    }
  });
  RequestCache[url] = request;

  throw request;
}

export default function usePokemon(name) {
  const data = useJSONFromURL(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const pokemon = {
    name: data.name,
    imageURL: data.sprites.front_default,
    moves: data.moves.map(({ move: { name } }) => name)
  };
  return pokemon;
}
