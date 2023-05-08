<template>
  <div class="heading-box">
        <h1>QA Update Automation</h1>
        <p>Center for Instructional Design and Innovation - USU</p>
        <p>Created and maintained by Emma Lynn (a02391851@usu.edu)</p>
        <a href="https://github.com/emmalynnnn/cidi-monday-QA-automation">[Source]</a>
    </div>

    <br>

    <h2>Update the QA Board</h2>

    <div id="ally-box" class="feature-box blue">
        <br>
        <h3>1. Get the Ally Download Link</h3>
      <br>

        <form @submit.prevent="getAllyLink" >
            <h4>Ally Client ID</h4>
            <input type="text" id="ally-client-id" name="ally-client-id" class="form-control">
            <br>

            <h4>Ally Consumer Key</h4>
            <input type="text" id="ally-consum-key" name="ally-consum-key" class="form-control">
            <input name="check" class="visually-hidden" tabindex="-1" autocomplete="off">
            <br>

            <h4>Ally Consumer Secret</h4>
            <input type="text" id="ally-consum-sec" name="ally-consum-sec" class="form-control">
            <br>

            <h4>Term Code</h4>
            <input type="text" id="term-code" name="term-code" class="form-control">
            <br>

            <button type="submit" class="btn btn-light button">Get Link</button>
        </form>
        <br>
        <p>Note: it may take a few minutes for the link to be generated.</p>

      <p v-if="error1" class="error-message">{{ error1 }}</p>

        <a v-if="link" :href="link">Click here to download the Ally Accessibility report</a>
        <div v-if="linkLoading">
          <p>Loading...</p>
          <LoadingBar/>
        </div>

    </div>
    <div class="feature-box blue">
        <br>

        <h3>2. Upload the Ally File</h3>

        <p>Unzip the Ally folder you just downloaded and upload the file called courses.csv here for processing.</p>
        <!--<form @submit.prevent="processAllyFile" enctype="multipart/form-data">-->
        <!--<form @submit.prevent="processAllyFile">-->
      <form id="upload-form">
            <input name="check" class="visually-hidden" tabindex="-1" autocomplete="off">
            <input type="file" id="file-field" ref="file" name="files"/>
            <br><br>

            <button v-on:click="processAllyFile" class="btn btn-light button">Upload</button>
        <!--</form>-->
      </form>

      <br>

      <p v-if="error2" class="error-message">{{ error2 }}</p>
      <p v-if="uploadMessage">{{ uploadMessage }}</p>

    </div>

    <div class="feature-box blue">
        <br>
        <h3>3. Run the Update</h3>

        <form method="POST" action="/updating">
            <div class="form-group">
                <!--<label for="trigger-type">Update Type</label>-->
                <br><h4>Monday API Key</h4>
                <input type="text" name="mon-api-key" class="form-control">
                <br>

                <h4>Update Type</h4>
                <p>Select 'Update existing board' if you are updating a board that already exists (mid-semester).
            Select 'Fill in new board' if you are filling in a completely blank board at the beginning of a semester. </p>
                <select name="trigger-type" class="form-select">
                    <option value=""></option>
                    <option value="update">Update existing board</option>
                    <option value="new">Fill in new board</option>
                </select>

                <input name="check" class="visually-hidden" tabindex="-1" autocomplete="off">

                <br>
                <h4>Monday Board ID</h4>
                <p>Enter the <a href="https://support.monday.com/hc/en-us/articles/360000225709-Board-item-column-and-automation-or-integration-ID-s">
                    board id</a> for the monday.com board you're updating (found in the url).</p>
                <img class="url-ex" src="../assets/mon-ex.png" />
                <!--<label for="board-id">Board ID</label>-->
                <br>
                <input type="text" name="board-id" class="form-control">


                <br>
                <h4>Course Report File Box ID</h4>
                <p>Enter the <a href="https://developer.box.com/reference/get-files-id/#:~:text=The%20ID%20for%20any%20file,123%20the%20file_id%20is%20123%20.">
                    Box file ID</a> for the most recent Course Summary file from the Canvas Data Reports (found in the url).</p>
                <img class="url-ex" src="../assets/box-ex.png" />
                <!--<label for="cr-box-id">Course Report File Box ID</label>-->
                <br>
                <input type="text" name="cr-box-id" class="form-control">
            </div>

            <br>

            <p class="feature-box error-message">WARNING: Update process cannot be stopped once began!!</p>

            <div class="form-group">
                <button type="submit" class="btn btn-light button">Submit</button>
            </div>

            <br>
        </form>

    </div>

    <br>
    <p>Something not working right?</p>
    <a class="btn btn-dark button" href="/bug-report">Fill out a bug report form</a>
</template>

<script>
/* eslint-disable */
import LoadingBar from "./LoadingBar.vue";
export default {
  name: 'AddInfoComponent',
  emits: ["form-submitted"],
  components: {
    LoadingBar
  },
  data() {
    return {
      link: "",
      linkLoading: false,
      error1: "",
      error2: "",
      file: "",
      SERVER_URL: "http://localhost:8000/",
      uploadMessage: "",
      form: {
        method: '',
        icon: ''
      },
    }
  },
  methods: {
    processAllyFile: function(e) {
      console.log("Processing file")
      this.error2 = "";

      var formElement = document.querySelector('#upload-form'),
          fileElement = document.querySelector('#file-field'),
          request = new XMLHttpRequest(),
          data = new FormData(formElement);
      //data.append('files', fileElement.files);
      request.open('POST', 'http://localhost:8000/process-ally-file', true);
      request.send(data);
      // stop the event from propagating so route won't change
      e.preventDefault();
      e.stopPropagation();

      /*this.postData(this.SERVER_URL + "process-ally-file", formData, 'multipart/form-data', false).then((data) => {
        console.log(data);
        this.uploadMessage = data.message;
      });*/
    },
    getAllyLink(){
      this.error1 = "";

      let clientId = document.getElementById("ally-client-id").value;
      let consumKey = document.getElementById("ally-consum-key").value;
      let consumSec = document.getElementById("ally-consum-sec").value;
      let termCode = document.getElementById("term-code").value;

      if (!clientId || !consumKey || !consumSec || !termCode) {
        this.error1 = "All fields are required";
        return;
      }
      if (isNaN(clientId) || isNaN(termCode)) {
        this.error1 = "Invalid input";
        return;
      }

      console.log(clientId, consumSec, consumKey, termCode);

      this.linkLoading = true;

      let inputData = {clientId: clientId, consumKey: consumKey, consumSec: consumSec, termCode: termCode};
      this.postData(this.SERVER_URL + "get-ally-link", inputData).then((data) => {
        console.log(data);
        this.linkLoading = false;
        this.link = data.link;
      });
    },
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
  }
}
</script>