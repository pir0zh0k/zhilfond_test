<script setup>
defineProps({
  placeholder: {
    type: String,
    required: false,
  },
});

defineEmits(["clearError", "clearData"]);

const value = defineModel();
</script>

<template>
  <input
    class="input"
    type="text"
    :placeholder="placeholder"
    v-model.trim="value"
    @input="
      $emit('clearError');
      $emit('clearData');
    "
  />
</template>

<style lang="scss" scoped>
.input {
  width: 100%;
  border-radius: 8px;
  padding: 14px 16px;
  border: 1px solid $border-input;
  font-size: 14p;
  font-weight: 400;
  line-height: 17px;
  color: $text-gray;
}
</style>
