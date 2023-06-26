<template>
  <MainHeader/>

  <div class="feature-box blue">
    <br>
    <h3>Verifying Box authentication....</h3>

    <div v-if="errorText">
      <p>{{ errorText }}</p>
      <a class="btn btn-dark button" href="/box-login">Authorize again</a>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import MainHeader from "./MainHeader.vue";
import {SERVER_URL} from "@/assets/constants";
export default {
  name: 'LoadingBoxComponent',
  data() {
    return {
      errorText: "",
      //SERVER_URL: "http://localhost:8000/",
      SERVER_URL: SERVER_URL,
    }
  },
  components: {
    MainHeader,
  },
  methods: {
    postData(url, data, contentType = "application/json", stringify = true) {
      let theBody;
      if (stringify) {
        theBody = JSON.stringify(data);
      } else {
        theBody = data;
      }

      return fetch(url, {
        method: "POST",
        /*mode: "no-cors",*/
        cache: "no-cache",
        credentials: "same-origin",
        connection: "keep-alive",
        headers: {
          Accept: 'application.json',
          "Content-Type": contentType,
        },
        body: theBody
      })
          .then(res => {
            return res.json();
          })
          .then((obj) => {
            return obj;
          })
          .catch(err => {
            console.log(err);
          });
    }
  },
  mounted() {
    console.log(this.$route.query.state);
    console.log(this.$route.query.code);

    let code = this.$route.query.code;
    let state = this.$route.query.state;
    let error = this.$route.query.error;
    let error_description = this.$route.query.error_description;

    if (error === 'access_denied') {
      console.log("Denied access");
      this.errorText = 'You denied access to your Box account. You must authorize QA Update to access your account to use this application.'
    } else if (error) {
      this.errorText = error + ": " + error_description
    } else {
      this.postData(this.SERVER_URL + "finish-oauth", {code: code, state: state})
          .then((data) => {
            console.log(data);
            data = data.body;
            console.log(data);
            if (data.result === "Success") {
              this.$router.replace({path: '/add-info'})
            } else {
              this.errorText = "Box authorization failed: " + data.result;
            }
          });
    }

  },
}
</script>
