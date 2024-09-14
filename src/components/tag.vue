<template>
  <div class="tag">
    <el-scrollbar>
      <div class="scrollbar-flex-content">
        <el-tag
          v-for="(tag, i) in tags"
          :key="tag.meta && tag.meta.title"
          closable
          :type="router.path == tag.path ? 'primary' : 'info'"
          @click="handleTagClick(tag.path)"
          @close="handleTagClose(tag.path, i)"
        >
          {{ tag.meta && tag.meta.title }}
        </el-tag>
      </div>
    </el-scrollbar>
  </div>
</template>
<script setup lang="ts">
import { watch } from "vue";
import router from "../router";

export default {
  data() {
    return {
      tags: [
        { name: "标签一", type: "" },
        { name: "标签二", type: "success" },
        { name: "标签三", type: "info" },
        { name: "标签四", type: "warning" },
        { name: "标签五", type: "danger" },
      ],
    };
  },
};
</script>
