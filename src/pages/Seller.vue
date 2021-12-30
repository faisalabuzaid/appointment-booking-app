<script setup>
import {ref} from 'vue';
import Header from '../components/header.vue';
import Detail from '../components/detail.vue';

// const sellers = reactive([]);

// const getSellers = async () => {
//   await axios.get('https://enigmatic-stream-54061.herokuapp.com/users/users')
//   .then((res) => {
//     sellers.value = res.data;
//   });
// }
// getSellers();
// const test = () => {
//   console.log($router);
// }
// test()

</script>

<template>
<div class="w-full absolute top-0">
  <Header></Header>
  <Detail :id="$route.params.id"></Detail>
</div>
</template>
