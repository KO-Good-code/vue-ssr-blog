<template>
 <div>{{msg}}</div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component

export default class App extends Vue {
  msg = 123
}
</script>

<style>
</style>
