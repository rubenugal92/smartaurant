<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{
  error: NuxtError
}>()
</script>

<template>
    <UError :error="error" 
    :clear="{
        size: 'xl',
        icon: 'rivet-icons:chevrons-left',
        class: 'rounded-full'
        }"
        :ui="{
        statusCode: 'text-9xl font-thin'
        
        }"
    
    />
    
</template>