<template>
  <h1>Maintainers</h1>
  <Button class="maintainer-button" text="Home" @goToLink="leaveMaintainers" />

  <MaintainerList maintainers="maintainers"/>

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

  async created() {
    this.refreshBoards();
  },

  methods: {
    leaveMaintainers() {
      this.$router.push({path: '/'});
    },

    async refreshBoards(newMaintainers=null) {
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

</style>
