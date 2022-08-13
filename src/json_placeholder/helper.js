export default async function request(url, method) {
  return fetch(url, { method })
    .then((response) => response.json())
    .then((data) => data);
}
