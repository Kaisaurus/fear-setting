import { initialize } from 'react-localize-redux'
// import { addTranslation } from 'react-localize-redux'
import { addTranslationForLanguage } from 'react-localize-redux'
import { setActiveLanguage } from 'react-localize-redux'

export function initLocalize(store) {
  const json = require('../content/en.json')
  store.dispatch(
    initialize([
      { name: 'English', code: 'en' }
      // { name: 'Dutch', code: 'nl' },
      // { name: 'Japanese', code: 'jp' }
    ])
  )
  store.dispatch(setActiveLanguage('en'))
  store.dispatch(addTranslationForLanguage(json, 'en'))
}

// code to change language
// import { setActiveLanguage } from 'react-localize-redux';

// store.dispatch(setActiveLanguage('fr'));
