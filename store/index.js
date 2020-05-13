export const state = () => ({
  user_data: []
})

export const mutations = {
  login(state, data) {},
  ON_AUTH_STATE_CHANGED_MUTATION(state, { authUser, claims }) {
    console.log('Yep...')
  }
}
