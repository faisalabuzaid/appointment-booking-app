<template>
  <div class="container">
    <header class="jumbotron">
      <h3>
        <strong>{{currentUser.username}}</strong> Profile
      </h3>
    </header>
    <p>
      <strong>Token:</strong>
      <!-- {{currentUser.accessToken.substring(0, 20)}} ... {{currentUser.accessToken.substr(currentUser.accessToken.length - 20)}} -->
    </p>
    <p>
      <strong>Id:</strong>
      {{currentUser.id}}
    </p>
    <p>
      <strong>Email:</strong>
      {{currentUser.email}}
    </p>
    <strong>Authorities:</strong>
    <ul>
      <li v-for="role in currentUser.roles" :key="role">{{role}}</li>
    </ul>
    <button @click.prevent="logOut()">Logout</button>
  </div>
</template>

<script>import { computed } from "vue";


export default {
  name: 'Profile',
  computed: {
    currentUser() {
        console.log(this.$store.state.auth.user);
      return this.$store.state.auth.user;
    },
    logOut() {
        this.$store.dispatch('auth/logout')
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    }
  }
};
</script>