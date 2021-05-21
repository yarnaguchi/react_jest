import ReactDOM from 'react-dom';
import { App } from './App';

// eslint-disable-next-line jest/expect-expect
it('renders without crashing', () => {
  ReactDOM.render(<App />, document.createElement('div'));
});
