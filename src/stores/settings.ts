import { create } from "zustand";
import { persist } from "zustand/middleware";
import appConfig from "~/app.config";
import { StorageKey } from "~/models/enums";
import { wxtStoreAdapter } from "~/utils";

export const useSettingsStore = create<SettingsStore>()(
  persist(
    (set) => ({
      theme: appConfig.theme,
      setTheme: (value) => set({ theme: value }),
    }),
    { name: StorageKey.Settings, storage: wxtStoreAdapter }
  )
);

storage.watch(StorageKey.Settings, () => useSettingsStore.persist.rehydrate());

export type SettingsStore = {
  theme: "light" | "dark";
  setTheme: (value: "light" | "dark") => void;
};
