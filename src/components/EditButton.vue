<template>
    <button type="button" @click="editUser(userIndex)">Editar</button>    
</template>
<style scoped>
button{
    background: none;
    border: none;
    color: #4F46E5;
    cursor: pointer;
}
button:hover{
    color: #2E26BD;
}

</style>
<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    props:{
        userIndex: { type: String, required: true },
    },
    setup() {
        
    },
    methods:{
    editUser(i) {
      this.$router.push({ path: `/usuario/${i}` });
    },
    }
})
</script>
