<template>
  <v-row>
    <v-col cols="12" sm="12" md="9" lg="9" class="mx-auto">
      <v-card class="mt-10 elevation-0 bg-transparent" tile width="">
        <ProfileCard />

        <v-card-title class="text-center text-h5 font-weight-bold text-wrap">
          <slot name="hero_title" />
        </v-card-title>

        <v-card-title class="text-subtitle-1 text-wrap">
          <slot name="hero_subtitle" />
        </v-card-title>

        <v-card-title class="text-center">
          <v-btn text="My Works" variant="flat" class="text-none" color="highlight" to="/projects">
            <template #append>
              <v-icon>mdi-chevron-right</v-icon>
            </template>
          </v-btn>
        </v-card-title>

        <v-card-title class="text-center my-5">
          <v-btn
            v-for="link in socialData"
            :key="link.icon"
            :href="link.url"
            :color="link.color"
            target="_blank"
            class="mx-2"
            icon
            variant="tonal"
          >
            <v-icon size="large">{{ link.icon }}</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" sm="12" md="6" lg="6">
              <v-card-title class="px-0 d-flex align-center ga-2">
                <v-icon icon="mdi-application-brackets-outline" size="25" />
                <p class="text-h6 font-weight-bold">Experience</p>
              </v-card-title>
              <TimelineAccordion
                v-if="experienceStatus === 'success'"
                :items="experience"
              />
            </v-col>
            <v-col cols="12" sm="12" md="6" lg="6">
              <v-card-title class="px-0 d-flex align-center ga-2">
                <v-icon icon="mdi-school-outline" size="25" />
                <p class="text-h6 font-weight-bold">Education</p>
              </v-card-title>
              <Milestone
                v-if="educationStatus === 'success'"
                :items="education"
              />
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script setup lang="ts">
import type { Collections } from '@nuxt/content';
import Milestone from '../Milestone.vue';

const { data: socialData } = await useAsyncData(
  'social-links',
  async() => await queryCollection('social').select('meta').first() as Collections['social'],
  {
    transform: (data) => data.meta.body
  }
);

const { data: experience, status:experienceStatus } = await useAsyncData(
  'experience_timeline',
  async() => await queryCollection('experience_timeline').select('meta').first() as Collections['experience_timeline'],
  {
    transform: (data) => data.meta.body
  }
);

const { data: education, status:educationStatus } = await useAsyncData(
  'education_timeline',
  async() => await queryCollection('education_timeline').select('meta').first() as Collections['education_timeline'],
  {
    transform: (data) => data.meta.body
  }
);
</script>