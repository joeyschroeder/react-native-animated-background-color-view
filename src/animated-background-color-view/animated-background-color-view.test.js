import { AnimatedBackgroundColorView } from './animated-background-color-view.component';
import React from 'react';
import { create } from 'react-test-renderer';

describe('<AnimatedBackgroundColorView />', () => {
  it('should render correctly', () => {
    const component = create(<AnimatedBackgroundColorView />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
