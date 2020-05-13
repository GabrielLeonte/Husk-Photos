<template>
  <div>
    <notifications group="foo"> </notifications>
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
          <form @submit.prevent="proceed">
            <div class="space">
              <div><span class="c-span">Email</span></div>
              <input
                type="email"
                placeholder="eg: thebigdev@email.ro"
                v-model="email"
                required
              />
            </div>
            <div>
              <div><span class="c-span">Password</span></div>
              <div>
                <input
                  type="password"
                  placeholder="eg: please-dont-use-this-example-:D"
                  v-model="password"
                  required
                />
              </div>
            </div>
            <div>
              <span class="small-text">
                Forgot Password?
                <nuxt-link to="/reset" class="small-text">
                  Reset here!
                </nuxt-link>
              </span>
            </div>
            <div>
              <button class="custom-button">Create</button>
            </div>
          </form>
          <div class="base">
            <span class="small-text-center">Have an account?</span>
            <nuxt-link class="small-text-center" to="/login">
              Log in
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  middleware: 'auth',
  layout: 'nonavbar',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async proceed() {
      try {
        await firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
      } catch (err) {
        this.$notify({
          group: 'foo',
          type: 'warn',
          text: err
        })
      }
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap');

* {
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

.c-inputs {
  margin-top: 10vh;
  margin: auto;
  width: 70%;
}

input {
  width: 100%;
  border: 0;
  border-bottom: solid black 1px;
  height: 32px;
  padding: 10px 20px 10px 10px;
}

.c-span {
  display: grid;
  margin-top: 7vh;
}

.space {
  margin-bottom: 3vh;
}

.custom-button {
  position: absolute;
  margin: 0 auto;
  border: 0;
  background: #292929;
  color: #ffffff;
  font-family: 'Thasadith', sans-serif;
  font-size: 15px;
  border-radius: 5px;
  margin-top: 10vh;
  padding: 8px 20px 8px 20px;
}

.custom-button:hover {
  background: #151515;
}

.small-text {
  color: #313131;
  font-size: 12px;
}

.base {
  display: grid;
  position: absolute;
  width: 70%;
  bottom: 10px;
}

.small-text-center {
  text-align: center;
  margin: auto 0;
  color: #000000;
  font-size: 11px;
  font-weight: 500;
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
