<template>
  <section>
    <header>
      <h1>Requests Received</h1>
    </header>
    <main class="center">
      <ul v-if="allReceivedRequests.length > 0">
        <RequestList
          v-for="request in allReceivedRequests"
          :name="request.name"
          :email="request.email"
          :message="request.message"
          :key="request._id"
        />
      </ul>
      <h2 class="no-item" v-else>Your requests will appear here.</h2>
    </main>
  </section>
</template>

<script>
import RequestList from "../../components/Requests/RequestList.vue";
export default {
  name: "ReceivedRequests",
  components: { RequestList },
  computed: {
    allReceivedRequests() {
      return this.$store.getters["requests/getAllRequests"];
    },
  },
  methods: {
    loadRequests() {
      this.$store.dispatch("requests/fetchAllRequests");
    },
  },
  created() {
    this.loadRequests();
  },
};
</script>

<style scoped>
ul {
  width: 450px;
}

h1 {
  text-align: center;
  padding: 1rem 0;
  font-size: 2rem;
}
</style>
