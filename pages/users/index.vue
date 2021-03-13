<template>
  <div class="container mx-auto">
    <div class="container mx-auto">
      <h5>Users</h5>
      <div class="grid grid-cols-3 gap-4">
        <div
          v-for="user in users"
          :key="user.id"
          class="mt-2 border-t border-gray-300"
        >
          <div
            class="px-4 py-6 flex flex-col sm:flex-row items-center justify-between cursor-pointer transition-colors duration-300 ease border-b border-gray-300 hover:bg-gray-200 no-underline"
          >
            <div class="relative rounded-full w-16 h-16">
              <img
                :src="user.picture"
                class="absolute left-0 top-0 w-full h-full rounded-full object-cover"
              />
            </div>
            <div class="mt-2 text-center sm:text-left sm:mt-0 sm:ml-4 flex-1">
              <p class="font-medium">
                {{ `${user.title}. ${user.firstName} ${user.lastName}` }}
              </p>
              <p class="">{{ user.email }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import queryUsers from '~/graphql/users'

export default {
  layout: 'dash',
  data() {
    return {
      users: [],
    }
  },
  apollo: {
    users: {
      query: queryUsers,
      result({
        data: {
          users: { data },
        },
      }) {
        this.users = data
      },
    },
  },
}
</script>
