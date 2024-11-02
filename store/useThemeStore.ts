import { create } from 'zustand'

export type ThemeState = {
    mode: 'light' | 'dark'
    changeMode?: (mode: ThemeState["mode"]) => void;
}

const useThemeStore = create<ThemeState>((set) => ({
  mode: 'light',
  changeMode: (mode) => set(() => ({mode: mode}))
}))

export default useThemeStore
