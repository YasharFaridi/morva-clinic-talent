import axios, {
  AxiosInstance,
  AxiosError,
  InternalAxiosRequestConfig,
  AxiosHeaders,
  AxiosResponse,
} from "axios";
import Cookies from "js-cookie";

const apiClient: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL + "/api",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 60000,
});

// ----- Request Interceptor -----
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const token = Cookies.get("access_token");

    if (!config.headers) {
      config.headers = new AxiosHeaders();
    }

    if (token) {
      config.headers.set("Authorization", `Bearer ${token}`);
    }

    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

// ----- Response Interceptor -----
apiClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    const status = error.response?.status;

    if (status === 401) {
      Cookies.remove("access_token");
      if (typeof window !== "undefined") {
        window.location.href = "/login";
      }
    } else if (status === 403) {
      if (typeof window !== "undefined") {
        alert("شما اجازه دسترسی به این بخش را ندارید.");
      }
    } else if (status === 500) {
      if (typeof window !== "undefined") {
        alert("خطای سرور رخ داده. لطفا بعدا تلاش کنید.");
      }
    } else if (!status) {
      if (typeof window !== "undefined") {
        alert("ارتباط با سرور برقرار نشد. اینترنت خود را بررسی کنید.");
      }
    }

    return Promise.reject(error);
  }
);

export default apiClient;
