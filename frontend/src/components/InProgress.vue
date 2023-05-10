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
    <div v-if="updateInProgress">
      <h2>Update in progress...</h2>
      <p>The Monday Board will be updated automatically using the API. Each row will be given the "Updated" status when the row has been updated.</p>

      <BigLoading/>
    </div>

    <div v-if="updateComplete">
      <h2>Update complete!</h2>
    </div>

    <p v-if="responseMessage">{{responseMessage}}</p>

  </div>

  <br>

  <a class="btn btn-dark button" href="/">Back &lt;</a>
  <p v-if="updateInProgress">(Update process will continue if incomplete!)</p>

  <br>
  <p>Something not working right?</p>
  <a class="btn btn-dark button" href="/bug-report">Fill out a bug report form</a>
</template>

<script>
/* eslint-disable */
import BigLoading from "./BigLoading.vue";

export default {
  name: 'InProgressComponent',
  components: {
    BigLoading
  },
  data () {
    return {
      updateInProgress: true,
      updateComplete: false,
      SERVER_URL: "http://localhost:8000/",
      responseMessage: "",
    }
  },
  mounted() {
    console.log("Hello from the update!!");

    let monAPIKey = this.$route.query.monAPIKey;
    let updateType = this.$route.query.updateType;
    let monBoardId = this.$route.query.monBoardId;
    let crBoxId = this.$route.query.crBoxId;

    let inputData = {"trigger-type": updateType, 'board-id': monBoardId, 'cr-box-id': crBoxId, 'mon-api-key': monAPIKey};
    this.postData(this.SERVER_URL + "update", inputData)
        .then((response) => {
          console.log(response);
          this.updateInProgress = false;
          if (response.updateStatus === "Complete") {
            this.updateComplete = true;
          }
          if (response.result) {
            this.responseMessage = response.result;
          }
    }).catch(err => {
      console.log(err);
      this.responseMessage = "Error, please contact your developer by filling out a bug report form below. " +
          "Include the following message: " + err;
    });
  },
  methods:{
    postData(url, data, contentType="application/json", stringify=true) {
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
}
</script>
