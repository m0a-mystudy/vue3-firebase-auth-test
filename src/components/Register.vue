<template>
  <div class="hello">
    <h1>Register</h1>
    <p>
      登録テスト
    </p>
    <p>{{user}}</p>
    <a @click.prevent="register"> register </a>
    <button @click.prevent="login">login</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import firebase from 'firebase'

// async function getLoginState(): Promise<boolean> {
//   const auth = firebase.auth();
//   return new Promise((resolve, reject) => {
//     auth.onAuthStateChanged(
//       user => {
//         resolve(!!user);
//       },
//       err => {
//         reject(err);
//       }
//     );
//   });
// }


export default defineComponent({
  name: 'Register',
  props: {
    // msg: String,
  },
  watch:{
    user():firebase.User | null {
      const user = firebase.auth().currentUser;
      return user;
    }
  },
  methods:{
    async register(){
      try {
        const result = await firebase.auth().createUserWithEmailAndPassword(
          "abe00makoto+a123@gmail.com","tx2d236dg");
        console.log(result);
      } catch(e) {
        console.log(e);
      }
    },
    async login(){
      try {
        const result = await firebase.auth().signInWithEmailAndPassword("abe00makoto+a123@gmail.com","tx2d236dg");
        console.log(result);

        const user = firebase.auth().currentUser;
        console.log(user);

      } catch(e) {
        console.log(e);
      }
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
