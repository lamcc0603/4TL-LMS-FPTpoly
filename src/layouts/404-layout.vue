<template>
  <div class="notfound">
    <p>404 not found</p>
    <router-link to="/home" class="btn btn-back">Back</router-link>
  </div>
</template>
<style scoped>
.notfound {
  color: var(--fds-gray-45);
  text-align: center;
}
.notfound p {
  text-transform: uppercase;
  padding-top: 400px;
}

.notfound a {
  margin-top: 20px;
}
</style>
