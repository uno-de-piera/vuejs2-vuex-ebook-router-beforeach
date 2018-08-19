<template>
  <div class="login">
    <h1>Login Form</h1>
    <button @click="login">Iniciar sesión</button>
  </div>
</template>

<script>

    export default {
        name: 'home',
        methods: {
            login () {
                this.$store.commit('setUser', {
                    id: 1, name: 'Israel Parra'
                })
                this.$router.push('/secret')
            }
        }
    }
</script>
