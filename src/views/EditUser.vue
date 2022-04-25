<template>
  <div class="main-container">
    <FormHeader />
    <UserForm :textButton="'Salvar'" :newUser="false" />
  </div>
</template>
<style scoped>
.main-container {
  height: 100vh;
  margin-top: -1rem;
}
.new-user-div {
  margin-right: 0;
  margin-left: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #f9fafb;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

</style>
<script>
import { defineComponent } from "@vue/composition-api";
import UserForm from "../components/UserForm.vue";
import Footer from "../components/Footer.vue";
import FormHeader from '../components/FormHeader.vue'

export default defineComponent({
  components: { UserForm, Footer, FormHeader },
  setup() {},
  methods: {
    createNewUser() {
      this.$router.push({ path: "/usuario" });
    },
  },
});
</script>
