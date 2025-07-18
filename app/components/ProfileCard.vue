<template>
  <v-card-title class="d-flex flex-column align-center">
    <v-list-item>
      <template #title>
        <span class="text-h5 font-weight-bold">{{ profile?.name }}</span>
      </template>
      <template #subtitle>
        <span class="text-subtitle-1 font-weight-bold">{{ profile?.title }}</span>
      </template>
      <template #prepend>
        <v-avatar
          :size="profile?.avatarSize"
          class="pa-1 bg-white"
          variant="elevated"
        >
          <v-img
            :src="getImagePath(profile?.avatarSrc)"
            :alt="`${profile?.name}'s Avatar`"
            cover
            rounded="circle"
          ></v-img>
        </v-avatar>
      </template>
    </v-list-item>
  </v-card-title>
</template>
<script lang="ts" setup>
import type { Collections } from '@nuxt/content';

interface Profile {
  name: string;
  title: string;
  avatarSize: string;
  avatarSrc: string;
}

const { data: profile, status } = await useAsyncData(
  'profile',
  async () => await queryCollection('profile').select('meta').first() as Collections['profile'],
  {
    transform: (data) => data.meta.body
  }
);
</script>