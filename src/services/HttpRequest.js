import UserService from "./UserService";

const baseUrl = "http://localhost:8080";

const get = (url) => {
  const request = new Request(baseUrl + url, {
    method: "GET",
    headers: new Headers({
      Authorization: `Bearer ${UserService.getToken()}`,
      "Content-Type": "application/json",
    }),
  });

  return fetch(request);
};

const post = (url, body) => {
  const request = new Request(baseUrl + url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: new Headers({
      Authorization: `Bearer ${UserService.getToken()}`,
      "Content-Type": "application/json",
    }),
  });

  return fetch(request);
};

const logToken = () => {
  console.info("token ", UserService.getToken());

  Meet;
};

const httpRequest = { logToken, get, post };

export default httpRequest;
