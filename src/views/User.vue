<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td colspan="2">Larry the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>
</template>
<style scoped>
table {
  width: 100%;
}
</style>
<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {},
  beforeMount() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      this.$axios
        .get("/users")
        .then((response) => console.log(response.data))
        .catch((e) => {
          console.log(e);
        });
      console.log(this.weaponsListView);
    },
  },
});
</script>
