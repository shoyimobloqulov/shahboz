<template>
    <!-- ID va Icon -->
    <div class="flex items-center justify-center gap-2 px-4 py-3 bg-gray-200 border-b border-gray-300 text-gray-800 text-lg font-semibold my-2">
      <FileText class="w-6 h-6 text-gray-700" />
      <span>Maruza: <span class="text-gray-900 font-bold">{{ id }}</span></span>
    </div>
    <div class="pdf-viewer">
        <iframe v-if="pdfBlobUrl" :src="pdfBlobUrl" width="100%" style="height: 100vh;" frameborder="0"></iframe>
        <div v-else class="text-center p-4 text-red-500 font-semibold">
            PDF topilmadi yoki yuklanmadi 😓
        </div>
    </div>
</template>

<script>
import { FileText } from 'lucide-vue-next';
    export default {
        components: {
            FileText
        },
        props: {
            id: {
                type: [String, Number],
                required: true,
            },
        },
        data() {
            return {
                pdfBlobUrl: null,
            };
        },
        watch: {
            id: {
                immediate: true,
                handler() {
                    this.loadPdf();
                },
            },
        },
        methods: {
            async loadPdf() {
                try {
                    this.pdfBlobUrl = null; // eski blobni tozalaymiz
                    const pdfPath = new URL(`../assets/maruza/${this.id}-maruza.pdf`,
                        import.meta.url);
                    const response = await fetch(pdfPath);
                    if (!response.ok) throw new Error("PDF yuklanmadi");
                    const blob = await response.blob();
                    this.pdfBlobUrl = URL.createObjectURL(blob);
                } catch (error) {
                    console.error("PDF yuklashda xatolik:", error);
                }
            },
        },
    };
</script>

<style scoped>
    .pdf-viewer {
        background-color: #f9fafb;
        border: 1px solid #e5e7eb;
        border-radius: 0.5rem;
        overflow: hidden;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
    }
</style>