<template>
  <UCard :ui="{ header: { padding: 'px-4 py-2' } }">
    <template #header>
      <div class="flex justify-between items-center">
        <h1 class="text-lg font-semibold">Publish code</h1>
        <UButton
          @click="$emit('close')"
          icon="i-heroicons-x-mark"
          variant="ghost"
        />
      </div>
    </template>
    <div class="space-y-4">
      <UFormGroup label="File name">
        <UInput size="lg" placeholder="File name" v-model="snippet.title" />
      </UFormGroup>
      <UAlert
        icon="i-heroicons-exclamation-triangle"
        title="Heads up!"
        description="This snippet will be public and anyone will be able to see it. Make sure you don't include any sensitive information."
        variant="subtle"
        color="orange"
      />
      <UButton
        @click="confirmPublish"
        block
        color="primary"
        icon="i-heroicons-share"
        :loading="loading"
        :disabled="loading"
        >Publish</UButton
      >
    </div>
  </UCard>
</template>
<script setup lang="ts">
defineProps<{
  snippet: Snippet;
}>();

defineEmits(["close"]);
const { confirmPublish, loading } = useEditor();
</script>
