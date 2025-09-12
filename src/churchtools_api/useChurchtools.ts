// api-wrapper-hook
// composable
import { ref } from "vue"

export function useChurchtools<ApiResponse = unknown, Params = any>(
  fn: (params?: Params) => Promise<ApiResponse>,
  initialParams?: Params
) {
  const data = ref<ApiResponse | null>(null)
  const isLoading = ref(false)
  const error = ref<Error | null>(null)
  const params = ref<Params | undefined>(initialParams)

  const fetchData = async (overrideParams?: Params) => {
    isLoading.value = true
    error.value = null

    try {
      console.log("Fetching data with params:", overrideParams ?? params.value)
      const response = await fn(overrideParams ?? params.value)
      console.log(fn)
      data.value = response
      console.log(response)
      if (overrideParams !== undefined) {
        params.value = overrideParams
      }
      return response
    } catch (err: any) {
      const e = err instanceof Error ? err : new Error("Unknown error")
      error.value = e
      console.error("API Error:", e.message)
      throw e
    } finally {
      isLoading.value = false
    }
  }

  // Fetch once immediately if initialParams exist
  if (initialParams !== undefined) {
    fetchData(initialParams)
  }

  const refetch = (newParams?: Params) => fetchData(newParams)

  return { data, isLoading, error, refetch }
}
