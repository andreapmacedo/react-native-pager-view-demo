import React from 'react';
import { Text } from 'react-native';
import { Constants } from 'expo';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';

class Scrollable extends React.Component {
  render() {
    return (
      <ScrollableTabView
        style={{ marginTop: 20 }}
        // style={{ marginTop: Constants.statusBarHeight }}
        initialPage={0}
        renderTabBar={() => <ScrollableTabBar />}
      >
        <Text tabLabel='Tab #1'>My</Text>
        <Text tabLabel='Tab #2 word word'>favorite</Text>
        <Text tabLabel='Tab #3 word word word'>project</Text>
        <Text tabLabel='Tab #4 word word word word'>favorite</Text>
        <Text tabLabel='Tab #5'>project</Text>
      </ScrollableTabView>
    );
  }
}

export default Scrollable;