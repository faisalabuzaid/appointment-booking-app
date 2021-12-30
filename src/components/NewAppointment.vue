<template>
  <div class="bg-white shadow sm:rounded-lg">
    <div class="px-4 py-5 sm:p-6">
      <h3 class="text-lg leading-6 font-medium text-gray-900">
        Book new appointment
      </h3>
      
  <form @submit.prevent="handleNewAppointment()">
        <label for="password" class="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div class="md:flex md:justify-center m-2">
                <input type="date" id="start" name="trip-start"
                    v-model="appointmentDate"
                    min="2022-01-01">
            </div>
        <button type="submit" class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500">
          Save
        </button>
      </form>
    </div>
  </div>
</template>
<script setup>

import axios from "axios";
import { ref } from "vue"
const props = defineProps({
    sellerId: {
        type: String,
        default: "",
    },
});

const appointmentDate = ref(Date);
const handleNewAppointment = async () => {
    console.log(appointmentDate.value);
    await axios.post('https://enigmatic-stream-54061.herokuapp.com/api/appointments', {date: appointmentDate.value, seller: props.sellerId}, {headers: {
        "x-auth-token": this.$store.state.currentUser.accessToken}
    }).then((res) => {
    console.log(res.data);

})
}
</script>
