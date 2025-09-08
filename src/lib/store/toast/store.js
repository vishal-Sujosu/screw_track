import { writable } from "svelte/store"

export const addToast = (toast) => {
  // Setup some sensible defaults for a toast.
  const defaults = {
    id,
    type: "default",
    timeout: 3000,
  };

  // Push the toast to the top of the list of toasts
  toasts.update((all) => [{ ...defaults, ...toast }, ...all]);

  // If toast is dismissible, dismiss it after "timeout" amount of time.
  if (toast.timeout) setTimeout(() => dismissToast(id), toast.timeout);
};

function createToastsStore () {
  const { subscribe, set, update } = writable(new Map())

  const dismissToast = (id) => {
    update(state => {
      // console.log('timer expired for id: ', id)
      state.forEach((value, key) => {
        const newValue = value.filter(e => e.id !== id)
        if (newValue.length === 0) {
          state.delete(key)
        } else {
          state.set(key, newValue)
        }
      })
      return new Map(JSON.parse(JSON.stringify(Array.from(state))))
    })
  };

  const send = (msg, type = "default", horizontal, vertical, timeout = 3000) => {
    update(state => {
      const key = `${horizontal}-${vertical}`
      const value = { id: id(), msg, type, horizontal, vertical, timeout }
      if (!state.has(key)) {
        state.set(key, new Array())
      }
      state.set(key, [...state.get(key), value])
      // If the toast timeout positive, dismiss it after "timeout" amount of time.
      if (value.timeout > 0) setTimeout(() => dismissToast(value.id), value.timeout);
      return new Map(JSON.parse(JSON.stringify(Array.from(state))))
    })
  }

  return {
    subscribe,
    send,
    default: (msg, horizontal, vertical, timeout) => send(msg, "default", horizontal, vertical, timeout),
    error: (msg, horizontal, vertical, timeout) => send(msg, "error", horizontal, vertical, timeout),
    warning: (msg, horizontal, vertical, timeout) => send(msg, "warning", horizontal, vertical, timeout),
    info: (msg, horizontal, vertical, timeout) => send(msg, "info", horizontal, vertical, timeout),
    success: (msg, horizontal, vertical, timeout) => send(msg, "success", horizontal, vertical, timeout),
    delete: (id) => dismissToast(id)
  }

}
const id = () => {
  // return self.crypto.randomUUID()
  return crypto.randomUUID()
}

export const toasts = createToastsStore()