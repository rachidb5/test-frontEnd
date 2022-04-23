<template>
  <div class="main-container">
    <table class="table">
      <TableHeader />
      <tbody>
        <TableLine
          v-for="(u, i) in usersList"
          :image="u.profile_image"
          :key="u.name"
          :nome="u.name"
          :email="u.email"
          :status="u.active"
          :funcao="u.role"
          :cargo="u.occupation"
          :setor="u.department"
          :userID="i.toString()"
        />
      </tbody>
    </table>
    <div class="responsive-table">
      <h1 class="title">Usuários</h1>
      <responsive-table-card
        v-for="(u, i) in usersList"
        :key="u.name"
        :image="u.profile_image"
        :nome="u.name"
        :email="u.email"
        :cargo="u.occupation"
        :setor="u.department"
        :status="u.active"
        :funcao="u.role"
        :userID="i.toString()"
      />
    </div>
    <Footer :text="'Novo'" :onclick="createNewUser" />
  </div>
</template>
<style scoped>
.title {
  text-align: left;
  margin-left: 5%;
}
.main-container {
  height: 100vh;
}
.new-user-div {
  margin-right: 0;
  margin-left: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #f9fafb;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

table {
  background: #e5e7eb;
}
tbody {
  background: white;
}
tr {
  padding: 0;
  margin: 0;
}
table {
  border-collapse: collapse;
  background: #e5e7eb;
  width: 100%;
}
@media (min-width: 600px) {
  .responsive-table {
    display: none;
  }
}
@media (max-width: 600px) {
  .table {
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
import ResponsiveTableCard from "../components/ResponsiveTableCard.vue";

export default defineComponent({
  setup() {},
  components: { TableHeader, TableLine, Footer, ResponsiveTableCard },
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
      if (
        localStorage.getItem("users") &&
        localStorage.getItem("firstaccessverifytoken")
      ) {
        this.usersList = JSON.parse(localStorage.getItem("users"));
      }
      api
        .get("/users")
        .then((res) => {
          console.log(res.data[0].users);
          localStorage.setItem("users", JSON.stringify(res.data[0].users));
          this.usersList = JSON.parse(localStorage.getItem("users"));
          console.log(this.usersList);
          localStorage.setItem(
            "firstaccessverifytoken",
            "primeiro acesso já efetuado"
          );
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
</script>