const BASE_URL = "https://pokeapi.co/api/v2/";

export const Api = async <BodyType = object, ReturnType = object>(
  url: string,
  method: string = "GET",
  body?: BodyType,
): Promise<ReturnType | unknown> => {
  try {
    // Add headers
    const headers = new Headers();    
    headers.set("Content-Type", "application/json");

    // Request options
    const options = {
      method,
      headers,
      body: JSON.stringify(body),
    };

    // Request
    const response = await fetch(BASE_URL.concat(url), options);

    // If response return not ok throw exception
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    // else return json responses
    return await response.json();
  } catch (error) {
    // Something went wrong
    return error;
  }
};
