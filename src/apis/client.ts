/**
 * Petstore3 HTTP client
 * @see https://oiyo.js.org/docs/manual/data/http
 * @see https://petstore3.swagger.io/
 */
export const client = createHttp({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})
