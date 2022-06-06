<template>
    <div class="h-full">
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
        ></l-tile-layer>

        <l-marker 
            v-for="marker in markers"
            :key="marker.id" 
            :lat-lng="marker.coords"
        >
            <l-popup
                :content="marker.address"
            ></l-popup>
        </l-marker>
        
        </l-map>
    </div>
</template>

<script>
import { LMap, LTileLayer, LMarker, LPopup } from 'vue2-leaflet';

export default {
    components: {
        LMap,
        LTileLayer,
        LMarker,
        LPopup,
    },
    data () {
        return {
            url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            center: [49.79963927519508, 6.1029803786482155],
            zoom: 10,
            markers: [
                {
                    id: 1,
                    coords: [49.68258, 6.138392],
                    locality: 'Heisdorf (Heeschdref)',
                    zip_code: 'L-7313',
                    address: '104 r. du Cimetiere',
                    phone_number: '+352 33 18 98',
                    name: 'ACKERMANN E'
                }
            ]
        }
    },
    methods: {
        centerUpdated (center) {
            this.center = center;
        },
        zoomUpdated (zoom) {
            this.zoom = zoom;
        },
    }
}
</script>
<style scoped>  .map {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

</style>
