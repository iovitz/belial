import { Input } from '@mui/joy'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import React from 'react'

export default function HeaderSearch() {
  return (
    <>
      <Input
        size='sm'
        variant='outlined'
        placeholder='Search anything…'
        startDecorator={<SearchRoundedIcon color='primary' />}
        sx={{
          alignSelf: 'center',
          display: {
            xs: 'none',
            sm: 'flex',
          },
        }}
      />
    </>
  )
}
