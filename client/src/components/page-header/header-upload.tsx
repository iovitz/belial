import {
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
import React, { useState } from 'react'
import VideoCallIcon from '@mui/icons-material/VideoCall'

export default function HeaderUplaod() {
  const [isModalOpen, setIsModalOpen] = useState(false)
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
                  width: '500px',
                }}
              />
            </FormControl>
            <FormControl>
              <Textarea placeholder='视频描述' variant='soft' minRows={2} />
            </FormControl>

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
