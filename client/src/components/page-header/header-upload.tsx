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
  const videoPreviewRef = useRef<HTMLVideoElement>(null)
  const [videoPreviewUrl, setVideoPreviewUrl] = useState('')

  const handleUploadFile = () => {
    fileUploaderRef.current?.click()
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileObj = e.target.files?.[0]
    if (!fileObj) return
    console.log(fileObj)
    const url = URL.createObjectURL(fileObj)
    setVideoPreviewUrl(url)
    // video.src = url
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

          <Stack
            spacing={2}
            className='pretty-scroll-bar'
            sx={{
              height: '500px',
              width: '700px',
              overflowY: 'scroll',
            }}>
            {videoPreviewUrl ? (
              <>
                <video ref={videoPreviewRef} src={videoPreviewUrl} controls></video>
                <FormControl>
                  <Input placeholder='视频标题' variant='soft' autoFocus required onChange={handleFileChange} />
                </FormControl>
                <FormControl>
                  <Textarea placeholder='视频描述' variant='soft' minRows={4} maxRows={4} />
                </FormControl>
                <LinearProgress
                  determinate
                  variant='outlined'
                  color='neutral'
                  size='sm'
                  thickness={24}
                  value={40}
                  sx={{}}>
                  <Typography level='body-xs' fontWeight='xl' sx={{ mixBlendMode: 'difference' }}>
                    视频上传中 {`40%`} ...
                  </Typography>
                </LinearProgress>
                <Button type='submit'>Submit</Button>
              </>
            ) : (
              <>
                <Box
                  sx={{
                    border: '1px dashed',
                    borderColor: 'neutral.outlinedBorder',
                    color: 'neutral.outlinedBorder',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingY: '40px',
                    cursor: 'pointer',
                    boxSizing: 'border-box',
                    height: '100%',
                    width: '100%',
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
              </>
            )}
          </Stack>
        </ModalDialog>
      </Modal>
    </>
  )
}
