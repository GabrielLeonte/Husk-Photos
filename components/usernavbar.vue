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
            <a>
              <img class="navbar-icon" src="../assets/home_3.svg" />
            </a>
          </div>
          <div class="navbar-item">
            <a>
              <img class="navbar-icon" src="../assets/explore.svg" />
            </a>
          </div>
          <div class="navbar-item">
            <a>
              <img class="navbar-icon" src="../assets/download.svg" />
            </a>
          </div>
          <div class="navbar-item">
            <a>
              <img class="navbar-icon" src="../assets/user.svg" />
            </a>
          </div>
          <div class="navbar-item">
            <a>
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
  height: 30px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
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
</style>
