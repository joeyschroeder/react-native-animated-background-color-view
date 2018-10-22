import { AnimatedBackgroundColorView } from './animated-background-color-view.component';
import React from 'react';
import { create } from 'react-test-renderer';
import { shallow } from 'enzyme';

describe('<AnimatedBackgroundColorView />', () => {
  describe('this.componentDidMount', () => {
    const component = shallow(<AnimatedBackgroundColorView />);
    const animate = jest.fn();

    component.instance().animate = animate;
    component.instance().componentDidMount();

    it('should call this.animate when called', () => {
      expect(animate).toHaveBeenCalled();
    });
  });

  describe('this.componentDidUpdate', () => {
    const component = shallow(<AnimatedBackgroundColorView />);
    const animate = jest.fn();

    component.instance().animate = animate;
    component.instance().componentDidUpdate();

    it('should call this.animate when called', () => {
      expect(animate).toHaveBeenCalled();
    });
  });

  it('should render correctly', () => {
    const component = create(<AnimatedBackgroundColorView />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
