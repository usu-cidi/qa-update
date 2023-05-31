<template>
  <div className="heading-box">
    <h1>QA Update Automation</h1>
    <p>Center for Instructional Design and Innovation - USU</p>
    <p>Created and maintained by Emma Lynn (a02391851@usu.edu)</p>
    <a href="https://github.com/emmalynnnn/cidi-monday-QA-automation">[Source]</a>
  </div>

  <br>

  <div className="feature-box blue">
    <br>
    <div v-if="updateInProgress">
      <h2>Update in progress...</h2>
      <p>The Monday Board will be updated automatically using the API. Each row will be given the "Updated" status when
        the row has been updated.</p>

      <BigLoading/>
    </div>

    <div v-if="updateComplete">
      <h2>Update successfully initiated!</h2>
      <p>You will recieve an email when the update is complete.</p>
    </div>

    <h2 v-if="error" className="error-message">Error completing update.</h2>

    <p v-if="responseMessage">{{ re sponseMessage }}</p>

  </div>

  <br>

  <a className="btn btn-dark button" href="/">Back &lt;</a>
  <p v-if="updateInProgress">(Update process will continue if incomplete!)</p>

  <br>
  <p>Something not working right?</p>
  <a className="btn btn-dark button" href="/bug-report">Fill out a bug report form</a>
</template>

<script>
/* eslint-disable */
import BigLoading from "./BigLoading.vue";

export default {
  name: 'InProgressComponent',
  components: {
    BigLoading
  },
  data() {
    return {
      updateInProgress: true,
      updateComplete: false,
      //SERVER_URL: "http://localhost:8000/",
      SERVER_URL: "https://8mdwy25ju2.execute-api.us-east-2.amazonaws.com/prod/",
      responseMessage: "",
      error: false,
    }
  },
  mounted() {
    console.log("Hello from the update!!");

    let monAPIKey = this.$route.query.monAPIKey;
    let updateType = this.$route.query.updateType;
    let monBoardId = this.$route.query.monBoardId;
    let crBoxId = this.$route.query.crBoxId;
    let email = this.$route.query.email;

    let inputData = {
      'trigger-type': updateType,
      'board-id': monBoardId,
      'cr-box-id': crBoxId,
      'mon-api-key': monAPIKey,
      'email': email
    };
    this.postData(this.SERVER_URL + "update", inputData)
        .then((response) => {
          if (response === undefined) {
            console.log("504 Gateway Timeout - update probably still initiated though")
            this.updateInProgress = false;
            this.error = true;
            this.responseMessage = "Please contact your developer by filling out a bug report form below. " +
                "Include the following message: 504 Gateway Timeout";
            return;
          }
          response = response.body;
          console.log(response);
          this.updateInProgress = false;
          if (response.updateStatus === "Successfully initiated") {
            console.log("Initiation complete");
            this.updateComplete = true;
          } else if (response.updateStatus === "Incomplete (error)") {
            this.error = true;
            this.responseMessage = "Please contact your developer by filling out a bug report form below. " +
                "Include the following message: ";
          } else if (response.updateStatus !== "Successfully initiated") {
            this.error = true;
            this.responseMessage = "Please contact your developer by filling out a bug report form below. " +
                "Include the following message: " + response.updateStatus;
          }
          if (response.result) {
            this.responseMessage += (" " + response.result);
          }
        }).catch(err => {
      console.log(err);
      this.updateInProgress = false;
      this.responseMessage = "Error, please contact your developer by filling out a bug report form below. " +
          "Include the following message: " + err;
    });
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
}
</script>
