import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import LightContainer from './index';
import Light from '../Light';
import LightControls from '../LightControls';
import config  from '../../config';

describe('<LightContainer />', () => {
  let props;
  let wrapper;

  const createWrapper = (props) => {
    return shallow(<LightContainer {...props} />);
  }

  beforeEach(() => {
    props = {
      handleReset: jest.fn(),
      handleResetAll: jest.fn(),
    };
    wrapper = createWrapper(props);
  });

  test('renders correctly', () => {
    const tree = renderer
      .create(<LightContainer {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders one <LightControls /> component', () => {
    expect(wrapper.find(LightControls)).toHaveLength(1);
  });

  it('renders predefined number of <Light /> components', () => {
    expect(wrapper.find(Light)).toHaveLength(config.constants.LIGHT_QUANTITY);
  });

});