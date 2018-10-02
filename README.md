[![npm](https://img.shields.io/npm/v/react-native-animated-background-color-view.svg)](https://www.npmjs.com/package/react-native-animated-background-color-view)
[![npm downloads](https://img.shields.io/npm/dt/react-native-animated-background-color-view.svg)](https://www.npmjs.com/package/react-native-animated-background-color-view.svg)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)]()
[![GitHub issues](https://img.shields.io/github/issues/joeyschroeder/react-native-animated-background-color-view.svg)](https://github.com/joeyschroeder/react-native-animated-background-color-view/issues)
[![GitHub stars](https://img.shields.io/github/stars/joeyschroeder/react-native-animated-background-color-view.svg)](https://github.com/joeyschroeder/react-native-animated-background-color-view/stargazers)

# React Native Animated Background Color View
A modified React Native `View` component that animates it's `backgroundColor` when `color` prop changes. **Works on iOS & Android.**

## Example
![react-native-animated-background-color-view](https://github.com/joeyschroeder/react-native-animated-background-color-view/master/demo.gif "react-native-animated-background-color-view")

## Installation
`npm install react-native-animated-background-color-view --save`

## Usage
Import **AnimatedBackgroundColorView** component

```
import { AnimatedBackgroundColorView } from 'react-native-animated-background-color-view';
```

Use as follows:

```
<AnimatedBackgroundColorView color='#00aced' />
```
Each time the `color` prop value changes the `backgroundColor` will use the [React Native timing animation](https://facebook.github.io/react-native/docs/animated.html#timing) to animate from the previous value to the current value.

### Animate On Component Mount
You can also specifiy an initial color for the background color to animate from when the component mounts:
```
<AnimatedBackgroundColorView
  color='#00aced'
  initialColor='red'
/>
```
On mount the component `backgroundColor` will be `blue` and then animate to `#00aced`.

### Using the `children` Prop
The `AnimatedBackgroundColorView` component works just like the standard React Native `View` component.  `AnimatedBackgroundColorView` is designed to be nested inside other `View` components or other `AnimatedBackgroundColorView` components and can have 0 to many children of any type.

```
class AnimatedBackgroundColorViewWithText extends Component {
  render() {
    return (
      <AnimatedBackgroundColorView
        color='#00aced'
        initialColor='red'
      >
        <Text>Hello, world!</Text>
      </AnimatedBackgroundColorView>
    );
  }
}
```

## Configuration
You can configure `AnimatedBackgroundColorView` by passing the following props:

| prop | type/valid values | default | description |
| - | - | - | - |
| color | string | `'#00aced'` | the color value to which the component `backgroundColor` will animate |
| delay | number | `0` | the length in milliseconds the component will wait before animating to the next `color` |
| duration | number | `2400` | the length in milliseconds the timing animation will last |
| easing | React Native [Easing function](https://facebook.github.io/react-native/docs/easing.html) | `Easing.out(Easing.exp)` | the easing function to define animation curve |
| initialColor | string | `null` | the color value from which the component `backgroundColor` will animate on mount |
| style | React Native [ViewPropTypes.style](https://facebook.github.io/react-native/docs/style.html) | `null` | additional styles applied to the component |

## Built With
* [React Native](https://facebook.github.io/react-native/) - A framework for building native apps using React

## Versioning
I use [SemVer](https://docs.npmjs.com/getting-started/semantic-versioning) for versioning. For the versions available, see the [tags on this repository](https://github.com/joeyschroeder/react-native-animated-background-color-view/tags).

## Authors
* **Joey Schroeder** - *Initial work* - [joeyschroeder.com](https://joeyschroeder.com)

See also the list of [contributors](https://github.com/joeyschroeder/react-native-animated-background-color-view/graphs/contributors) who participated in this project.

## Contributing
Please submit a pull request with any features/fixes for the project. I apologize in advance for the slow action on pull requests and issues. Please follow the [ESLint rules](https://github.com/joeyschroeder/react-native-animated-background-color-view/blob/master/.eslintrc.json) for the project.

## License
This project is licensed under the MIT License - see the [MIT Open Source Initiative](https://opensource.org/licenses/MIT) for details.

## Acknowledgments
Hat tip to anyone who's code was used! 🤠
