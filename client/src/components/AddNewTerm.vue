<template>
  <MainHeader/>

  <h2>Add Support for a New Term</h2>

  <div class="feature-box blue">
    <br>

    <p><strong>Currently supported terms/boards</strong></p>
    <ul v-if="boards">
      <li v-for="board in boards" :key="board.id">
        <a
            target="_blank"
            :href="'https://cidi-gang.monday.com/boards/' + board.id">{{ board.Name }}</a>
      </li>
    </ul>
    <p v-else>Loading...</p><br>

  </div>
  <div class="feature-box blue">
    <br>
    <form @submit.prevent="addNewBoard">
      <p><strong>Board ID</strong></p>
      <input type="text" id="board-id" name="board-id" class="form-control">
      <br>

      <p><strong>Term Name</strong></p>
      <input type="text" id="term-name" name="term-name" class="form-control">
      <input name="check" class="visually-hidden" tabIndex="-1" autoComplete="off">
      <br>

      <p><strong><a href="https://github.com/emmalynnnn/cidi-docs/blob/master/prep-board-for-qa.md">Trigger Column ID</a></strong></p>
      <input type="text" id="trigger-id" name="trigger-id" class="form-control">
      <br>

      <input type="checkbox" value="Checked" id="checked" name="set-up">
      <label for="set-up">&nbsp; I've read the documentation
        <a target="_blank"
           href="https://github.com/emmalynnnn/cidi-monday-QA-automation/blob/main/README.md#prepping-a-new-qa-board">
          here</a>
        and set up the board as described.</label>
      <br><br>

      <button type="submit" class="btn btn-light button">Add new term</button>
      <br><br>

      <p v-if="error" class="error-message">{{error}}</p>
      <p v-if="success">{{success}}</p>
    </form>

  </div>

  <br>
  <p>Something not working right?</p>
  <a class="btn btn-dark button" href="/bug-report">Fill out a bug report form</a>
</template>

<script>
/* eslint-disable */
import MainHeader from "./MainHeader.vue";
import {SERVER_URL} from '@/assets/constants.js';
export default {
  name: 'AddNewTerm',
  components: {
    MainHeader,
  },
  data() {
    return {
      boards: undefined,
      error: "",
      success: ""
    }
  },
  created() {
    this.refreshBoards();
  },
  methods: {
    addNewBoard() {
      this.error = "";

      let boardId = document.getElementById("board-id").value;
      let termName = document.getElementById("term-name").value;
      let triggerId = document.getElementById("trigger-id").value;
      let checked = document.getElementById("checked").checked;

      if (!checked || !boardId || !termName) {
        this.error = "All fields are required."
      } else {
        let inputData = {boardId: boardId, termName: termName, triggerId: triggerId};
        console.log(`Adding ${termName}:${boardId}`);

        this.postData(SERVER_URL + "add-new-term", inputData)
            .then(resp => {
              console.log(resp.body);
              if (resp.body.status === "success") {
                this.success = "Successfully added!"

                document.getElementById("board-id").value = "";
                document.getElementById("term-name").value = "";
                document.getElementById("trigger-id").value = "";
                document.getElementById("checked").checked = false;

                this.refreshBoards();
              } else {
                this.error = `Error: ${resp.body.status}`;
              }
            });
      }
    },
    refreshBoards() {
      fetch(SERVER_URL + "current-terms")
          .then(r => r.json())
          .then(resp => {
            this.boards = resp.body.boards;
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
