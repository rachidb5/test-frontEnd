<template>
  <tr>
    <td>
      <div class="row">
        <img :src="image" />
        <div class="col">
          <h3>
            {{ nome }}
          </h3>
          <h5>{{ email }}</h5>
        </div>
      </div>
    </td>
    <td>
      <div class="col">
      <h3>
        {{ cargo }}
      </h3>
      <h5>{{ setor }}</h5>
      </div>
    </td>
    <td>
      <div class="activity">
        <div :class="activityClass">         
          {{ activityStatus }}
        </div>
      </div>
    </td>
    <td>
      {{ funcao }}
      </td>
    <td>
      <edit-button 
      :userIndex="userID"/>
    </td>
  </tr>
</template>
<script>
import { defineComponent } from "@vue/composition-api";
import EditButton from './EditButton.vue'

export default defineComponent({
  props: {
    image: { type: String, required: false },
    nome: { type: String, required: false },
    email: { type: String, required: false },
    cargo: { type: String, required: false },
    setor: { type: String, required: false },
    status: { type: Number, required: false },
    funcao: { type: String, required: false },
    userID: {type: String, required: true}
  },
    components: { EditButton },
  data() {
    return {
      activityStatus: "",
      activityClass: ""
    };
  },
  mounted() {
    this.checkActivity()
  },
  setup() {},
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
.col{
  display: flex;
  flex-direction: column;
}
.row{
  display: flex;
  flex-direction: row;
}
h3{
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #111827;
}
h5{
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #6B7280;
}

h3, h5{
  margin: 0 !important;
  text-align: start;
}

td{
  width: 15%;
  font-family: 'Roboto';  
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #6B7280;
  padding: 2rem 0 2rem 1.5rem;
  border-bottom: 1px solid #E5E7EB;
}
</style>
