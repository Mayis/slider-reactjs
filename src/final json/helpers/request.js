export default async function request(url) {
  return fetch(url)
    .then((rsp) => rsp.json())
    .then((data) => data);
}
