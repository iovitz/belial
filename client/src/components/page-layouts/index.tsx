import React from 'react'
import PageHeader from './page-header'
import { Grid, GridItem, MenuList, MenuItem, Menu, MenuButton, Portal } from '@chakra-ui/react'
import styles from './styles.module.less'

const PageLayout: React.FC<{
  children: JSX.Element
}> = ({ children }) => {
  return (
    <Grid
      templateAreas={`"header header"
                  "main main"`}
      gridTemplateRows={'70px 1fr'}
      h='100%'>
      <GridItem area={'header'}>
        <PageHeader />
      </GridItem>
      <GridItem area={'main'}>{children}</GridItem>
    </Grid>
  )
}

export default PageLayout
