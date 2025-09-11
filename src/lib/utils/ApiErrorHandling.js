import { showError } from "./toast";

export async function fetchWithState(url, opts = {}) {
  const result = {
    data: null,
    loading: true,
    error: null,
  };

  try {
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error(`Error: ${res.status}`);
    result.data = await res.json();
  } catch (err) {
    result.error = err.message;
    showError(err.message);
  } finally {
    result.loading = false;
  }

  return result;
}