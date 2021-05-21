import { render} from '@testing-library/react';
import App from './App';


  it("renders correctly", () => {
    const wrapper = render(<App />);
    expect(wrapper).toMatchSnapshot();
  });

