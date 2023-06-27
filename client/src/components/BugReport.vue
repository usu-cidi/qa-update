<template>
  <BugHeader/>

  <div class="feature-box orange">
    <h3>Report an Error</h3>
    <br>

    <form @submit.prevent="submitTheForm">
      <div class="form-group">
        <label for="app-name">Application</label>
        <select name="app-name" class="form-select" v-model.lazy.trim="appName">
          <option value=""></option>
          <option value="QA Update">QA Update</option>
          <option value="YCCT">YCCT</option>
        </select>

        <input name="check" class="visually-hidden" tabIndex="-1" autoComplete="off">

        <br>
        <label for="date-time">Date and approximate time the error occurred</label>
        <input type="text" name="date-time" class="form-control" v-model.lazy.trim="date">

        <br>
        <label for="expected-behavior">What did you expect to happen?</label>
        <input type="text" name="expected-behavior" class="form-control" v-model.lazy.trim="expected">

        <br>
        <label for="actual-behavior">What actually happened?</label>
        <input type="text" name="actual-behavior" class="form-control" v-model.lazy.trim="actual">

        <br>
        <label for="errors">Did you receive any error messages? When did they appear and what did they say?</label>
        <input type="text" name="errors" class="form-control" v-model.lazy.trim="errors">

        <br>
        <label for="browser">Web browser used</label>
        <input type="text" name="browser" class="form-control" v-model.lazy.trim="browser">

        <br>
        <label for="other-info">Any other relevant information</label>
        <input type="text" name="other-info" class="form-control" v-model.lazy.trim="otherInfo">

        <br>
        <label for="name">Your name (Optional, include if you would like me to get back to you with an
          update)</label>
        <input type="text" name="name" class="form-control" v-model.lazy.trim="submitterName">

        <br>
        <label for="email">Your email (Optional, include if you would like me to get back to you with an
          update)</label>
        <input type="email" name="email" class="form-control" v-model.lazy.trim="email">

        <br>
        <p>Thank you for your feedback.</p>

        <button type="submit" class="btn btn-light button">Submit</button><br>
        <br>
        <p v-if="submissionMessage">{{ submissionMessage }}</p>
      </div>

    </form>

  </div>
</template>

<script>
/* eslint-disable */
import BugHeader from "@/components/BugHeader.vue";
import {SERVER_URL} from '@/assets/constants.js';
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
      submissionMessage: "",
    }
  },
  components: {
    BugHeader,
  },
  methods: {
    submitTheForm() {
      this.submissionMessage = "Submission may take a moment, please wait to be redirected.";
      let inputData = {
        "app-name": this.appName, "date-time": this.date, "expected-behavior": this.expected,
        "actual-behavior": this.actual, "errors": this.errors, "browser": this.browser,
        "other-info": this.otherInfo, "name": this.submitterName, "email": this.email
      };
      this.postData(SERVER_URL + "send-bug-email", inputData)
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

<style>
.orange {
  border-color: #fa8520;
  background: #EA906C;
}
</style>
