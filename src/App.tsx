import { VFC } from 'react';
import { Link } from './components/Link';

export const App: VFC<{}> = () => {
  return (
    <div>
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <Link href='https://reactjs.org' />
    </div>
  );
};
