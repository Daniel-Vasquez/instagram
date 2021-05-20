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

  return fetch(url, options).then((response) => response.json());
}

function queryParams(params) {
  return Object.keys(params)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(params[k]))
    .join("&");
}

const RICK_AND_MORTY_URL = "https://rickandmortyapi.com/api/character/";

export function getRickAndMortyCharacters(queryParams = {}) {
  return request(RICK_AND_MORTY_URL, { queryParams });
}
