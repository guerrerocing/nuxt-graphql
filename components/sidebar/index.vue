<template>
  <!-- To open on mobile, remove -translate-x-full lg:translate-x-0 and add translate-x-0 -->
  <div
    class="w-1/6 max-w-full bg-black h-screen flex flex-col text-white fixed lg:absolute lg:sticky top-0 transition-transform transform duration-500 ease -translate-x-full lg:translate-x-0"
  >
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="bars"
      class="svg-inline--fa fa-bars fa-w-14 absolute right-0 transform translate-x-double top-0 mt-8 text-3xl text-blue-800 cursor-pointer lg:hidden"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path
        fill="currentColor"
        d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
      ></path></svg
    ><a href="#" class="no-underline block mt-6"
      ><img src="~/assets/images/nerdifylogo.png" class="w-40 mx-auto"
    /></a>
    <div class="flex-1 mt-8">
      <div class="mt-6">
        <a
          href="#"
          class="flex justify-between no-underline w-full px-8 py-3 text-sm transition-colors duration-200 ease-in-out hover:text-blue-400"
          ><div>Timeline</div></a
        ><a
          href="#"
          class="flex justify-between no-underline w-full px-8 py-3 border-l-4 border-transparent text-sm transition-colors duration-200 ease-in-out hover:text-gray-700 text-white bg-yellow-500 border-white"
          ><div>Users</div>
        </a>
      </div>
    </div>
    <div class="flex px-8 py-6 items-center">
      <div class="relative rounded-full w-12 h-12">
        <img
          src="https://gustui.s3.amazonaws.com/avatar.png"
          class="absolute left-0 top-0 w-full h-full rounded-full object-cover"
        />
      </div>
      <div class="flex-1 ml-4">
        <p class="font-medium leading-none">Cesar Rome</p>
        <a href="#" class="no-underline text-xs text-gray-300 leading-none"
          >Edit Profile</a
        >
      </div>
    </div>
  </div>
</template>
<script src="./sidebar"></script>
