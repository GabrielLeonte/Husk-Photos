<template>
  <div>
    <div class="image">
      <img class="filter" src="../assets/filter.png" />
      <img src="../assets/signup.jpg" />
      <span class="photo-data"
        >Berlin, Berlin, Germany by Ming Han Low <br />
        on May 5, 2020</span
      >
    </div>
    <div class="b-50">
      <div class="cbox">
        <div class="c-title">
          <span>
            Hello user <br />
            Let’s get you in
          </span>
        </div>
        <div class="c-inputs">
          <div><span>Email</span></div>
          <input type="email" />
        </div>
        <div><span>Password</span></div>
        <div><input type="password" /></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap');

body {
  user-select: none;
  outline: none;
}
.image {
  float: left;
}

img {
  position: fixed;
  height: 100vh;
  width: 40%;
  object-fit: cover;
}

.filter {
  z-index: 999;
}

.photo-data {
  position: fixed;
  z-index: 1000;
  color: #d6d6d6;
  font-size: 12px;
  bottom: 10px;
  left: 10px;
}
.cbox {
  position: relative;
  width: 70%;
  margin: 10px auto;
  margin-top: 10%;
  width: 500px;
  height: 600px;
  border: solid #0000002c 1px;
}

.b-50 {
  float: right;
  width: 60%;
}

.c-title {
  display: block;
  font-family: 'Rock Salt', cursive;
  margin-top: 3vh;
  color: #313131;
  font-size: 20px;
  line-height: 45px;
  text-align: center;
}

input {
  display: block;
  text-align: center;
  border: 0;
  border-bottom: solid black 1px;
  margin: auto;
  width: 70%;
}

@media only screen and (max-width: 1100px) {
  .b-50 {
    width: 100%;
  }

  .image {
    opacity: 0;
  }
}
</style>

<script>
export default {
  layout: 'nonavbar'
}
</script>
