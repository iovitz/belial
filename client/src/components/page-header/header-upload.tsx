import {
  Box,
  Button,
  DialogTitle,
  FormControl,
  IconButton,
  Input,
  LinearProgress,
  Modal,
  ModalClose,
  ModalDialog,
  Stack,
  Textarea,
  Tooltip,
  Typography,
} from '@mui/joy'
import React, { useRef, useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import VideoCallIcon from '@mui/icons-material/VideoCall'

export default function HeaderUplaod() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const fileUploaderRef = useRef<HTMLInputElement>(null)

  const handleUploadFile = () => {
    fileUploaderRef.current?.click()
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) return
    console.log(files)
  }

  return (
    <>
      <Tooltip title='上传视频' variant='outlined'>
        <IconButton
          onClick={() => setIsModalOpen(true)}
          size='sm'
          variant='plain'
          color='neutral'
          sx={{ alignSelf: 'center' }}>
          <VideoCallIcon />
        </IconButton>
      </Tooltip>

      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalDialog>
          <ModalClose />
          <DialogTitle>上传视频</DialogTitle>

          <Stack spacing={2}>
            <FormControl>
              <Input
                placeholder='视频标题'
                variant='soft'
                autoFocus
                required
                sx={{
                  width: {
                    xs: '100%',
                    md: '600px',
                  },
                }}
              />
            </FormControl>
            <FormControl>
              <Textarea placeholder='视频描述' variant='soft' minRows={4} maxRows={4} />
            </FormControl>

            <Box
              sx={{
                border: '1px dashed',
                borderColor: 'neutral.outlinedBorder',
                color: 'neutral.outlinedBorder',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingY: '40px',
                cursor: 'pointer',
              }}
              onClick={handleUploadFile}>
              <AddIcon
                sx={{
                  fontSize: '100px',
                  outlineColor: 'neutral.outlinedBorder',
                  color: 'inherit',
                }}
              />
              点击上传或拖放视频到此处
            </Box>

            <input type='file' ref={fileUploaderRef} hidden onChange={handleFileChange} />

            <LinearProgress determinate variant='outlined' color='neutral' size='sm' thickness={24} value={40} sx={{}}>
              <Typography level='body-xs' fontWeight='xl' sx={{ mixBlendMode: 'difference' }}>
                视频上传中 {`40%`} ...
              </Typography>
            </LinearProgress>
            <Button type='submit'>Submit</Button>
          </Stack>
        </ModalDialog>
      </Modal>
    </>
  )
}
