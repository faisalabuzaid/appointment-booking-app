<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <header class="bg-gray-900">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
      <div class="w-full py-6 flex items-center justify-between border-b border-gray-500 lg:border-none">
        <div class="flex items-center">
          <a href="#">
            <span class="sr-only">Workflow</span>
            <img class="h-10 w-auto" src="https://cdn-icons.flaticon.com/png/512/3441/premium/3441634.png?token=exp=1640645056~hmac=6bb43aa0baa44964f518aecd22db8a8e" alt="" />
          </a>
          <div class="hidden ml-10 space-x-8 lg:block">
            <a v-for="link in navigation" :key="link.name" :href="link.href" class="text-base font-medium text-white hover:text-gray-50">
              {{ link.name }}
            </a>
          </div>
        </div>
        <div class="ml-10 space-x-4">
          <router-link to="/login" class="inline-block bg-gray-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75">Sign in</router-link>
        </div>
      </div>
      <div class="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
        <a v-for="link in navigation" :key="link.name" :href="link.href" class="text-base font-medium text-white hover:text-gray-50">
          {{ link.name }}
        </a>
      </div>
    </nav>
  </header>
</template>

<script>
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'My Appointments', href: '/appointments' },
]

export default {
  setup() {
    return {
      navigation,
    }
  },
}
</script>