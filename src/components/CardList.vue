<template>
  <div class="template-list-component">
    <el-row :gutter="16">
      <el-col :span="6" v-for="item in list" :key="item.id" class="poster-item">
        <router-link :to="{ name: 'carddetail', params: { id: item.id } }">
          <el-card>
            <img :src="item.img" class="image" />
            <div style="padding: 14px">
              <span>{{ item.title }}</span>
              <div class="bottom">
                <span class="time">{{ item.author }} | {{ item.copiedCount }}</span>
                <el-button type="text" class="button">Operating</el-button>
              </div>
            </div>
          </el-card>
        </router-link>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { CardProps } from '../store/card'
export default defineComponent({
  name: 'template-list',
  props: {
    list: {
      type: Array as PropType<CardProps[]>,
      required: true
    }
  }
})
</script>

<style>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}
.poster-item {
  margin-bottom: 10px;
}
</style>