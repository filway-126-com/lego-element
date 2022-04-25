<script lang="ts" setup>
import { useRoute } from 'vue-router'
const currentId = useRoute().params.id as string
</script>
<template>{{ currentId }}</template>