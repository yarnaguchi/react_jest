import { VFC } from 'react';
import { Link } from './components/Link/Link';
import { Display } from './components/Display/Display';

export const App: VFC<{}> = () => {
  return (
    <div>
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <Link href='https://reactjs.org' />
      <Display url={'https://www.google.com'} />
    </div>
  );
};
