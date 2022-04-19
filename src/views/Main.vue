<template>
  <div>
    <div>
      <table class="table">
        <TableHeader />
        <tbody>
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
import TableHeader from '@/components/TableHeader';

export default defineComponent({
  setup() {},
  components: { TableHeader },
  data(){
      return{
          usersList: []
      }
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
          this.usersList = res.data[0].users;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
</script>