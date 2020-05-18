<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <span class="navbar-item rock-salt-title">
            Husk Photos
          </span>
        </a>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu">
        <div class="navbar-end">
          <!-- ICONS -->
          <div class="navbar-item">
            <nuxt-link to="/home">
              <img class="navbar-icon" src="../assets/home_3.svg" />
            </nuxt-link>
          </div>
          <div class="navbar-item">
            <nuxt-link to="/explore">
              <img class="navbar-icon" src="../assets/explore.svg" />
            </nuxt-link>
          </div>
          <div class="navbar-item">
            <nuxt-link to="/downloads">
              <img class="navbar-icon" src="../assets/download.svg" />
            </nuxt-link>
          </div>
          <div class="navbar-item">
            <nuxt-link to="/profile">
              <img class="navbar-icon" src="../assets/user.svg" />
            </nuxt-link>
          </div>
          <div class="navbar-item">
            <a @click="$store.commit('logout')">
              <img class="navbar-icon" src="../assets/logout.svg" />
            </a>
          </div>
          <!-- ICONS -->
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto');

.rock-salt-title {
  font-family: 'Rock Salt', cursive;
  font-size: 20px;
  line-height: 15px;
  color: #313131;
  user-select: none;
}

.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  height: 20px !important;
  box-shadow: 0px 1px 1px #0000001a;
  padding-right: 10px;
}

.custom-button {
  font-family: 'Roboto', sans-serif;
  user-select: none;
  outline: none;
  border: 0;
  background: #292929;
  color: #ffffff;
  font-family: 'Thasadith', sans-serif;
  font-size: 19px;
  border-radius: 5px;
  padding: 2px 15px 2px 15px;
}

.custom-button:hover {
  background: #151515;
}

.login-link {
  position: relative;
  user-select: none;
  outline: none;
  font-weight: 700;
  padding-right: 10px;
  font-size: 19px;
  line-height: 25px;
  color: #313131;
}

.login-link:hover {
  text-decoration: underline;
}

.navbar-end {
  margin-top: 5px;
  vertical-align: middle;
}

img {
  margin-left: 5px;
  margin-right: 5px;
  height: 50px;
}

.nuxt-link-exact-active {
  border-radius: 4px;
  border-bottom: solid #2c2c2c 4px ;
}
</style>
