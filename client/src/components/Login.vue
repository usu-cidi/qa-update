<template>
  <div class="heading-box">
    <h1>QA Update Automation</h1>
    <p>Center for Instructional Design and Innovation - USU</p>
    <p>Created and maintained by Emma Lynn (a02391851@usu.edu)</p>
    <a href="https://github.com/emmalynnnn/cidi-monday-QA-automation">[Source]</a>
  </div>

  <br>

  <div class="feature-box blue">
    <br>
    <h3>Please Enter Your Access Code:</h3>

    <form @submit.prevent="checkAuth" >
      <input id="check" name="check" class="visually-hidden" tabindex="-1" autocomplete="off">
      <br>
      <input id="code" type="text" name="code" class="form-control"><!--</input>-->
      <br>
      <button type="submit" class="btn btn-light button">Submit</button>

      <br>
    </form>
    <br>

    <p class="error-message" v-if="error">{{error}}</p>

  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'LoginComponent',
  emits: ["form-submitted"],
  data() {
    return {
      error: "",
      //SERVER_URL: "http://localhost:8000/",
      SERVER_URL: "https://8mdwy25ju2.execute-api.us-east-2.amazonaws.com/prod/",
    }
  },
  methods:{
    checkAuth(){
      let check = document.getElementById("check").value;
      let code = document.getElementById("code").value;
      fetch(`${this.SERVER_URL}login?code=${code}&check=${check}`)
          .then( response => response.json() )
          .then( json => {
            json = json.body;
            //console.log(json)
            let d = new Date();
            d.setTime(d.getTime() + 1 * 24 * 60 * 60 * 1000);
            let expires = "expires=" + d.toUTCString();

            document.cookie = "Token=" + json.cookie + ";" + expires + ";path=/"

            if (json.cookie === 'pshhh you thought :/') {
              this.error = "Invalid authentication. Please contact your system admin."
            } else {
              //console.log("Here is what we set the cookie as: " + json.cookie);
              this.$router.push("/box-login");
            }
          })
          .catch(err => {
            console.log(err);
          })
    }
  }
}
</script>
