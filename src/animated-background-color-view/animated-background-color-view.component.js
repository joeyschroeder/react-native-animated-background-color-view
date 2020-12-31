import { Animated, Easing, ViewPropTypes } from 'react-native';
import React, { Component } from 'react';

import Color from 'color';
import PropTypes from 'prop-types';
import isEqual from 'lodash.isequal';

export class AnimatedBackgroundColorView extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    color: PropTypes.string,
    delay: PropTypes.number,
    duration: PropTypes.number,
    easing: PropTypes.func,
    initialColor: PropTypes.string,
    style: ViewPropTypes.style,
  };

  static defaultProps = {
    children: null,
    color: '#00aced',
    delay: 0,
    duration: 2400,
    easing: Easing.out(Easing.exp),
    initialColor: null,
    style: null,
  };

  constructor(props) {
    super(props);
    const { initialColor, color } = props;

    const currentColor = initialColor || color;

    this.animation = new Animated.Value(0);
    this.currentColor = currentColor;
  }

  componentDidMount() {
    this.animate();
  }

  shouldComponentUpdate(nextProps) {
    const { children, color } = this.props;
    return !isEqual([color, children], [nextProps.color, nextProps.children]);
  }

  componentDidUpdate() {
    this.animate();
  }

  getBackgroundColor() {
    const { color } = this.props;

    const backgroundColor = this.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [this.currentColor, color],
    });

    return backgroundColor;
  }

  getCurrentColor(animationFinished = true, mixValue = 1) {
    const { color } = this.props;

    if (animationFinished) return color;
    return this.getMixedColorValue(mixValue);
  }

  getMixedColorValue(mixValue = 1) {
    const { color } = this.props;

    const nextColor = Color(color);
    const currentColor = Color(this.currentColor);

    const mixedColor = currentColor.mix(nextColor, mixValue).hex();

    return mixedColor;
  }

  shouldAnimate() {
    const { color } = this.props;
    return color !== this.currentColor;
  }

  stopAnimationAndReturnAnimationValue() {
    this.animation.stopAnimation((value) => {
      return value;
    });
  }

  animate() {
    if (!this.shouldAnimate()) return;

    const { delay, duration, easing } = this.props;

    const stopValue = this.stopAnimationAndReturnAnimationValue();
    this.animation.setValue(0);

    Animated.timing(this.animation, {
      delay,
      duration,
      easing,
      toValue: 1,
      useNativeDriver: false,
    }).start(({ finished }) => {
      this.currentColor = this.getCurrentColor(finished, stopValue);
    });
  }

  render() {
    const { children, color, delay, duration, easing, initialColor, style, ...other } = this.props;

    const backgroundColor = this.getBackgroundColor();
    const viewStyle = [style, { backgroundColor }];

    return (
      <Animated.View {...other} style={viewStyle}>
        {children}
      </Animated.View>
    );
  }
}
