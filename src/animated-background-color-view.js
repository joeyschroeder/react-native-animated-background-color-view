import { Animated, Easing, StyleSheet, ViewPropTypes } from 'react-native';
import React, { Component } from 'react';

import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export class AnimatedBackgroundColorView extends Component {

    constructor(props) {
        super(props);
        const { initialColor, color } = props;

        const currentColor = initialColor || color;

        this.animation = new Animated.Value(0);
        this.state = { currentColor };
    }

    componentDidMount = () => {
        this.animate();
    }

    componentDidUpdate = () => {
        this.animate();
    }

    animate = () => {
        if (!this.shouldAnimate()) return;

        const { color, delay, duration, easing } = this.props;

        this.animation.setValue(0);

        Animated.timing(this.animation, {
            delay,
            duration,
            easing,
            toValue: 1
        }).start(() => {
            this.setState({
                currentColor: color
            });
        });
    }

    getBackgroundColor = () => {
        const { color } = this.props;
        const { currentColor } = this.state;

        const backgroundColor = this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [
                currentColor,
                color
            ]
        });

        return { backgroundColor };
    }

    shouldAnimate = () => {
        const { color } = this.props;
        const { currentColor } = this.state;

        return color !== currentColor;
    }

    render = () => {
        const { children, style } = this.props;

        const viewStyle = [
            style,
            styles.container,
            this.getBackgroundColor()
        ];

        return(
            <Animated.View style={viewStyle}>
                {children}
            </Animated.View>
        );
    }
}

AnimatedBackgroundColorView.defaultProps = {
    children: null,
    color: '#00aced',
    delay: 0,
    duration: 2400,
    easing: Easing.out(Easing.exp),
    initialColor: null,
    style: null
};

AnimatedBackgroundColorView.propTypes = {
    children: PropTypes.oneOfType([ PropTypes.array, PropTypes.object ]),
    color: PropTypes.string,
    delay: PropTypes.number,
    duration: PropTypes.number,
    easing: PropTypes.func,
    initialColor: PropTypes.string,
    style: ViewPropTypes.style
};
