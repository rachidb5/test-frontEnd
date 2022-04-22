<template>
  <div>
      <table class="table">
        <TableHeader />
        <tbody>
          <TableLine
            v-for="u, i in usersList"
            :image="u.profile_image"
            :key="u.name"
            :nome="u.name"
            :email="u.email"
            :status="u.active"
            :funcao="u.role"
            :cargo="u.occupation"
            :setor="u.department"
            :userID="i"
          />
        </tbody>
      </table>
     <Footer
     :text="'Novo'"
     :onclick="createNewUser"
      />
  </div>
</template>
<style scoped>
.new-user-div{
  margin-right: 0;
  margin-left: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #F9FAFB;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

table{
  background: #E5E7EB;
}
tbody{
  background: white;
}
tr{
  padding: 0;
  margin: 0
}
table {
  border-collapse: collapse;
  background: #E5E7EB;
  width: 100%;
}
@media (max-width: 600px) {
  .table{
    display: none;
  }
}
</style>
<script>
import { defineComponent } from "@vue/composition-api";
import api from "@/config/constants";
import TableHeader from "@/components/TableHeader";
import TableLine from "@/components/TableLine";
import Footer from "../components/Footer.vue";

export default defineComponent({
  setup() {},
  components: { TableHeader, TableLine, Footer },
  data() {
    return {
      usersList: [],
    };
  },
  created() {
    this.getProducts();
  },
  methods: {
     createNewUser() {
      this.$router.push({ path: "/usuario" });
    },
    getProducts() {
      if (localStorage.getItem("users") && localStorage.getItem("firstaccessverifytoken")) {
        this.usersList = JSON.parse(localStorage.getItem("users"));
      }
      api
        .get("/users")
        .then((res) => {
          console.log(res.data[0].users);
          localStorage.setItem("users", JSON.stringify(res.data[0].users));
          this.usersList = JSON.parse(localStorage.getItem("users"));
          console.log(this.usersList);
           localStorage.setItem("firstaccessverifytoken", 'primeiro acesso já efetuado')
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
</script>