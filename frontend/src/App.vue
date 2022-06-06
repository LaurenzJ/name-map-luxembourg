<template>
  <div id="app" style="background:#F9F9ED">
    <div
      class="pt-5 flex justify-center items-center"
    >
      <div class="mb-5 pt-0 w-1/3">
        <input
          type="text"
          placeholder="Familljennumm"
          style="background: #E9EAEF"
          class="
            border-2
            border-gray-500
            px-3
            py-4
            placeholder-slate-200
            text-slate-400
            relative
            rounded
            text-base
            border-0
            shadow
            outline-none
            focus:outline-none focus:ring
            w-full
            h-12
          "
        />
      </div>
      <button
        style="background: #bddab1;"

        class="
          ml-4
          text-white
          active:bg-purple-600
          font-bold
          uppercase
          text-base
          px-8
          py-2
          rounded
          shadow-md
          hover:shadow-lg
          outline-none
          focus:outline-none
          mr-1
          mb-5
          ease-linear
          transition-all
          duration-150
          
        "
        type="button"
      >
        Search
      </button>
    </div>
    <custom-map></custom-map>
  </div>
</template>

<script>
import CustomMap from "./components/CustomMap.vue";

export default {
  name: "App",
  components: {
    CustomMap,
  },
};
</script>

<style src="./assets/tailwind.css">
