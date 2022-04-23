<template>
    <div class="responsive-main">
        <div class="title">
            <h2>{{nome}}</h2>
            <MdiChevronDown v-if="!isOpen"/>
        </div>
        <div v-if="isOpen">

        </div>
    </div>
</template>
<style scoped>
.responsive-main{
    width: 100%;
}
@media (min-width: 600px) {
  .tresponsive-main{
    display: none;
  }
}
</style>
<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {},
    props:{
        nome: { type: String, required: true}
    },
    data() {
        return{
            isOpen: false
        }
    },
})
</script>
