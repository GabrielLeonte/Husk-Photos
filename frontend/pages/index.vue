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
          <button class="custom-button">Join our amazing community️</button>
        </div>
      </div>
    </div>

    <div class="body-content">
      z
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Thasadith:wght@700&display=swap');

* {
  margin: 0 auto;
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
  margin: 0 auto;
  user-select: none;
  outline: none;
  border: 0;
  background: #292929;
  color: #ffffff;
  font-family: 'Thasadith', sans-serif;
  font-size: 20px;
  border-radius: 10px;
  margin-top: 10vh;
  padding: 10px 20px 10px 20px;
}

.custom-button:hover {
  background: #151515;
}

.body-content {
  position: relative;
  width: 100%;
  background-color: blueviolet;
}

@media only screen and (max-width: 1380px) {
  .sitting-girl {
    opacity: 0;
  }
}
</style>
