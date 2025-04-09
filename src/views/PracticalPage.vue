<template>
    <pdf src="../assets/amaliy/1-amaliy.pdf" :page="1"></pdf>
</template>

<script>
    import pdf from "pdfvuer"

    export default {
        components: {
            pdf
        }
    }
</script>