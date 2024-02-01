<template>
  <h1>Maintainers</h1>
  <Button class="maintainer-button" text="Home" @goToLink="leaveMaintainers" />

  <MaintainerList :maintainers="maintainers"/>

  <Button class="add-button" text="Add New Maintainer" @goToLink="addNew" />

</template>


<script>
import Button from "@/components/Button.vue";
import MaintainerList from "@/components/MaintainerList.vue";
import {SERVER_URL} from "@/constants.js";

export default {

  components: {
    MaintainerList,
    Button,
  },

  data() {
    return {
      maintainers: [],
    }
  },

  created() {
    this.refreshMaintainers();
  },

  methods: {
    leaveMaintainers() {
      this.$router.push({path: '/'});
    },

    addNew() {
      this.$router.push({path: '/maintainers/add'});
    },

    async refreshMaintainers(newMaintainers=null) {
      if (newMaintainers) {
        this.maintainers = newMaintainers;
      } else {
        const resp = await fetch(`${SERVER_URL}get-maintainers`);
        const body = await resp.json();
        this.maintainers = body;
      }
    },

  }
}
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
