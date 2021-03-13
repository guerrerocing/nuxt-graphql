<template>
  <div>
    <div class="flex">
      <sidebar />
      <div class="flex-1 min-h-screen bg-gray-200">
        <navbar />

        <div class="w-full py-12 px-6">
          <nuxt />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import navbar from '@/components/navbar/'
import sidebar from '@/components/sidebar'
export default {
  components: {
    navbar,
    sidebar,
  },
}
</script>
