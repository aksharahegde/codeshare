<template>
  <main class="flex flex-col h-screen text-white">
    <AppNavbar
      @publish="publishSnippet"
      @copy="copySnippet"
      @download="downloadSnippet"
      :publish-enabled="false"
      :title="snippet.title"
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
    <AppFooterMain />
  </main>
</template>

<script setup>
const {
  MONACO_EDITOR_OPTIONS,
  languages,
  editorRef,
  confirmationModal,
  lineCount,
  toggleMinimap,
  handleMount,
  onChange,
  formatCode,
  publishSnippet,
  confirmPublish,
  copySnippet,
  downloadSnippet,
} = useEditor();

const route = useRoute();
const { data } = await useFetch(`/api/codebin/${route.params.id}`);

const title = ref(data.value.title);
const snippet = useState("snippet");
snippet.value = data.value;

useHead({
  title: `${title.value} - Codeshare.app`,
  meta: [
    {
      hid: "description",
      name: "description",
      content: `Codeshare.app - ${title.value}`,
    },
  ],
});
</script>

<style>
#language-select {
  @apply ring-0 !important;
}
</style>
