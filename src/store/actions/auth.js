import { useFirebase } from '@/clients/firebase-client'

const firebase = useFirebase()
const google = new firebase.auth.GoogleAuthProvider()
const microsoft = new firebase.auth.OAuthProvider('microsoft.com')
const authProviders = {
  google,
  microsoft
}

export function signIn({ commit }, authProvider) {
  return new Promise((resolve, reject) => {
    let provider = authProviders[authProvider]

    if (!provider) {
      return reject(new Error('Invalid auth provider'))
    }

    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        const { credential, user } = result
        const { accessToken } = credential
        commit('SET_ACCESS_TOKEN', accessToken)
        commit('SET_LOGGED_IN_USER', user)
        resolve()
      })
      .catch(error => {
        console.error(error.message)
        reject(new Error(error.message))
      })
  })
}
