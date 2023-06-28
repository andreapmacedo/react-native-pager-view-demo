import React from 'react';
import { Text, ScrollView, StyleSheet, TouchableHighlight } from 'react-native';
import { Constants } from 'expo';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';

class Child extends React.Component {
  onEnter() {
    console.log('enter: ' + this.props.i);
  }

  onLeave() {
    console.log('leave: ' + this.props.i);
  }

  render() {
    const { i } = this.props;
    return (
      <Text key={i}>{`tab${i}`}</Text>
    );
  }
}

class Dynamic extends React.Component {
  constructor(props) {
    super(props);

    this.children = [];
    this.state = {
      tabs: [1, 2, 3, 4, 5, 6 ],
    };
  }

  componentDidMount() {
    // adding new tabs after 6 seconds
    return;
    setTimeout(() => {
      this.setState({ tabs: [1, 2, 3, 4, 5, 6 ]});
    }, 5000);
  }

  handleChangeTab = ({i, ref, from }) => {
    this.children[i].onEnter();
    this.children[from].onLeave();
  }

  renderTab = (name, page, isTabActive, onPressHandler, onLayoutHandler) => {
    return (
      <TouchableHighlight
        key={`${name}_${page}`}
        onPress={() => onPressHandler(page)}
        onLayout={onLayoutHandler}
        style={{ flex: 1, width: 100 }}
        underlayColor="#aaaaaa"
      >
        <Text>{name} haloo</Text>
      </TouchableHighlight>
    );
  }

  render() {
    const { tabs } = this.state;
    return (
      <ScrollableTabView
        style={styles.container}
        renderTabBar={() => <ScrollableTabBar renderTab={this.renderTab}/>}
        onChangeTab={this.handleChangeTab}
      >
        {tabs.map((tab, i) => {
          return (
            <Child
              ref={(ref) => (this.children[i] = ref)}
              tabLabel={`tab${i}`}
              i={i}
              key={i}
            />
          );
        })}
      </ScrollableTabView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // marginTop: Constants.statusBarHeight,
    marginTop: 20,
  }
});

export default Dynamic;





