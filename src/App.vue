<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { AppDeviceEnquire } from '@/utils/mixin'
import { mixinDevice } from '@/utils/mixin'
export default {
  mixins: [AppDeviceEnquire, mixinDevice]
}
</script>

<style>
#app{
  height: 100%;
}
</style>
