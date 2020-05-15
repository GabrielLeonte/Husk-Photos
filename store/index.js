export const state = () => ({
})

export const mutations = {
  async logout() {
    await this.$auth.logout()
  }
}
