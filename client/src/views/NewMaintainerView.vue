<template>
  <Button class="back-button" text="Back" @goToLink="goBack" />
  <h1>Add Maintainer</h1>
  <br />

  <div>
    <form @submit.prevent="addUser">
      <div>
        <label>Name:</label>
        <input type="text" id="name" v-model="maintainer.name" required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" id="mondayID" v-model="maintainer.email" required />
      </div>
      <div>
        <label for="checkbox"
          >Primary Maintainer? (Note: setting this maintainer as the primary
          will replace the current primary maintainer)</label
        >
        <input type="checkbox" id="checkbox" v-model="maintainer.primary" />
      </div>
      <button class="submit-button" type="submit">Add Maintainer</button>

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
      maintainer: {
        name: "",
        email: "",
        primary: false,
      },
      message: "",
    };
  },

  methods: {
    goBack() {
      this.$router.push({ path: "/maintainers" });
    },

    async addUser() {
      console.log(
        `Adding new maintainer on server: ${JSON.stringify(this.maintainer)}`
      );

      const result = await postData(
        `${SERVER_URL}add-maintainer`,
        this.maintainer
      );
      console.log(result);

      if (result.result === "success") {
        this.message = "Added!";

        this.maintainer = {
          name: "",
          email: "",
          primary: false,
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
