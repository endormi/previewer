<template>
  <div class="flexc">
    <textarea
      :value="mdToPreview"
      @input="updateValue"
      :placeholder="props.placeholder"
    ></textarea>
    <div v-html="preview" class="markdown-body"></div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { marked } from "marked";
import DOMPurify from "dompurify";

const props = defineProps({
  markdown: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: true,
  },
});

const mdToPreview = ref(props.markdown);

const preview = computed(() => {
  return DOMPurify.sanitize(marked.parse(mdToPreview.value));
});
</script>

<script>
export default {
  methods: {
    updateValue(e) {
      this.mdToPreview = e.target.value;
    },
  },
};
</script>

<style scoped>
.flexc {
  display: flex;
  flex-direction: row;
  height: calc(95vh - 68px);
}

textarea,
div div {
  flex: 50%;
  overflow: auto;
  flex-grow: 1;
  flex-shrink: 1;
  margin: 0.5em;
  padding: 1em;
}

textarea {
  border: 1px solid #ccc;
  font-size: 1em;
  resize: none;
}

textarea:focus {
  outline: none;
}

::-webkit-scrollbar {
  width: 0.5em;
}

::-webkit-scrollbar-track {
  background: #ccc;
}

::-webkit-scrollbar-thumb {
  background: #888;
}

div > div {
  border: 1px solid #ccc;
}

@media (max-width: 1024px) {
  .flexc {
    flex-direction: column;
  }
}
</style>
