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
import MainHeader from "./MainHeaderComponent.vue";
import {SERVER_URL} from '@/assets/constants.js';

export default {
  name: 'LoadingBoxComponent',
  data() {
    return {
      errorText: "",
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

    let code = this.$route.query.code;
    let interID = this.$route.query.state;

    console.log(`Here is the code: ${code}; state: ${interID}`);

    let error = this.$route.query.error;
    let error_description = this.$route.query.error_description;


    if (error) {
      console.log(`Error- ${error}: ${error_description}`);
    }

    if (error === 'access_denied') {
      console.log("Denied access");
      this.errorText = 'You denied access to your Box account. You must authorize QA Update to access your account to use this application.'
    } else if (error) {
      this.errorText = error + ": " + error_description
    } else {
      this.postData(SERVER_URL + "finish-oauth", {code: code, state: interID})
          .then((data) => {
            console.log(data);
            data = data.body;
            console.log(data);
            if (data.result === "Success") {
              console.log("Success!");
              this.$router.replace({
                path: `/add-info`,
                query: {boxAccess: data.access_token, boxRefresh: "", interID: interID}
              });
            } else {
              this.errorText = "Box authorization failed: " + data.result;
            }
          });
    }

  },
}
</script>
