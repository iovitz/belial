import React from 'react'
import AspectRatio from '@mui/joy/AspectRatio'
import Card from '@mui/joy/Card'
import CardContent from '@mui/joy/CardContent'
import CardOverflow from '@mui/joy/CardOverflow'
import Divider from '@mui/joy/Divider'
import Typography from '@mui/joy/Typography'
import IconButton from '@mui/joy/IconButton'
import Link from '@mui/joy/Link'
import Favorite from '@mui/icons-material/Favorite'
import { styled } from '@mui/joy/styles'
import Grid from '@mui/joy/Grid'
import Sheet from '@mui/joy/Sheet'

const Item = styled(Sheet)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background.level1 : '#fff',
  ...theme.typography['body-sm'],
  padding: theme.spacing(1),
  textAlign: 'center',
  borderRadius: 4,
  color: theme.vars.palette.text.secondary,
}))

export default function Home() {
  const videoList = new Array(30).fill(1)
  return (
    <Grid container rowSpacing={1}>
      {videoList.map((_, i) => (
        <Grid xs={6} md={4} lg={3} key={i}>
          <Item>
            <Card
              variant='outlined'
              sx={{
                width: '100%',
              }}>
              <CardOverflow>
                <AspectRatio ratio='2'>
                  <img
                    src='https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318'
                    srcSet='https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x'
                    loading='lazy'
                    alt=''
                  />
                </AspectRatio>
                <IconButton
                  aria-label='Like minimal photography'
                  size='md'
                  variant='solid'
                  color='danger'
                  sx={{
                    position: 'absolute',
                    zIndex: 2,
                    borderRadius: '50%',
                    right: '1rem',
                    bottom: 0,
                    transform: 'translateY(50%)',
                  }}>
                  <Favorite />
                </IconButton>
              </CardOverflow>
              <CardContent>
                <Typography level='title-md'>
                  <Link href='#multiple-actions' overlay underline='none'>
                    Yosemite National Park
                  </Link>
                </Typography>
                <Typography level='body-sm'>
                  <Link href='#multiple-actions'>California</Link>
                </Typography>
              </CardContent>
              <CardOverflow variant='soft'>
                <Divider inset='context' />
                <CardContent orientation='horizontal'>
                  <Typography level='body-xs'>6.3k views</Typography>
                  <Divider orientation='vertical' />
                  <Typography level='body-xs'>1 hour ago</Typography>
                </CardContent>
              </CardOverflow>
            </Card>
          </Item>
        </Grid>
      ))}
    </Grid>
  )
}
