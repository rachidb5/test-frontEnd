<template>
  <div>
    <UserForm 
    :textButton="'Salvar'"/>
  </div>
</template>
<style scoped>
</style>
<script>
import { defineComponent } from "@vue/composition-api";
import UserForm from "../components/UserForm.vue";
import Footer from '../components/Footer.vue'

export default defineComponent({
  components: { UserForm, Footer },
  setup() {},
  methods: {
    createNewUser() {
      this.$router.push({ path: "/usuario" });
    }
  }
});
</script>
