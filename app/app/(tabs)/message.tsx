import { Button, Icon, ListItem } from '@rneui/themed'
import React from 'react'
import { StyleSheet, View } from 'react-native'

export default function Message() {
  return (
    <View style={styles.root}>
      <ListItem.Swipeable
        leftContent={reset => (
          <Button
            title="Info"
            onPress={() => reset()}
            icon={{ name: 'info', color: 'white' }}
            buttonStyle={{ minHeight: '100%' }}
          />
        )}
        rightContent={reset => (
          <Button
            title="Delete"
            onPress={() => reset()}
            icon={{ name: 'delete', color: 'white' }}
            buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
          />
        )}
      >
        <Icon name="My Icon" />
        <ListItem.Content>
          <ListItem.Title>Hello Swiper</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem.Swipeable>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    height: '100%',
    width: '100%',
    backgroundColor: '#ff000030',
  },
})
