<template>
  <div class="h-full">
    <div class="pt-5 flex justify-center items-center">
      <div class="mb-5 pt-0 w-1/3">
        <input
          v-on:keyup.enter="search"
          type="text"
          v-model="searchTerm"
          placeholder="Familljennumm"
          style="background: #e9eaef"
          class="
            border-2 border-gray-500
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
        style="background: #bddab1"
        v-on:click="search"
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
    <l-map
      :center="center"
      :zoom="zoom"
      class="map"
      ref="map"
      @update:center="centerUpdated"
      @update:zoom="zoomUpdated"
    >
      <l-tile-layer :url="url"></l-tile-layer>

      <l-marker
        v-for="marker in markers"
        :key="marker.id"
        :lat-lng="marker.coords"
      >
        <l-popup>
          <pre>{{ marker.surname }} <b>{{ marker.family_name }}</b></pre>
          <pre>{{ marker.locality }}</pre>
          <pre>{{ marker.address }}</pre>
          <pre>{{ marker.phone_number }}</pre>
        </l-popup>
      </l-marker>
    </l-map>
  </div>
</template>

<script>
import AddressService from "@/AddressService.js";

import { LMap, LTileLayer, LMarker, LPopup } from "vue2-leaflet";

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
  },
  data() {
    return {
      searchTerm: "",
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      center: [49.79963927519508, 6.1029803786482155],
      zoom: 10,
      markers: [],
      addresses: [],
    };
  },

  methods: {
    centerUpdated(center) {
      this.center = center;
    },
    zoomUpdated(zoom) {
      this.zoom = zoom;
    },
    async search() {
      if (this.searchTerm.length > 0) {
        try {
          this.addresses = await AddressService.getAddressesWithName(
            this.searchTerm
          );

          this.markers = this.addresses.map((address) => {
            return {
              id: address._id,
              coords: [address.latitude, address.longitude],
              surname: address.surname,
              family_name: address.family_name,
              locality: address.locality,
              zip_code: address.zip_code,
              address: address.address,
              phone_number: address.phone_number,
            };
          });
        } catch (error) {
          console.log(error);
        }
      } else {
        this.markers = [];
      }
    },
  },
};
</script>
<style scoped>
.map {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
