import { Api as Axios } from "./axios";
import { Api as Fetch } from "./fetch";

Axios.get("pokemon/ditto")
  .then((resp) => console.log(resp))
  .catch((err) => console.log(err));

Fetch("pokemon/bulbasaur", "GET")
  .then((resp) => console.log(resp))
  .catch((err) => console.log(err));
