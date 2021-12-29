<script setup>
import axios from 'axios';
import {ref} from 'vue';
import Header from '../components/header.vue';
import List from '../components/List.vue';

const data = async () => {
  const response = await axios.get('http://localhost:8000/appointment');
  return response.data;
};

</script>

<template>
<div class="w-full absolute top-0">
  <Header></Header>
  <List :data="data()"></List>
  <!-- <router-view /> -->


</div>
</template>
