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

        <!--<p>{{ link }}</p>-->
        <!--{% if status %}
            <p id="status-marker">{{ status }}</p>
        {% endif %}-->

    </div>
    <div class="feature-box blue">
        <br>

        <h3>2. Upload the Ally File</h3>

        <p>Unzip the Ally folder and upload the file called courses.csv here for processing.</p>
        <form method="POST" action="/processAllyFile" enctype="multipart/form-data">
            <input name="check" class="visually-hidden" tabindex="-1" autocomplete="off">
            <input type="file" id="allyFile" name="allyFile"/>
            <br><br>

            <button type="submit" class="btn btn-light button">Upload</button>
        </form>

        <!--{% if upload_err %}
            <p class="feature-box error-message">{{ upload_err }}</p>
        {% endif %}

        {% if upload_status %}
            <p class="feature-box drk-blue">{{ upload_status }}</p>
        {% endif %}-->

        <br>

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
export default {
  name: 'AddInfoComponent',
  emits: ["form-submitted"],
  methods:{
    getAllyLink(){
      let clientId = document.getElementById("ally-client-id").value;
      let consumKey = document.getElementById("ally-consum-key").value;
      let consumSec = document.getElementById("ally-consum-sec").value;
      let termCode = document.getElementById("term-code").value;

      fetch(`http://localhost:8000/?code=${code}&check=${check}`)
          .then( response => response.json() )
          .then( json => {
            console.log(json)
            let d = new Date();
            d.setTime(d.getTime() + 1 * 24 * 60 * 60 * 1000);
            let expires = "expires=" + d.toUTCString();

            document.cookie = "Token=" + json.cookie + ";" + expires + ";path=/"
            this.$router.push("/box-login");
          })
          .catch(err => {
            console.log(err);
          })
    }
  }
}
</script>