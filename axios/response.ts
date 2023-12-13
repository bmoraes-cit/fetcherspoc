import { AxiosError, AxiosResponse } from "axios";

import { Api } from "./axios";

const handlerResponseError = (error: AxiosError) => {
  // Se houver um erro na resposta, trate-o aqui
  // Você pode personalizar a manipulação de erros de acordo com suas necessidades
  if (error.response) {
    // O servidor respondeu com um status de erro
    console.error("Erro na resposta do servidor:", error.response.status);

    // Por exemplo, você pode lançar uma exceção, mostrar uma mensagem de erro, etc.
  } else if (error.request) {
    // A requisição foi feita, mas não houve resposta do servidor
    console.error("Sem resposta do servidor");
  } else {
    // Algo aconteceu ao configurar a requisição que gerou o erro
    console.error("Erro ao configurar a requisição:", error.message);
  }

  // Retorna uma Promise rejeitada com o erro
  return Promise.reject(error);
};

const handlerResponse = (response: AxiosResponse): AxiosResponse => {
  // Você pode realizar manipulações nos dados da resposta aqui, se necessário
  console.log("Resposta bem-sucedida:", response.data);

  // Retorna a resposta original
  return response;
};

Api.interceptors.response.use(handlerResponse, handlerResponseError);
