<script setup lang="ts">
import PageContainer from '@/components/PageContainer/PageContainer.vue'
import { Button, CellGroup, Field, Form, Icon, Picker, Popup, Progress, Uploader, type UploaderFileListItem } from 'vant'
import type { Numeric } from 'vant/lib/utils'
import { ref } from 'vue'

const fileList = ref<UploaderFileListItem[]>([])

function afterRead(file: any) {
  file.status = 'uploading'
  file.message = '上传中...'
  console.error(file)

  setTimeout(() => {
    file.status = 'failed'
    file.message = '上传失败'
  }, 1000)
}

const title = ref('')

const selectedTag = ref('')
const selectedTagId = ref('')
const showPicker = ref(false)
const videoTags = [
  { text: '鬼畜', value: 'id1' },
  { text: '宅舞', value: 'id2' },
  { text: '音乐', value: 'id3' },
  { text: '游戏', value: 'id4' },
  { text: '搞笑', value: 'id5' },
]
function onConfirm({ selectedOptions }: any) {
  const { text, value } = selectedOptions[0]
  selectedTag.value = text
  selectedTagId.value = value
  showPicker.value = false
}
const pickerValue = ref<Numeric[]>([])
</script>

<template>
  <PageContainer title="发布">
    <Form>
      <Uploader
        v-model="fileList"
        class="w-full" :after-read="afterRead" reupload
        accept=".mp4" :max-size="100 * 1024"
      >
        <div style="width: 100vw;" class="mb-2 bg-white">
          <div class="w-full py-10 text-center text-gray-300">
            <Icon name="plus" size="50" />
            <p class="text-sm">
              点击进行上传
            </p>
          </div>
          <Progress :percentage="0" stroke-width="8" class="w-full" />
        </div>
      </Uploader>

      <CellGroup>
        <Field
          v-model="title"
          name="title"
          label="标题"
          placeholder="请输入视频标题"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <Field
          v-model="selectedTag"
          is-link
          readonly
          label="标签"
          placeholder="请选择标签"
          @click="showPicker = true"
        />
        <Popup v-model:show="showPicker" destroy-on-close round position="bottom">
          <Picker
            :model-value="pickerValue"
            :columns="videoTags"
            @cancel="showPicker = false"
            @confirm="onConfirm"
          />
        </Popup>
      </CellGroup>
      <div style="margin: 16px;">
        <Button round block type="primary" native-type="submit">
          提交
        </Button>
      </div>
    </Form>
  </PageContainer>
</template>

<style lang="scss" scoped>

</style>
