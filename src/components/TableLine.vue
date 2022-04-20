<template>
  <tr>
    <td>
      <img :src="image" />
    </td>
    <td>
      <h3>
        {{ nome }}
      </h3>
      <h5>{{ email }}</h5>
    </td>
    <td>
      <h3>
        {{ cargo }}
      </h3>
      <h5>{{ setor }}</h5>
    </td>
    <td>{{ activityStatus }}</td>
    <td>{{ funcao }}</td>
    <td>
      <button>Editar</button>
    </td>
  </tr>
</template>
<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  props: {
    image: { type: String, required: false },
    nome: { type: String, required: false },
    email: { type: String, required: false },
    cargo: { type: String, required: false },
    setor: { type: String, required: false },
    status: { type: String, required: false },
    funcao: { type: String, required: false },
  },
  data() {
    return {
      activityStatus: "",
    };
  },
  mounted() {
    this.status === 1
      ? (this.activityStatus = "Active")
      : (this.activityStatus = "Inactive");
  },
  setup() {},
});
</script>
<style scoped>
img {
  width: 40px;
  height: 40px;
  border-radius: 100%;
}
</style>
