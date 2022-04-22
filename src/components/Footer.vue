<template>
     <div class="new-user-div">
        <div></div>
        <button type="button" @click="onclick">{{ text }}</button>   
      </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {},
  props:{
    text: { type: String, required: true },
    onclick: { type: Function, required: true }
  }
})
</script>

<style scoped>
button{
    border: none;
    border-radius: 4px;
    background: #4F46E5;
    color: white;
    font-size: 16px;
    padding: .5rem .8rem;
    margin-right: 5%;
    cursor: pointer;
}
button:hover{
    background: #2E26BD;
}
</style>
