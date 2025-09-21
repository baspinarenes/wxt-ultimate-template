import { createJSONStorage } from "zustand/middleware";

export const wxtStorage = {
  getItem: async (name: string) => {
    const result: any = await storage.getItem(name as `local:${string}`);
    if (!result) return null;
    return JSON.stringify(result);
  },
  setItem: async (name: string, value: string) => {
    await storage.setItem(name as `local:${string}`, JSON.parse(value));
  },
  removeItem: async (name: string) => {
    await storage.removeItem(name as `local:${string}`);
  },
};

export const wxtStoreAdapter = createJSONStorage(() => wxtStorage);
