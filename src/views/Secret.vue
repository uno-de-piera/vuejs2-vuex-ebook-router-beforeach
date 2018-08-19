<template>
  <div class="secret">
    <h1>This is a secret page</h1>
    <h2>Bienvenido {{ $store.state.user.name }}</h2>
    <button @click="logout">Cerrar sesión</button>
  </div>
</template>

<script>
  export default {
      methods: {
          logout () {
              this.$store.commit('setUser', null)
              this.$router.push('/login')
          }
      }
  }
</script>
