import { toasts } from "../store/toast/store"; // adjust path accordingly
import { DEFAULT_HORIZONTAL, DEFAULT_TIMEOUT, DEFAULT_VERTICAL } from "../constants";

const getIconByType = (type) => {
  switch (type) {
    case "success": return "✔️"; // Success icon
    case "error": return "❌";   // Error icon
    case "info": return "ℹ️";    // Info icon    
    case "warning": return "⚠️"; // Warning icon
    default: return "🔔";        // Default icon
  }
};

// Generic Toast
export function showToast(msg, type = "default", options) {
  const {
    horizontal = DEFAULT_HORIZONTAL,
    vertical = DEFAULT_VERTICAL,
    timeout = DEFAULT_TIMEOUT,
  } = options || {};

  toasts.send(msg, type, horizontal, vertical, timeout ,getIconByType(type));
}

// Specific Wrappers
export const showSuccess = (msg, options) => showToast(msg, "success", options);

export const showError = (msg, options) => showToast(msg, "error", options);

export const showInfo = (msg, options) => showToast(msg, "info", options);

export const showWarning = (msg, options) => showToast(msg, "warning", options);