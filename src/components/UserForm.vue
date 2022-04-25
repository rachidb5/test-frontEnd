<template>
  <div>
    <div class="form-div">
      <form>
        <div class="form-line foto-div">
          <div class="input-div">
            <label for="nome">Foto</label>
            <div class="form-line foto-line">
              <img :src="imagem" v-if="imagem !== ''" />
              <button
                type="button"
                class="change-img"
                @click="
                  () => {
                    showImgInput = !showImgInput;
                  }
                "
              >
                Modificar
              </button>
              <input
                v-if="showImgInput"
                type="url"
                name="nome"
                v-model="imagem"
                placeholder="Digite o nome"
              />
            </div>
          </div>
        </div>
        <div class="form-line">
          <div class="input-div">
            <label for="nome">Nome</label>
            <input
              type="text"
              name="nome"
              placeholder="Digite o nome"
              v-model="nome"
            />
          </div>
          <div class="input-div">
            <label for="email">E-mail</label>
            <input
              type="email"
              name="email"
              placeholder="me@example.com"
              v-model="email"
            />
          </div>
        </div>
        <div class="form-line">
          <div class="input-div">
            <label>Setor</label>
            <select v-model="setor">
              <option v-for="s in setorList" :key="s">{{ s }}</option>
            </select>
          </div>
          <div class="input-div">
            <label>Cargo</label>
            <select v-model="cargo">
              <option v-for="c in cargoList" :key="c">{{ c }}</option>
            </select>
          </div>
        </div>
        <div class="form-line">
          <div class="input-div">
            <label>Função</label>
            <select v-model="funcao">
              <option v-for="f in funcaoList" :key="f">{{ f }}</option>
            </select>
          </div>
          <div class="input-div">
            <label class="switch">
              <input v-model="ativo" type="checkbox" />
              <span class="slider round"></span>
            </label>
          </div>
        </div>
        <div class="form-line foto-div">
          <div class="input-div">
            <button v-if="!newUser" @click="deleteUser" class="delete-user">
              Excluir Usuario
            </button>
          </div>
        </div>
      </form>
    </div>
    <Footer :text="textButton" :onclick="handleClick" />
  </div>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap");
button {
  max-height: 2.5rem;
}
.change-img {
  background: white;
  border: 1px solid #c4c4c4;
  border-radius: 4px;
}
.foto-div {
  justify-content: start !important;
  padding-bottom: 2rem;
  padding-left: 7%;
}
.foto-line {
  justify-content: start !important;
  padding-top: 1rem;
}
.delete-user {
  border: none;
  border-radius: 4px;
  background: #e42c17;
  color: white;
  font-size: 16px;
  padding: 0.5rem 0.8rem;
  margin-right: 5%;
  cursor: pointer;
  margin-top: 10%;
  max-width: 50%;
}
body {
  margin-top: 0;
}
.form-line {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.input-div {
  display: flex;
  flex-direction: column;
  width: 350px;
  justify-content: start;
}
img {
  width: 50px;
  height: 50px;
  border-radius: 100%;
  margin-right: 0.5rem;
}
label {
  margin-right: auto;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 500;
}
.form-div {
  margin-top: 10%;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
}
input[type="text"],
input[type="email"],
select {
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
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  margin-right: 100%;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #e42c17;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #71b969;
}

input:focus + .slider {
  box-shadow: 0 0 1px #71b969;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
@media (max-width: 800px) {
  .form-line {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .input-div {
    display: flex;
    flex-direction: column;
    width: 90%;
    justify-content: start;
  }
  .change-img {
    max-width: 80px;
  }
}
</style>
<script>
import { defineComponent } from "@vue/composition-api";
import Footer from "./Footer.vue";
import FormHeader from "./FormHeader.vue";

export default defineComponent({
  components: { Footer, FormHeader },
  props: {
    textButton: { type: String, required: true },
    newUser: { type: Boolean, required: true },
  },
  setup() {},
  data() {
    return {
      showImgInput: false,
      data: [],
      imagem: "",
      nome: "",
      email: "",
      setor: "",
      cargo: "",
      funcao: "",
      ativo: "",
      cpf: "1234567890",
      setorList: [],
      cargoList: [],
      funcaoList: [],
    };
  },
  beforeMount() {
    this.data = JSON.parse(localStorage.getItem("users"));
    console.log(this.data);
    this.setorList = this.data.map((d) => d.department);
    this.cargoList = this.data.map((d) => d.occupation);
    this.funcaoList = this.data.map((d) => d.role);
    this.getUserData();
  },
  methods: {
    getUserData() {
      let usersArray = JSON.parse(localStorage.getItem("users"));
      this.imagem = usersArray[this.$route.params.id].profile_image;
      this.funcao = usersArray[this.$route.params.id].role;
      this.email = usersArray[this.$route.params.id].email;
      this.cargo = usersArray[this.$route.params.id].occupation;
      this.setor = usersArray[this.$route.params.id].department;
      this.nome = usersArray[this.$route.params.id].name;
      usersArray[this.$route.params.id].active === 0
        ? (this.ativo = false)
        : (this.ativo = true);
    },
    notifySuccess(msg) {
      this.$toast.success(msg, {
        timeout: 5000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: true,
        closeButton: "button",
        icon: true,
        rtl: false,
      });
    },
    notifyFail(msg) {
      this.$toast.error(msg, {
        timeout: 5000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: true,
        closeButton: "button",
        icon: true,
        rtl: false,
      });
    },
    validation() {
      if (
        this.email.length < 1 ||
        this.nome.length < 1 ||
        this.setor.length < 1 ||
        this.cargo.length < 1 ||
        this.funcao.length < 1
      ) {
        this.notifyFail("Preencha todos os campos corretamente");
        return false;
      } else if (!this.email.includes(".") || !this.email.includes("@")) {
        this.notifyFail("Insira um email válido");
        return false;
      } else if (this.nome.length < 4) {
        this.notifyFail("Insira nome válido");
        return false;
      } else {
        return true;
      }
    },
    deleteUser() {
      let usersArray = JSON.parse(localStorage.getItem("users"));
      usersArray.splice(this.$route.params.id, 1);
      localStorage.setItem("users", JSON.stringify(usersArray));
      this.notifySuccess("Usuario apagado com sucesso");
      this.$router.push({ path: `/` });
    },
    handleClick() {
      if (!this.validation()) {
        return null;
      }
      let usersArray = JSON.parse(localStorage.getItem("users"));
      const arraySize = usersArray.length;
      let ativo = 0;

      this.ativo === true ? (ativo = 1) : (ativo = 0);
      const newUser = {
        active: ativo,
        cpf: this.cpf,
        email: this.email,
        department: this.setor,
        name: this.nome,
        occupation: this.cargo,
        profile_image: this.imagem,
        role: this.funcao,
      };
      console.log(this.$route.params.id);
      if (this.newUser) {
        usersArray = [...usersArray, newUser];
      } else {
        usersArray[this.$route.params.id] = newUser;
      }

      localStorage.setItem("users", JSON.stringify(usersArray));
      if (usersArray.length === arraySize) {
        this.notifySuccess("Usuário Atualizado Com Sucesso");
        this.$router.push({ path: `/` });
      }
      if (usersArray.length === arraySize + 1) {
        this.notifySuccess("Usuário Criado com sucesso");
        this.$router.push({ path: `/` });
      }
    },
  },
});
</script>
