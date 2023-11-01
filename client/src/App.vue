<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #3786bd;
}

body,
html {
  height: 100%;
  padding: 0;
  margin: 0;
  background: linear-gradient(105deg, #88beee, #0a2e73);
}

.form-label {
  font-size: 20px;
}
</style>
