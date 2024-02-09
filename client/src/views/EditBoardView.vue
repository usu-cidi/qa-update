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
        <input type="text" id="mondayID" v-model="board.mondayID" required />
      </div>
      <div>
        <label>Update Column ID:</label>
        <input type="text" id="updateCol" v-model="board.updateColID" required />
      </div>
      <div>
        <label>Ally Semester ID:</label>
        <input type="text" id="allyID" v-model="board.allyID" required />
      </div>
      <button class="submit-button" type="submit">Update Board</button>

      <p>{{message}}</p>
    </form>
  </div>


</template>


<script>

import Button from "@/components/Button.vue";

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
        allyID: ''
      },
      message: '',
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
    };
  },

  methods: {

    goBack() {
      this.$router.push({path: '/'});
    },

    addUser() {
      console.log(`Updating board on server: ${JSON.stringify(this.board)}`);
      this.message = "Updated!"
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

/* Style the submit button on hover */
.submit-button:hover {
  background-color: #267bb5;
}

</style>
