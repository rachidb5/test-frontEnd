<template>
  <div class="responsive-main">
    <button type="button" @click="isOpen = !isOpen">
      <div class="title">
        <h2>{{ nome }}</h2>
        <ChevronDown v-if="!isOpen" />
        <ChevronUp v-if="isOpen" />
      </div>
    </button>
    <div v-if="isOpen">
      <div>
        <div>
          <h3>Nome</h3>
          <h4>{{ nome }}</h4>
        </div>
        <div>
          <h3>Email</h3>
          <h4>{{ email }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.responsive-main {
  width: 100%;
}
button {
  background: none;
  border: none;
  cursor: pointer;
  width: 100%;
}
.title {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10% 0 10%;
}
@media (min-width: 600px) {
  .tresponsive-main {
    display: none;
  }
}
</style>
<script>
import { defineComponent } from "@vue/composition-api";
import ChevronDown from "vue-material-design-icons/ChevronDown.vue";
import ChevronUp from "vue-material-design-icons/ChevronUp.vue";

export default defineComponent({
  setup() {},
  components: {
    ChevronDown,
    ChevronUp,
  },
  props: {
    image: { type: String, required: false },
    nome: { type: String, required: false },
    email: { type: String, required: false },
    cargo: { type: String, required: false },
    setor: { type: String, required: false },
    status: { type: Number, required: false },
    funcao: { type: String, required: false },
    userID: { type: String, required: true },
  },
  data() {
    return {
      isOpen: false,
    };
  },
});
</script>
