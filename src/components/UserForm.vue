<template>
  <div>
    <div class="form-div">
    <form>
      <div class="form-line">
      <div class="input-div">
        <label for="nome">Nome</label>
        <input type="text" name="nome" placeholder="Digite o nome" v-model="nome"/>
      </div>
       <div class="input-div">
        <label for="email">E-mail</label>
        <input type="email" name="email" placeholder="me@example.com" v-model="email"/>
      </div>
      </div>
      <div class="form-line">
      <div class="input-div">
        <label>Setor</label>
        <select v-model="setor">
          <option v-for="s in setorList" :key="s">{{s}}</option>
        </select>
      </div>
       <div class="input-div">
        <label>Cargo</label>
        <select v-model="cargo">
          <option v-for="c in cargoList" :key="c">{{c}}</option>
        </select>
      </div>
      </div>
      <div class="input-div">
        <label>Função</label>
        <select v-model="funcao">
          <option v-for="f in funcaoList" :key="f">{{f}}</option>
        </select>
      </div>
    </form>
  </div>
    <Footer
    :text="'Salvar'"
    :onclick="() => console.log('vue')" />
  </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');

.form-line{
  display: flex;
  flex-direction: row;
} 
.input-div{
  display: flex;
  flex-direction: column;
}
label{
  margin-right: auto;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight:500;
}
.form-div{
  margin-top: 10%;
}
input[type=text], input[type=email], select {
  width: 100%;
  max-width: 350px;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  background: white;
}
</style>
<script>
import { defineComponent } from "@vue/composition-api";
import Footer from './Footer.vue';

export default defineComponent({
components:{ Footer },
setup() {},
  data(){
    return{
      data: [],
      nome: '',
      email: '',
      setor: '',
      cargo: '',
      funcao: '',
      setorList:[],
      cargoList: [],
      funcaoList: []
    }
  },
  beforeMount() {
    this.data = JSON.parse(localStorage.getItem("users"));
    console.log(this.data)
    this.setorList = this.data.map(d => d.department)
    this.cargoList = this.data.map(d => d.occupation)
    this.funcaoList = this.data.map(d => d.role)
  },
  methods: {
    saveUser() {
      console.log(this.data)
      this.data.push({
        
      })
    },
  },
});
</script>
