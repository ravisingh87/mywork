import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  it("renders correctly", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
