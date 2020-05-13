<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
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
        <div class="navbar-item">
          <div>
            <router-link to="/login" class="login-link">
              Login
            </router-link>
          </div>
          <div class="navbar-item">
            <div>
              <router-link class="custom-button" to="/signup">
                Join us
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto");

.rock-salt-title {
  font-family: "Rock Salt", cursive;
  font-size: 25px;
  line-height: 15px;
  color: #313131;
  user-select: none;
}

.navbar {
  box-shadow: 0px 5px 5px #00000026;
  padding-right: 10px;
}

.custom-button {
  font-family: "Roboto", sans-serif;
  user-select: none;
  outline: none;
  border: 0;
  background: #292929;
  color: #ffffff;
  font-family: "Thasadith", sans-serif;
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
</style>
