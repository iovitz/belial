import React from 'react'
import Chip from '@mui/joy/Chip'
import List from '@mui/joy/List'
import ListSubheader from '@mui/joy/ListSubheader'
import ListItem from '@mui/joy/ListItem'
import ListItemButton from '@mui/joy/ListItemButton'
import ListItemDecorator from '@mui/joy/ListItemDecorator'
import ListItemContent from '@mui/joy/ListItemContent'

import AssignmentIndRoundedIcon from '@mui/icons-material/AssignmentIndRounded'
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded'
import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded'
import TodayRoundedIcon from '@mui/icons-material/TodayRounded'

export default function Navigation() {
  return (
    <List size='sm' sx={{ '--ListItem-radius': 'var(--joy-radius-sm)', '--List-gap': '4px' }}>
      <ListItem nested>
        <ListSubheader sx={{ letterSpacing: '2px', fontWeight: '800' }}>Menu</ListSubheader>
        <List
          aria-labelledby='nav-list-browse'
          sx={{
            '& .JoyListItemButton-root': { p: '8px' },
          }}>
          <ListItem>
            <ListItemButton>
              <ListItemDecorator>
                <ArticleRoundedIcon />
              </ListItemDecorator>
              <ListItemContent>视频推荐</ListItemContent>
              <Chip variant='soft' color='warning' size='sm'>
                2
              </Chip>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemDecorator>
                <AssignmentIndRoundedIcon />
              </ListItemDecorator>
              <ListItemContent>高级搜索</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemDecorator>
                <AccountTreeRoundedIcon />
              </ListItemDecorator>
              <ListItemContent>观看历史</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemDecorator>
                <TodayRoundedIcon />
              </ListItemDecorator>
              <ListItemContent>视频分析</ListItemContent>
            </ListItemButton>
          </ListItem>
        </List>
      </ListItem>
    </List>
  )
}
