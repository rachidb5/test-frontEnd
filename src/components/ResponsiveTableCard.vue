<template>
  <div class="responsive-main">
    <button type="button" @click="isOpen = !isOpen">
      <div class="title">
        <img :src="image" />
        <h2>{{ nome }}</h2>
        <ChevronDown v-if="!isOpen" />
        <ChevronUp v-if="isOpen" />
      </div>
    </button>
    <div class="column" v-if="isOpen">
      <div class="row">
        <div class="row">
          <h4>NOME: {{nome}}</h4>
        </div>
        <div class="row">
          <h4>EMAIL: {{ email }} </h4>
        </div>
      </div>
      <div class="row">
        <div class="row">
          <h4>CARGO: {{ cargo }}</h4>
        </div>
        <div class="row">
          <h4>SETOR: {{ setor }}</h4>
        </div>
      </div>
      <div class="row">
        <div class="row">
          <h4>FUNÇÂO: {{ funcao }}</h4>
        </div>
        <div class="row">
          <div class="activity">
            <div :class="activityClass">         
              {{ activityStatus }}
            </div>
          </div>
        </div>
        <div class="row">
        <edit-button :userIndex="userID"/>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.isactive{
  background: #D1FAE5;
  color: #065F46;
  font-size: 14px;
  padding-top: .3rem;
  padding-bottom: .3rem;
}
.notactive{
  background: #FFE2E3;
  color: #991B1B;
  font-size: 14px;
  padding-top: .3rem;
  padding-bottom: .3rem;
}
.activity{
  margin-left: auto;
  margin-right: auto;
  vertical-align: middle;
}
.isactive, .notactive{
  border-radius:4px ;
  width: 3.5rem;
  height: 1rem;
  vertical-align: middle;
  margin-left: auto;
  margin-right: auto;
}
img {
  width: 40px;
  height: 40px;
  border-radius: 100%;
  margin-right: .5rem;
}
.row{
  padding: 0 5% 0 5%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
}
.column{
  display: flex;
  flex-direction: column;
}
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
import EditButton from './EditButton.vue'


export default defineComponent({
  setup() {},
  components: {
    EditButton,
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
      activityStatus: "",
      activityClass: ""
    };
  },
  mounted() {
    this.checkActivity()
  },
  methods: {
    checkActivity() {
      if(this.status === 1){
        this.activityClass = 'isactive'
        this.activityStatus = "Ativo"
      } else {
        this.activityClass = 'notactive'
        this.activityStatus = "Inativo"
      }
    }
  }
});
</script>
