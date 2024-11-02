import { Font } from '@/types/Font'
import { create } from 'zustand'

export type FontState = {
    font: Font
    changeFont: (font: FontState['font']) => void
}

const useFontStore = create<FontState>((set) => ({
  font: {
    type: 'Sans Serif',
    value: 'inter'
  },
  changeFont: (font) => set(() => ({font: font}))
}))

export default useFontStore
