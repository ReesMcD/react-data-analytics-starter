import axios, { AxiosResponse } from "axios";

/**
 * Wrapper function for axios get request
 * @param url The URL to send the GET request to
 * @param params Optional query parameters
 * @param config Optional axios config
 * @returns A promise that resolves with the response data
 */
export async function get<T extends object>(
  url: string,
  params?: Record<string, unknown>,
  config?: Record<string, unknown>
): Promise<T> {
  try {
    const response: AxiosResponse<T> = await axios.get(url, {
      params,
      ...config,
    });
    return response.data;
  } catch (error) {
    console.error("Error in GET request:", error);
    throw error;
  }
}
