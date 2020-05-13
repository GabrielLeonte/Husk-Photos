import firebase from 'firebase/app'

export default function({ store, redirect }) {
  firebase.auth().onAuthStateChanged(user => {
    if (!user) redirect('/login')
  })
}
