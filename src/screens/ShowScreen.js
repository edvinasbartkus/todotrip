import React, {Component} from 'react'
import {View, SafeAreaView, Text} from 'react-native'

export default class ShowScreen extends Component {
  render () {
    return (
      <SafeAreaView>
        <View>
          <Text>This is show screen {JSON.stringify(this.props)}</Text>
        </View>
      </SafeAreaView>
    )
  }
}
