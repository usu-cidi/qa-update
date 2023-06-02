<template>
  <h1 className="error-message">IN DEVELOPMENT - version in active dev: 1.1.0 </h1>
  <div className="heading-box">
    <h1>QA Update Automation</h1>
    <p>Center for Instructional Design and Innovation - USU</p>
    <p>Created and maintained by Emma Lynn (a02391851@usu.edu)</p>
    <a href="https://github.com/emmalynnnn/cidi-monday-QA-automation">[Source]</a>
  </div>
  <div className="heading-box">
    <h1>Bug Reports</h1>
    <p>Center for Instructional Design and Innovation - USU</p>
    <p>Created and maintained by Emma Lynn (a02391851@usu.edu)</p>
    <a href="https://github.com/emmalynnnn/">[Source]</a>
  </div>

  <br>

  <div className="feature-box blue">
    <br>
    <h3>Report an Error</h3>
    <br>

    <form @submit.prevent="submitTheForm">
      <div className="form-group">
        <label htmlFor="app-name">Application</label>
        <select name="app-name" className="form-select" v-model.lazy.trim="appName">
          <option value=""></option>
          <option value="QA Update">QA Update</option>
        </select>

        <input name="check" className="visually-hidden" tabIndex="-1" autoComplete="off">

        <br>
        <label htmlFor="date-time">Date and approximate time the error occurred</label>
        <input type="text" name="date-time" className="form-control" v-model.lazy.trim="date">

        <br>
        <label htmlFor="expected-behavior">What did you expect to happen?</label>
        <input type="text" name="expected-behavior" className="form-control" v-model.lazy.trim="expected">

        <br>
        <label htmlFor="actual-behavior">What actually happened?</label>
        <input type="text" name="actual-behavior" className="form-control" v-model.lazy.trim="actual">

        <br>
        <label htmlFor="errors">Did you receive any error messages? When did they appear and what did they say?</label>
        <input type="text" name="errors" className="form-control" v-model.lazy.trim="errors">

        <br>
        <label htmlFor="browser">Web browser used</label>
        <input type="text" name="browser" className="form-control" v-model.lazy.trim="browser">

        <br>
        <label htmlFor="other-info">Any other relevant information</label>
        <input type="text" name="other-info" className="form-control" v-model.lazy.trim="otherInfo">

        <br>
        <label htmlFor="name">Your name (Optional, include if you would like me to get back to you with an
          update)</label>
        <input type="text" name="name" className="form-control" v-model.lazy.trim="submitterName">

        <br>
        <label htmlFor="email">Your email (Optional, include if you would like me to get back to you with an
          update)</label>
        <input type="email" name="email" className="form-control" v-model.lazy.trim="email">

        <br>
        <p>Thank you for your feedback.</p>

        <button type="submit" className="btn btn-light button">Submit</button>
        <br>
        <p v-if="submissionMessage">{{ su bmissionMessage }}</p>
      </div>

    </form>

  </div>
</template>

<script>
/* eslint-disable */
import Heading from './HeadingComponent.vue';

export default {
  name: 'BugReportComponent',
  data() {
    return {
      appName: "",
      date: "",
      expected: "",
      actual: "",
      errors: "",
      browser: "",
      otherInfo: "",
      submitterName: "",
      email: "",
      SERVER_URL: "https://oue0h093bk.execute-api.us-east-2.amazonaws.com/dev/",
      submissionMessage: "",
    }
  },
  methods: {
    submitTheForm() {
      this.submissionMessage = "Submission may take a moment, please wait to be redirected.";
      let inputData = {
        "app-name": this.appName, "date-time": this.date, "expected-behavior": this.expected,
        "actual-behavior": this.actual, "errors": this.errors, "browser": this.browser,
        "other-info": this.otherInfo, "name": this.submitterName, "email": this.email
      };
      this.postData(this.SERVER_URL + "send-bug-email", inputData)
          .then((data) => {
            console.log(data);
            this.$router.push({path: '/submitted'});
          });
    },
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
  }
}
</script>