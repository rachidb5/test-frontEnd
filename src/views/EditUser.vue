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
