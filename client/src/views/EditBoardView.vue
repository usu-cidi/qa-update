<template>
  <Button class="back-button" text="Home" @goToLink="goBack" />
  <h1>Edit Board</h1>
  <br/>

  <div>
    <form @submit.prevent="addUser">

      <div>
        <label>Board Name:</label>
        <input type="text" id="name" v-model="board.name" required />
      </div>
      <div>
        <label>Monday.com ID:</label>
        <input type="text" id="mondayID" v-model="board.mondayID" disabled />
      </div>
      <div>
        <label>Update Column ID:</label>
        <input type="text" id="updateCol" v-model="board.updateColID" required />
      </div>
      <div>
        <label>Ally Semester ID:</label>
        <input type="text" id="allyID" v-model="board.allyID" required />
      </div>
      <div>
        <label>End Date (optional):</label>
        <input type="text" id="allyID" v-model="board.endDate" />
      </div>
      <button class="submit-button" type="submit">Update Board</button>

      <p>{{message}}</p>
    </form>

    <div class="right">
      <button class="delete-button" @click="deleteBoard">Delete Board</button>
      <p>{{deleteMessage}}</p>
    </div>

  </div>


</template>


<script>

import Button from "@/components/Button.vue";
import {SERVER_URL} from "@/constants.js";

export default {

  components: {
    Button,
  },

  data() {
    return {
      board: {
        name: '',
        mondayID: '',
        updateColID: '',
        allyID: '',
        endDate: '',
      },
      message: '',
      deleteMessage: '',
    };
  },

  created() {
    const item = JSON.parse(this.$route.query.item);
    console.log(item);
    this.board = {
      name: item.name,
      mondayID: item.mondayId,
      updateColID: item.updateColId,
      allyID: item.allySemId,
      endDate: item.endDate,
    };
  },

  methods: {

    goBack() {
      this.$router.push({path: '/'});
    },

    async addUser() {
      console.log(`Updating board on server: ${JSON.stringify(this.board)}`);

      const result = await this.postData(`${SERVER_URL}edit-board`, this.board);
      console.log(result);

      if (result.result === 'success') {
        this.message = "Updated!"
      } else {
        this.message = `Failed: ${JSON.stringify(result.result)}`;
      }
    },

    async deleteBoard() {

      if (confirm(`Are you sure you want to delete ${this.board.name}? All data will be lost and all future updates will be cancelled.`)) {
        console.log(`Deleting board on server: ${JSON.stringify(this.board)}`);

        const result = await this.postData(`${SERVER_URL}delete-board`, this.board);
        console.log(result);

        if (result.result === 'success') {
          this.deleteMessage = "Deleted!"
          this.board = {
            name: '',
            mondayID: '',
            updateColID: '',
            allyID: '',
            endDate: '',
          };
        } else {
          this.deleteMessage = `Failed: ${JSON.stringify(result.result)}`;
        }
      }

    },

    async postData(url, data, contentType="application/json") {
      return fetch(url, {
        method: "POST",
        cache: "no-cache",
        credentials: "same-origin",
        connection: "keep-alive",
        headers: {
          Accept: 'application.json',
          "Content-Type": contentType,
        },
        body: JSON.stringify(data)
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
    },

  }
}
</script>


<style scoped>

.back-button {
  position: fixed;
  top: 10px; /* Adjust the top distance as needed */
  left: 20px; /* Adjust the right distance as needed */
}

form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 8px;
}

/* Style form labels */
label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
}

/* Style form inputs */
input {
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

/* Style the submit button */
.submit-button {
  background-color: #3498db;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.delete-button {
  background-color: darkred;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.right {
  right: 30px;
  position: absolute;
}

/* Style the submit button on hover */
.submit-button:hover {
  background-color: #267bb5;
}

</style>
