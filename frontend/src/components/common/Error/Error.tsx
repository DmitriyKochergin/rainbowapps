import { FC, useEffect } from 'react';
import axios from 'common/axios';
import { Modal } from 'antd';
import {
  AxiosError, AxiosResponse, AxiosRequestConfig,
} from 'axios';
import { ModalFuncProps } from 'antd/lib/modal/Modal';

const Error: FC = (): JSX.Element => {
  const [modal, body] = Modal.useModal();

  useEffect(() => {
    const config = (content: string): ModalFuncProps => ({
      title: 'Error',
      centered: true,
      content,
    });

    const openErrorModalWithIcon = (message: string) => {
      modal.error(config(message));
    };

    const requestInterceptor = axios.interceptors.request.use(
      (request: AxiosRequestConfig): AxiosRequestConfig => request,
      (error: AxiosError): Promise<AxiosError> => Promise.reject(error),
    );

    const responseInterceptor = axios.interceptors.response.use(
      (response: AxiosResponse): AxiosResponse => response,
      (error: AxiosError): Promise<AxiosError> => {
        if (error.response) {
          const { status, statusText, data } = error.response;

          if (status >= 500) {
            if (typeof data === 'string') {
              openErrorModalWithIcon(data);
            } else {
              openErrorModalWithIcon(`Invalid HTTP response status ${status} (${statusText})`);
            }
          }
        }

        return Promise.reject(error);
      },
    );

    return () => {
      axios.interceptors.request.eject(requestInterceptor);
      axios.interceptors.response.eject(responseInterceptor);
    };
  }, [modal]);

  return body;
};

export default Error;
