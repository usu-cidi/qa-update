<template>
  <MainHeader/>

  <h2>Update the QA Board</h2>

  <div class="feature-box blue">
    <br>

    <form @submit.prevent="runUpdate">
      <div class="form-group">
        <h4>monday.com API Key</h4>
        <p>Enter your <a href="https://support.monday.com/hc/en-us/articles/360005144659-Does-monday-com-have-an-API-">API key for monday.com</a>.</p>
        <input type="text" id="mon-api-key" name="mon-api-key" class="form-control">
        <br>

        <h4>Update Type</h4>
        <p>Select 'Update existing board' if you are updating a board that already exists (mid-semester).
          Select 'Fill in new board' if you are filling in a completely blank board at the beginning of a semester. </p>
        <select name="trigger-type" id="trigger-type" class="form-select">
          <option value=""></option>
          <option value="update">Update existing board</option>
          <option value="new">Fill in new board</option>
        </select>

        <input name="check" class="visually-hidden" tabIndex="-1" autoComplete="off">

        <br>
        <h4>monday.com Board ID</h4>
        <p>Select the <a
            href="https://support.monday.com/hc/en-us/articles/360000225709-Board-item-column-and-automation-or-integration-ID-s">
          board id</a> (found in the url) for the monday.com board you're updating.</p>
        <img class="url-ex" src="../assets/mon-ex.png" alt="Example of getting a monday board id from the url."/>
        <br>
        <select name="board-id" id="board-id" class="form-select">
          <option value=""></option>
          <option v-for="board in boards" :value="board.id" :key="board.id">{{ board.Name }}: {{ board.id }}</option>
        </select>

        <br>
        <h4>Course Report File Box ID</h4>
        <p>Enter the <a
            href="https://developer.box.com/reference/get-files-id/#:~:text=The%20ID%20for%20any%20file,123%20the%20file_id%20is%20123%20.">
          Box file ID</a> for the most recent Course Summary file from the Canvas Data Reports (found in the url).</p>
        <img class="url-ex" src="../assets/box-ex.png" alt="Example of getting a box file id from the url."/>
        <br>
        <input type="text" name="cr-box-id" id="cr-box-id" class="form-control">

        <br>
        <h4>Your Email</h4>
        <p>A report will be sent to this email once the update is complete.</p>
        <input type="text" name="email" id="email" class="form-control">
      </div>

      <br>

      <p class="feature-box error-message">WARNING: Update process cannot be stopped once began!!</p>

      <div class="form-group">
        <button type="submit" class="btn btn-light button">Submit</button>
      </div>

      <p v-if="error" class="error-message">{{ error }}</p>

      <br>
    </form>

  </div>

  <BugFooter/>
</template>

<script>
/* eslint-disable */
import MainHeader from "./MainHeader.vue";
import BugFooter from "./BugFooter.vue";
import {SERVER_URL} from '@/assets/constants.js';
export default {
  name: 'AddInfoComponent',
  emits: ["form-submitted"],
  components: {
    MainHeader,
    BugFooter,
  },
  data() {
    return {
      error: "",
      file: "",
      boards: [],
    }
  },
  created() {
    fetch(SERVER_URL + "current-terms")
        .then(r => r.json())
        .then(resp => {
          this.boards = resp.body.boards;
        });
  },
  methods: {

    runUpdate() {
      this.error = "";

      let boxAccess = this.$route.query.boxAccess;
      let boxRefresh = this.$route.query.boxRefresh;
      let interID = this.$route.query.interID;
      let monAPIKey = document.getElementById("mon-api-key").value;
      let updateType = document.getElementById("trigger-type").value;
      let monBoardId = document.getElementById("board-id").value;
      let crBoxId = document.getElementById("cr-box-id").value;
      let email = document.getElementById("email").value;

      if (!monAPIKey || !updateType || !monBoardId || !crBoxId || !email) {
        this.error = "All fields are required";
        return;
      }
      if ((updateType !== "update") && (updateType !== "new")) {
        this.error = "Stop messing with my dev tools :(";
        return;
      }

      console.log(monAPIKey, updateType, monBoardId, crBoxId);
      let params = {
        monAPIKey: monAPIKey,
        updateType: updateType,
        monBoardId: monBoardId,
        crBoxId: crBoxId,
        email: email,
        boxAccess: boxAccess,
        boxRefresh: boxRefresh,
        interID: interID,
      }

      this.$router.push({path: '/updating', query: params})
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