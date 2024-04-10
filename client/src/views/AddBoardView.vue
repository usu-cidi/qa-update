<template>
  <Button class="back-button" text="Home" @goToLink="goBack" />
  <h1>Add Board</h1>
  <br />

  <div>
    <form @submit.prevent="addUser">
      <div>
        <label>Board Name:</label>
        <input type="text" id="name" v-model="board.name" required />
      </div>
      <div>
        <label>Monday.com ID:</label>
        <input type="text" id="mondayID" v-model="board.mondayID" required />
      </div>
      <div>
        <label>Last Updated Column ID:</label>
        <input
          type="text"
          id="updateCol"
          v-model="board.updateColID"
          required
        />
      </div>
      <div>
        <label>Ally Semester ID:</label>
        <input type="text" id="allyID" v-model="board.allyID" required />
      </div>
      <div>
        <label>End Date (optional):</label>
        <input type="text" id="allyID" v-model="board.endDate" />
      </div>
      <button class="submit-button" type="submit">Add Board</button>

      <p>{{ message }}</p>
    </form>
  </div>
</template>

<script>
import Button from "../components/Button.vue";
import { SERVER_URL, postData } from "../constants.js";

export default {
  components: {
    Button,
  },

  data() {
    return {
      board: {
        name: "",
        mondayID: "",
        updateColID: "",
        allyID: "",
        endDate: "",
      },
      message: "",
    };
  },

  methods: {
    goBack() {
      this.$router.push({ path: "/" });
    },

    async addUser() {
      console.log(`Adding new board to server: ${JSON.stringify(this.board)}`);

      const result = await postData(`${SERVER_URL}add-board`, this.board);
      console.log(result);

      if (result.result === "success") {
        this.message = "Added!";

        this.board = {
          name: "",
          mondayID: "",
          updateColID: "",
          allyID: "",
          endDate: "",
        };
      } else {
        this.message = `Failed: ${JSON.stringify(result.result)}`;
      }
    },
  },
};
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

/* Style the submit button on hover */
.submit-button:hover {
  background-color: #267bb5;
}
</style>
