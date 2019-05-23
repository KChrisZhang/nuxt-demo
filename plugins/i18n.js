import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from '~/locales/en_US.js'
import zh from '~/locales/zh_CN.js'

Vue.use(VueI18n)

export default ({
  app,
  store
}) => {
  app.i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale: 'en',
    messages: {
      en,
      zh
    }
  })
  app.i18n.path = (link) => {
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return `/${link}`
    }
    return `/${app.i18n.locale}/${link}`
  }
}
