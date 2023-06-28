import React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';

class Overlay extends React.Component {
  render() {
    return (
      // Using tabBarPosition='overlayTop' or 'overlayBottom' lets the content show through a
      // semitransparent tab bar. Note that if you build a custom tab bar component, its outer container
      // must consume a 'style' prop (e.g. <View style={this.props.style}) to support this feature.
      <ScrollableTabView
        style={styles.container}
        renderTabBar={() => <DefaultTabBar backgroundColor='rgba(255, 255, 255, 0.7)' />}
        tabBarPosition='overlayTop'
      >
        <ScrollView tabLabel='iOS'>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a bibendum tellus. Nunc at felis eget lorem feugiat pellentesque et at velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel porta nulla, vel pellentesque tortor. Morbi vitae euismod leo. Morbi luctus, purus vitae mattis dignissim, justo ante dictum ante, id euismod nisl nibh nec arcu. Ut convallis sed tellus id posuere. Suspendisse pharetra dui sit amet nisi molestie pretium. Curabitur commodo risus sit amet turpis cursus, nec rutrum orci imperdiet. Aenean convallis sit amet justo a auctor. Sed a imperdiet libero, quis vestibulum tortor. Morbi ac turpis sit amet odio vehicula porttitor id sit amet purus. Etiam nec nulla a dolor ullamcorper pellentesque at ac augue. Curabitur in ipsum porttitor, ultricies ligula non, posuere est. Vivamus non elit vestibulum erat porttitor varius sit amet in ligula.</Text>
          <Text>Praesent ac velit urna. Nunc vitae felis dui. Suspendisse nec volutpat enim. Suspendisse potenti. Integer sed massa sollicitudin, blandit erat eu, consequat magna. Fusce vitae erat convallis, venenatis enim ac, cursus lorem. Nunc efficitur blandit purus vel condimentum. Quisque fermentum mi nec orci rhoncus, vitae convallis ex maximus. Nulla facilisis bibendum porttitor. Ut eu urna justo. Sed malesuada, ante interdum semper viverra, metus eros convallis risus, ac consequat ex justo et arcu.</Text>
          <Text>
          Nullam eu quam scelerisque, vehicula est a, semper eros. Sed a pulvinar sapien, eu ornare nulla. Nunc urna velit, placerat vitae risus in, varius pharetra dui. Ut fringilla, orci in consectetur finibus, nisl ante tempor nisl, vel tincidunt libero nibh non tortor. Praesent id ligula dignissim, luctus urna in, ullamcorper felis. Quisque blandit diam at ligula rhoncus dignissim vel a arcu. Sed facilisis accumsan augue ut varius. Phasellus auctor, elit quis luctus posuere, sapien sapien lacinia nisi, nec ultrices felis nulla a odio. Aenean sed lacus elit. Nullam cursus tellus sem, non molestie risus lobortis sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae consectetur erat. Vestibulum cursus sem ac consequat consectetur.</Text>
          <Text>
          Mauris porttitor magna dolor, vel consequat felis eleifend non. Maecenas et libero magna. Curabitur at odio facilisis, accumsan nisl at, blandit tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi vitae metus tellus. Fusce leo erat, dignissim non gravida sit amet, blandit et metus. Etiam et finibus dolor, eget venenatis est. Vestibulum mattis est eu dolor pharetra semper. Suspendisse potenti.</Text>
          <Text>
          In ultricies vitae augue at convallis. Phasellus id ullamcorper dui. Proin sed euismod tellus. Quisque sagittis est eu pulvinar sagittis. Quisque posuere arcu ligula, ut faucibus eros placerat sit amet. Aenean sodales, justo eu pulvinar gravida, felis lorem ultrices odio, eu lacinia nibh ex a mauris. Quisque vestibulum risus orci, ac malesuada felis maximus at.</Text>
        </ScrollView>
        <ScrollView tabLabel='Android'>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a bibendum tellus. Nunc at felis eget lorem feugiat pellentesque et at velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel porta nulla, vel pellentesque tortor. Morbi vitae euismod leo. Morbi luctus, purus vitae mattis dignissim, justo ante dictum ante, id euismod nisl nibh nec arcu. Ut convallis sed tellus id posuere. Suspendisse pharetra dui sit amet nisi molestie pretium. Curabitur commodo risus sit amet turpis cursus, nec rutrum orci imperdiet. Aenean convallis sit amet justo a auctor. Sed a imperdiet libero, quis vestibulum tortor. Morbi ac turpis sit amet odio vehicula porttitor id sit amet purus. Etiam nec nulla a dolor ullamcorper pellentesque at ac augue. Curabitur in ipsum porttitor, ultricies ligula non, posuere est. Vivamus non elit vestibulum erat porttitor varius sit amet in ligula.</Text>
          <Text>Praesent ac velit urna. Nunc vitae felis dui. Suspendisse nec volutpat enim. Suspendisse potenti. Integer sed massa sollicitudin, blandit erat eu, consequat magna. Fusce vitae erat convallis, venenatis enim ac, cursus lorem. Nunc efficitur blandit purus vel condimentum. Quisque fermentum mi nec orci rhoncus, vitae convallis ex maximus. Nulla facilisis bibendum porttitor. Ut eu urna justo. Sed malesuada, ante interdum semper viverra, metus eros convallis risus, ac consequat ex justo et arcu.</Text>
          <Text>
          Nullam eu quam scelerisque, vehicula est a, semper eros. Sed a pulvinar sapien, eu ornare nulla. Nunc urna velit, placerat vitae risus in, varius pharetra dui. Ut fringilla, orci in consectetur finibus, nisl ante tempor nisl, vel tincidunt libero nibh non tortor. Praesent id ligula dignissim, luctus urna in, ullamcorper felis. Quisque blandit diam at ligula rhoncus dignissim vel a arcu. Sed facilisis accumsan augue ut varius. Phasellus auctor, elit quis luctus posuere, sapien sapien lacinia nisi, nec ultrices felis nulla a odio. Aenean sed lacus elit. Nullam cursus tellus sem, non molestie risus lobortis sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae consectetur erat. Vestibulum cursus sem ac consequat consectetur.</Text>
          <Text>
          Mauris porttitor magna dolor, vel consequat felis eleifend non. Maecenas et libero magna. Curabitur at odio facilisis, accumsan nisl at, blandit tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi vitae metus tellus. Fusce leo erat, dignissim non gravida sit amet, blandit et metus. Etiam et finibus dolor, eget venenatis est. Vestibulum mattis est eu dolor pharetra semper. Suspendisse potenti.</Text>
          <Text>
          In ultricies vitae augue at convallis. Phasellus id ullamcorper dui. Proin sed euismod tellus. Quisque sagittis est eu pulvinar sagittis. Quisque posuere arcu ligula, ut faucibus eros placerat sit amet. Aenean sodales, justo eu pulvinar gravida, felis lorem ultrices odio, eu lacinia nibh ex a mauris. Quisque vestibulum risus orci, ac malesuada felis maximus at.</Text>
        </ScrollView>
    </ScrollableTabView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // marginTop: Constants.statusBarHeight,
  },
});

export default Overlay;