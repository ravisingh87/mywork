import { render, screen } from '@testing-library/react';
import App from './App';

  it("renders correctly", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

