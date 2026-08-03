/**
 * Thin API client for auth flows. Swap API_BASE (or the individual
 * endpoint paths below) once you know your real backend's shape — the
 * request/response contracts here are a reasonable, common convention,
 * not something pulled from an actual spec.
 */
const API_BASE = import.meta.env.VITE_API_BASE_URL ?? "/api";

export interface ApiError {
    message: string;
    status?: number;
}

async function request<T>(path: string, options: RequestInit): Promise<T> {
    const res = await fetch(`${API_BASE}${path}`, {
        headers: { "Content-Type": "application/json" },
        ...options,
    });

    if (!res.ok) {
        let message = "Something went wrong. Please try again.";
        try {
            const data = await res.json();
            message = data?.message ?? message;
        } catch {
            // response body wasn't JSON — keep the default message
        }
        const error: ApiError = { message, status: res.status };
        throw error;
    }

    const text = await res.text();
    return (text ? JSON.parse(text) : {}) as T;
}

/** Step 1: user submits their email on the Forgot Password page. */
export function requestPasswordReset(email: string) {
    return request<{ message: string }>("/auth/forgot-password", {
        method: "POST",
        body: JSON.stringify({ email }),
    });
}

/** Step 2: user clicks the emailed link (containing `token`) and submits a new password. */
export function resetPassword(token: string, password: string) {
    return request<{ message: string }>("/auth/reset-password", {
        method: "POST",
        body: JSON.stringify({ token, password }),
    });
}