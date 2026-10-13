<script setup lang="ts">

const{ data } = await useFetch('/api/home/reviews')
const testimonials = data.value
</script>

<template>
  <div>
  <UPageSection
    title="Testimonios"
    description="Nuestrso testimonios de clientes satisfechos"
    headLine="Testimonios"
  />
  <UPageColumns>
    <UPageCard
      variant="solid"
      to="https://cloudflare.com"
      icon="i-logos-cloudflare-icon"
      title="Cloudflare's Workers LaunchPad"
      description="NuxtHub is part of the Cloudflare's Workers Launchpad Cohort to make sure you get a first-class experience on top of Cloudflare's network."
      :ui="{ leadingIcon: 'size-10' }"
    />

    <UPageCard
      v-for="(testimonial, index) in testimonials"
      :key="index"
      variant="subtle"
      :description="testimonial.description"
      :ui="{ description: 'before:content-[open-quote] after:content-[close-quote]' }"
    >
      <template #footer>
        <UUser 
        :name="testimonial.name" size="xl" 
        :description="testimonial.description"
        :avatar="{src:testimonial.profileImage}"
        />
      </template>
    </UPageCard>
  </UPageColumns>
  </div>
</template>
