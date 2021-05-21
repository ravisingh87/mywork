import { render, screen } from '@testing-library/react';
import App from './App';
import renderer from 'react-test-renderer'

  it("renders correctly", () => {
    const wrapper = renderer(<App />);
    expect(wrapper).toMatchSnapshot();
  });

