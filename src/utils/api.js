export function request(url, options = {}) {
  options = {
    // your default options
    credentials: "same-origin",
    redirect: "error",
    ...options,
  };

  if (options.queryParams) {
    url +=
      (url.indexOf("?") === -1 ? "?" : "&") + queryParams(options.queryParams);
    delete options.queryParams;
  }

  return fetch(url, options).then(async (response) => {
    if (response.ok) {
      return response.json();
    }

    throw new Error(JSON.stringify(await response.json()));
  });
}

function queryParams(params) {
  return Object.keys(params)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(params[k]))
    .join("&");
}

const RICK_AND_MORTY_URL = "https://rickandmortyapi.com/api/character/";

const DOGS_API = "...";

export function getRickAndMortyCharacters(queryParams = {}) {
  return request(RICK_AND_MORTY_URL, { queryParams });
}

export function getCharacter(id) {
  return request(`${RICK_AND_MORTY_URL}${id}`);
}

export function getRandomDogs() {
  return request(DOGS_API);
}
