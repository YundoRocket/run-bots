"use client";

import { useEffect, useState } from "react";

export interface Toast {
  id: string;
  message: string;
  type: "success" | "error" | "info";
}

let toastQueue: Toast[] = [];
let listeners: Array<(toasts: Toast[]) => void> = [];

export function addToast(message: string, type: Toast["type"] = "info") {
  const toast: Toast = {
    id: Math.random().toString(36).substring(7),
    message,
    type,
  };
  toastQueue = [...toastQueue, toast];
  listeners.forEach((listener) => listener(toastQueue));

  setTimeout(() => {
    toastQueue = toastQueue.filter((t) => t.id !== toast.id);
    listeners.forEach((listener) => listener(toastQueue));
  }, 3000);
}

export function Toaster() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    listeners.push(setToasts);
    return () => {
      listeners = listeners.filter((l) => l !== setToasts);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`rounded-lg border px-4 py-3 shadow-lg ${
            toast.type === "success"
              ? "bg-green-900/90 border-green-700"
              : toast.type === "error"
              ? "bg-red-900/90 border-red-700"
              : "bg-blue-900/90 border-blue-700"
          }`}
        >
          <p className="text-sm">{toast.message}</p>
        </div>
      ))}
    </div>
  );
}
