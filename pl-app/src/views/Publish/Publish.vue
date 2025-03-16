<script setup lang="ts">
import PageContainer from '@/components/PageContainer/PageContainer.vue'
import { Button, Cell, CellGroup, Field, Form, Uploader, type UploaderFileListItem } from 'vant'
import { ref } from 'vue'

const fileList = ref([])
function afterRead(files: UploaderFileListItem | UploaderFileListItem[]) {
  const file = Array.isArray(files) ? files[0] : files
  file.status = 'uploading'
  file.message = '上传中...'

  setTimeout(() => {
    file.status = 'failed'
    file.message = '上传失败'
  }, 1000)
}
function onSubmit(data) {
  console.log(data)
}
</script>

<template>
  <PageContainer title="发布">
    <CellGroup>
      <Field
        name="title"
        label="标题"
        placeholder="请输入视频标题"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <Cell value="标签" is-link>
        <!-- 使用 title 插槽来自定义标题 -->
        <template #title>
          <span class="custom-title">单元格</span>
          <van-tag type="primary">
            标签
          </van-tag>
        </template>
      </Cell>
    </CellGroup>
    <div style="margin: 16px;">
      <Button round block type="primary" native-type="submit">
        提交
      </Button>
    </div>
  </PageContainer>
</template>

<style lang="scss" scoped>

</style>
