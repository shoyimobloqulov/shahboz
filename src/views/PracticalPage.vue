<template>
    <div class="min-h-screen bg-white dark:bg-gray-900 flex flex-col items-center justify-center px-4 py-10">
      <h1 class="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center">
        {{ id }}-amaliy mashg'ulot
      </h1>
  
      <!-- Faylni ko'rsatish -->
      <div class="w-full max-w-4xl aspect-video bg-gray-100 dark:bg-gray-800 border rounded-lg shadow overflow-hidden">
        <vue-files-preview
          v-if="fileUrl"
          :file="fileUrl"
          :type="fileType"
          class="w-full h-full"
        />
      </div>
    </div>
  </template>
  
  <script>
  // Importing the necessary component from VueFilesPreview
  import VueFilesPreview from 'vue-files-preview';
  
  export default {
    components: {
      VueFilesPreview,
    },
    props: ['id'],
    data() {
      return {
        fileUrl: '',
        fileType: '',
      };
    },
    mounted() {
      this.setFileDetails();
    },
    methods: {
      // Fayl nomi va turi
      setFileDetails() {
        const map = {
          1: '1-amaliy.pptx',
          2: '2-amaliy.ppt',
          3: '3-amaliy.pptx',
          4: '4-Amaliy.pdf',
          5: '5-amaliy.pdf',
          6: '6-amaliy.pptx',
          7: '7-amaliy.pptx',
          8: '8-amaliy.docx',
        };
  
        const fileName = map[this.id];
        if (fileName) {
          this.fileUrl = `/assets/amaliy/${fileName}`;
          this.fileType = this.getFileType(fileName);
        }
      },
      // Fayl turini aniqlash
      getFileType(fileName) {
        const ext = fileName.split('.').pop().toLowerCase();
        if (ext === 'pdf') return 'pdf';
        if (ext === 'pptx' || ext === 'ppt') return 'pptx';
        if (ext === 'docx') return 'docx';
        return '';
      },
    },
  };
  </script>
  
  <style scoped>
  /* optional: customize iframe wrapper, loader, etc. */
  canvas {
    margin: 10px 0;
    max-width: 100%;
  }
  </style>
  