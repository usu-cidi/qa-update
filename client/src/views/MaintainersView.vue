<template>
  <h1>Maintainers</h1>
  <Button class="maintainer-button" text="Home" @goToLink="leaveMaintainers" />

  <MaintainerList
    :maintainers="maintainers"
    :primaryMaintainer="primaryMaintainer"
    v-on:remove="removeMaintainer"
  />

  <Button class="add-button" text="Add New Maintainer" @goToLink="addNew" />
</template>

<script>
import Button from "../components/Button.vue";
import MaintainerList from "../components/MaintainerList.vue";
import { SERVER_URL, postData } from "../constants.js";

export default {
  components: {
    MaintainerList,
    Button,
  },

  data() {
    return {
      maintainers: [],
      primaryMaintainer: null,
    };
  },

  created() {
    this.refreshMaintainers();
  },

  methods: {
    leaveMaintainers() {
      this.$router.push({ path: "/" });
    },

    addNew() {
      this.$router.push({ path: "/maintainers/add" });
    },

    async removeMaintainer(item) {
      console.log(`Removing ${item.name} from the server & database`);

      const result = await postData(`${SERVER_URL}delete-maintainer`, item);
      console.log(result);

      if (result.result === "success") {
        await this.refreshMaintainers();
      } else {
        alert(`Deletion failed: ${result.result}`);
      }
    },

    async refreshMaintainers(newMaintainers = null) {
      if (newMaintainers) {
        this.maintainers = newMaintainers;
      } else {
        const resp = await fetch(`${SERVER_URL}get-maintainers`);
        const body = await resp.json();
        console.log(body);

        const respPrimary = await fetch(`${SERVER_URL}get-primary-maintainer`);
        const bodyPrimary = await respPrimary.json();
        console.log(bodyPrimary);

        this.primaryMaintainer = bodyPrimary;
        this.maintainers = body;
      }
    },
  },
};
</script>

<style>
.maintainer-button {
  position: fixed;
  top: 10px; /* Adjust the top distance as needed */
  left: 20px; /* Adjust the right distance as needed */
}

.add-button {
  position: fixed;
  top: 10px; /* Adjust the top distance as needed */
  right: 20px; /* Adjust the right distance as needed */
}
</style>
