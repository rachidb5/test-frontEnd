<template>
  <div>
    <div>
      <table class="table">
        <TableHeader />
        <tbody>
          <TableLine
            v-for="u in usersList"
            :image="u.profile_image"
            :key="u.name"
            :nome="u.name"
            :email="u.email"
            :status="u.active"
            :funcao="u.role"
            :cargo="u.occupation"
            :setor="u.department"
          />
          <!--tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr-->
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "@vue/composition-api";
import api from "@/config/constants";
import TableHeader from "@/components/TableHeader";
import TableLine from "@/components/TableLine";
export default defineComponent({
  setup() {},
  components: { TableHeader, TableLine },
  data() {
    return {
      usersList: [],
    };
  },
  created() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      api
        .get("/users")
        .then((res) => {
          console.log(res.data[0].users);
          localStorage.setItem("users", JSON.stringify(res.data[0].users));
          this.usersList = JSON.parse(localStorage.getItem("users"));
          console.log(this.usersList);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
</script>