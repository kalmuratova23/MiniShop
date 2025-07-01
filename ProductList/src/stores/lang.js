import { defineStore } from 'pinia'
import { messages } from '../i18n/messages'

export const useLangStore = defineStore('lang', {
  state: () => ({
    currentLang: 'kz'
  }),
  getters: {
    t: (state) => (key) => messages[state.currentLang][key] || key
  },
  actions: {
    toggleLang() {
      this.currentLang = this.currentLang === 'kz' ? 'en' : 'kz'
    }
  }
})
