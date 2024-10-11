<template>
  <main class="flex flex-col h-screen text-white">
    <AppNavbar
      @publish="publishSnippet"
      @copy="copySnippet"
      @download="downloadSnippet"
      publishEnabled
    />
    <div class="flex flex-1">
      <AppSidebar />
      <ClientOnly>
        <vue-monaco-editor
          v-model:value="snippet.body"
          theme="vs-dark"
          class="flex-1"
          :options="MONACO_EDITOR_OPTIONS"
          :language="snippet.language"
          @mount="handleMount"
          @change="onChange"
        >
          <template #default>
            <div class="flex justify-center items-center">
              <div class="text-gray-500">Loading editor...</div>
            </div>
          </template>
        </vue-monaco-editor>
      </ClientOnly>
    </div>
    <AppFooterMain/>
    <UModal v-model="confirmationModal">
      <AppPublishCode
        v-if="confirmationModal"
        :snippet="snippet"
        @close="confirmationModal = false"
      />
    </UModal>
  </main>
</template>

<script setup>
const {
  MONACO_EDITOR_OPTIONS,
  languages,
  lineCount,
  wordCount,
  letterCount,
  editorRef,
  snippet,
  confirmationModal,
  loading,
  toggleMinimap,
  handleMount,
  onChange,
  formatCode,
  publishSnippet,
  confirmPublish,
  copySnippet,
  downloadSnippet,
} = useEditor();

useHead({
  title: "Code Snippet - Pastebin for developers",
  meta: [
    {
      name: "description",
      content:
        "Code Snippet allows you to share code with other developers. Create and share code snippets without signing up.",
    },
  ],
});
</script>

<style>
#language-select {
  @apply ring-0 !important;
}
</style>
