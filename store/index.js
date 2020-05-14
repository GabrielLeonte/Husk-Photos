export const state = () => ({
  user: []
})

export const mutations = {
  login(state, data) {
    console.log(data)
    state.user = data
    this.$router.push('/home')
  },
  test(state, data) {
    console.log(data)
  }
}
