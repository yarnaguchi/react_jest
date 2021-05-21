import { useEffect, useState, VFC } from 'react';
import { api } from '../../utils/api';

interface Props {
  url?: string;
}

export const Display: VFC<Props> = (props) => {
  const { url } = props;
  const [data, setData] = useState<string>('');

  useEffect(() => {
    (async () => {
      const response = await api();
      setData(response.text);
    })();
  }, [url]);

  if (props.url)
    return (
      <div>
        <p>data</p>
        <pre>{data}</pre>
      </div>
    );
  else return <></>;
};
