<template>
    <div>
        <l-map
        :center="center"
        :zoom="zoom"
        class="map"
        ref="map"
        @update:center="centerUpdated"
        @update:zoom="zoomUpdated"
        >
        <l-tile-layer
        :url="url"
        >

        </l-tile-layer>
        </l-map>
    </div>
</template>

<script>
import { LMap, LTileLayer } from 'vue2-leaflet';

export default {
    components: {
        LMap,
        LTileLayer
    },
    data () {
        return {
            url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            center: [49.61430686205902, 6.128856270211184],
            zoom: 12
        }
    },
    methods: {
        centerUpdated (center) {
            this.center = center;
        },
        zoomUpdated (zoom) {
            this.zoom = zoom;
        }
    }
}
</script>
<style scoped>
  .map {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>
