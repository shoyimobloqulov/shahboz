<template>
    <div class="min-h-screen bg-white dark:bg-gray-900 flex flex-col items-center justify-center px-4 py-10">
      <h1 class="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center">
        {{ id }}-amaliy mashg'ulot
      </h1>
  
      <div class="w-full max-w-4xl aspect-video bg-gray-100 dark:bg-gray-800 border rounded-lg shadow overflow-hidden">
        <iframe
          v-if="fileUrl"
          :src="viewerUrl"
          class="w-full h-full"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['id'],
    computed: {
      fileName() {
        const map = {
          1: '1-amaliy.pptx',
          2: '2-amaliy.ppt',
          3: '3-amaliy.pptx',
          4: '4-Amaliy.pdf',
          5: '5-amaliy.pdf',
          6: '6-amaliy.pptx',
          7: '7-amaliy.pptx',
          8: '8-amaliy.docx'
        }
        return map[this.id] || null;
      },
      fileUrl() {
        return this.fileName
          ? `/assets/amaliy/${this.fileName}`
          : null;
      },
      viewerUrl() {
        if (!this.fileUrl) return '';
        // Use Google Docs viewer for pptx, ppt, docx; direct embed for PDFs
        const ext = this.fileUrl.split('.').pop().toLowerCase();
        if (ext === 'pdf') {
          return this.fileUrl;
        } else {
          return `https://docs.google.com/gview?url=${location.origin}${this.fileUrl}&embedded=true`;
        }
      }
    }
  }
  </script>
  
  <style scoped>
  /* optional: customize iframe wrapper, loader, etc. */
  </style>
  