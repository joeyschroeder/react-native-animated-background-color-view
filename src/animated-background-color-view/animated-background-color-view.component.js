import { Animated, Easing, StyleSheet, ViewPropTypes } from 'react-native';
import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { isEqual } from 'lodash';

const styles = StyleSheet.create({
  container: { flex: 1 }
});

export class AnimatedBackgroundColorView extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    color: PropTypes.string,
    delay: PropTypes.number,
    duration: PropTypes.number,
    easing: PropTypes.func,
    initialColor: PropTypes.string,
    style: ViewPropTypes.style
  };

  static defaultProps = {
    children: null,
    color: '#00aced',
    delay: 0,
    duration: 2400,
    easing: Easing.out(Easing.exp),
    initialColor: null,
    style: null
  };

  constructor(props) {
    super(props);
    const { initialColor, color } = props;

    const currentColor = initialColor || color;

    this.animation = new Animated.Value(0);
    this.state = { currentColor };

    this.currentColor = currentColor;
  }

  componentDidMount() {
    this.animate();
  }

  shouldComponentUpdate(nextProps) {
    const { children, color } = this.props;
    return !isEqual([children, color], [nextProps.children, nextProps.color]);
  }

  componentDidUpdate() {
    this.animate();
  }

  getBackgroundColor() {
    const { color } = this.props;

    const backgroundColor = this.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [this.currentColor, color]
    });

    return backgroundColor;
  }

  shouldAnimate() {
    const { color } = this.props;
    const { currentColor } = this.state;

    return color !== currentColor;
  }

  animate() {
    if (!this.shouldAnimate()) return;

    const { color, delay, duration, easing } = this.props;

    this.animation.setValue(0);

    Animated.timing(this.animation, {
      delay,
      duration,
      easing,
      toValue: 1
    }).start(() => {
      this.setState({ currentColor: color });
    });
  }

  render() {
    const { children, style } = this.props;

    const backgroundColor = this.getBackgroundColor();
    const viewStyle = [styles.container, style, backgroundColor];

    return <Animated.View style={viewStyle}>{children}</Animated.View>;
  }
}
