<template>
  <div class="text-center min-h-full">
    <main v-if="isReady" class="py-10">
      <div  class="items-cente max-w mx-auto p-4">
          <div class="flex justify-center py-1">
              <img class="h-16 w-16 rounded-full" :src="seller.value.services.service_img" alt="" />
          </div>
          <div class="py-1">
                <h1 class="text-2xl font-bold text-gray-900">{{seller.value.username}}</h1>
          </div>
      </div>

        <div class="space-y-6 lg:col-start-1 lg:col-span-2">
          <!-- Description list-->
          <section aria-labelledby="applicant-information-title">
            <div class="bg-white shadow sm:rounded-lg items-center py-1">
              <div class="px-4 py-5 sm:px-6">
                <h2 id="applicant-information-title" class="text-lg leading-6 font-medium text-gray-900">
                  Seller Information
                </h2>
              </div>
              <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
                <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                  <div class="sm:col-span-1">
                    <dt class="text-sm font-medium text-gray-500">
                      Services we offer
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900">
                      {{ seller.value.services.service_desc }}
                    </dd>
                  </div>
                  <div class="sm:col-span-1">
                    <dt class="text-sm font-medium text-gray-500">
                      Email address
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900">
                      ricardocooper@example.com
                    </dd>
                  </div>
                  <div class="sm:col-span-1">
                    <dt class="text-sm font-medium text-gray-500">
                      Prices Range
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900">
                      120 - 340
                    </dd>
                  </div>
                  <div class="sm:col-span-1">
                    <dt class="text-sm font-medium text-gray-500">
                      Phone
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900">
                      +1 555-555-5555
                    </dd>
                  </div>
                  <div class="sm:col-span-2">
                    <dt class="text-sm font-medium text-gray-500">
                      About
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900">
                      Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
                    </dd>
                  </div>
                 
                </dl>
              </div>
              
            <div v-if="!newAppointmentPanel" class="m-2">
              <button @click="showNewAppointmentPanel()" type="button" class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500">
                Book Appoinment
              </button>
          </div>
          <div v-if="newAppointmentPanel" class="m-2">
              <button @click="showNewAppointmentPanel()" type="button" class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500">
                Cancel
              </button>
          <NewAppointment :sellerId="seller.value._id"/>
          </div>
            </div>
          </section>         


      </div>
    </main>
  </div>
</template>

<script setup>

import axios from 'axios';
import { computed, reactive, ref } from 'vue';
import NewAppointment from './NewAppointment.vue';

const props = defineProps({
    id: {
        type: String,
        default: "",
    },
});
const newAppointmentPanel = ref(false);

const showNewAppointmentPanel = () => {
  newAppointmentPanel.value = ! newAppointmentPanel.value
};

const isReady = ref(false);
const seller = reactive({});

const getSeller = async () => {
  await axios.get(`https://enigmatic-stream-54061.herokuapp.com/api/users/${props.id}`)
  .then((res) => {
    seller.value = res.data;
    isReady.value = true;
  });
}
getSeller();

// const handleBookAppointmnt = computed(()=> {
//   this.$router.push('/')
// })


  
    
</script>