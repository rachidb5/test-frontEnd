<template>
  <div class="main">
    <h3>cadastrar novo usuario</h3>
    <RouterLink :to="{ path: '/' }">
      <h3>Voltar</h3>
    </RouterLink>
  </div>
</template>
<style scoped>
a {
text-decoration: none;
}
.main {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  background: #e5e7eb;
}

h3 {
  text-align: start;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  text-transform: uppercase;
  color: #6b7280;
  padding: 2rem;
}
</style>