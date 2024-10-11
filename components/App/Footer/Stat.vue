<template>
  <div class="flex items-center gap-2">
    <div>
      <span class="font-semibold">{{ wordCount }}</span>
      <span class="text-gray-300"> words</span>
    </div>
  </div>
</template>
<script setup lang="ts">
const { lineCount, wordCount, letterCount } = useEditor();
</script>
