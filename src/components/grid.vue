<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
    <div class="absolute inset-0">
      <div class="bg-white h-1/3 sm:h-2/3" />
    </div>
    <div class="relative max-w-7xl mx-auto">
      <div class="text-center">
        <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
          Services
        </h2>
        <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          Save your time and book your appointment from the best sellers now.
        </p>
      </div>
      <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none text-center">
        <div v-for="user in data.value" :key="user.username" class="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <div class="flex-shrink-0">
            <img class="h-48 w-full object-cover" :src="user.services.service_img" alt="" />
          </div>
          <div class="flex-1 bg-white p-6 flex flex-col justify-between">
            <div class="flex-1">
              
              <a :href="'/seller/'+user._id" class="block mt-2">
                <p class="text-xl font-semibold text-gray-900">
                  {{ user.title }}
                </p>
                <p class="mt-3 text-base text-gray-500">
                  {{ user.services.service_desc }}
                </p>
              </a>
            </div>
            <div class="mt-6 items-center">
              
              <div>
                <p class="text-sm font-medium text-gray-900">
                  <a :href="'/seller/'+user._id" class="hover:underline">
                    {{ user.username }}
                  </a>
                </p>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
    sellers: {
        type: Array,
        default: [],
    },
});
const data= props.sellers;
</script>