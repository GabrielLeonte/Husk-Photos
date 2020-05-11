<template>
  <div>
    <div class="header">
      <div>
        <img class="head" src="../assets/home.svg" />
        <img class="sitting-girl" src="../assets/sitting_girl.svg" />
      </div>
      <div class="content">
        <div>
          <span class="main-title"
            >A new way to monetize <br />
            your awesome shots
          </span>
        </div>
        <div>
          <span class="main-subtitle"
            >Get the best drone shots and inspiring moments from our <br />
            amazing community photographers.</span
          >
        </div>
        <div>
          <nuxt-link to="/" class="custom-button"
            >Join our amazing community️</nuxt-link
          >
          <br />
          <span class="check-page-link"
            >Find out how you can get paid
            <nuxt-link to="/">
              <span style="text-decoration: underline; color: white;">
                here
              </span>
            </nuxt-link>
          </span>
        </div>
      </div>
    </div>

    <div class="body-content">
      <div class="container how-it-works">
        <div class="columns is-multiline">
          <div class="column">
            <div>
              <span class="htw-title">You see</span>
            </div>
            <div><img src="../assets/you_see.svg" /></div>
          </div>
          <div class="column">
            <div>
              <span class="htw-title">You love</span>
            </div>
            <div><img src="../assets/you_love.svg" /></div>
          </div>
          <div class="column">
            <div>
              <span class="htw-title">We pay!</span>
            </div>
            <div><img src="../assets/we_pay.svg" /></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Thasadith:wght@700&display=swap');

* {
  margin: 0 auto;
  user-select: none;
  outline: none;
}

.header {
  position: relative;
}

.head {
  width: 100%;
}

.sitting-girl {
  height: 55%;
  position: absolute;
  margin-top: 3%;
  right: 1%;
}

.content {
  position: absolute;
  left: 15%;
  display: inline-block;
  top: 11vh;
}

.main-title {
  display: inline-block;
  font-family: 'Thasadith', sans-serif;
  color: #ffffff;
  font-size: 45px;
  line-height: 45px;
}

.main-subtitle {
  display: inline-block;
  padding-top: 20px;
  font-family: 'Thasadith', sans-serif;
  color: #ffffff;
  font-size: 20px;
  line-height: 35px;
}

.custom-button {
  position: absolute;
  margin: 0 auto;
  user-select: none;
  outline: none;
  border: 0;
  background: #292929;
  color: #ffffff;
  font-family: 'Thasadith', sans-serif;
  font-size: 20px;
  border-radius: 10px;
  margin-top: 16vh;
  padding: 10px 20px 10px 20px;
}

.custom-button:hover {
  background: #151515;
}

.body-content {
  position: relative;
  width: 100%;
}

.check-page-link {
  color: #ffffff;
  position: absolute;
  font-family: 'Thasadith', sans-serif;
  margin-top: 19vh;
  margin-left: 7px;
  font-size: 14px;
}

.how-it-works {
  margin-top: 8%;
  margin-bottom: 25%;
}

.column {
  width: 100%;
}

.htw-title {
  display: block;
  text-align: center;
  margin-bottom: 15%;
  font-family: 'Thasadith', sans-serif;
  font-weight: 700;
  font-size: 45px;
}

@media only screen and (max-width: 1300px) {
  .custom-button {
    margin-top: 3vh;
  }

  .check-page-link {
    margin-top: 7vh;
  }
}

@media only screen and (max-width: 1000px) {
  .sitting-girl {
    opacity: 0;
  }

  .head {
    width: 100%;
    height: 70vh;
    background: #3caea3;
  }

  .content {
    top: 5%;
    left: 20px;
  }

  .custom-button {
    margin-top: 7vh;
  }

  .check-page-link {
    margin-top: 11vh;
  }
}
</style>
