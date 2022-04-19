<template>
  <tr>
    <td>{{ nome }}</td>
    <td>{{ cargo}}</td>
    <td>{{ status }}</td>
    <td>{{ funcao }}</td>
    <td>
      <button>Editar</button>
    </td>
  </tr>
</template>
<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
   props: {
    nome: { type: String, required: false },
    cargo: { type: String, required: false },
    status: { type: String, required: false },
    funcao: { type: String, required: false },
  },
  setup() {
    
  },
})
</script>
