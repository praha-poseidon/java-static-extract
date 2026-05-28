const parts = ["/api", "/ignored"];
const config = {
  base: parts[0],
  leaf: "/list"
};
const { base } = config;

function joinPath(path: string) {
  return `${base}${path}`;
}

export function loadList() {
  return fetch(joinPath(config.leaf));
}
