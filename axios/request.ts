import { InternalAxiosRequestConfig } from "axios";
import { Api } from "./axios";

const handlerRequest = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  // Modifique a configuração da solicitação aqui
  console.log("Enviando solicitação:", config);

  // Você pode adicionar cabeçalhos adicionais, modificar dados da solicitação, etc.

  return config;
};

const handlerRequestError = (error: unknown): Promise<never> => {
  // Se houver um erro na configuração da solicitação, trate-o aqui
  console.error('Erro na configuração da solicitação:', error);

  // Retorna uma Promise rejeitada com o erro
  return Promise.reject(error);
};

Api.interceptors.request.use(handlerRequest, handlerRequestError);
