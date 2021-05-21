import { VFC } from 'react';

interface Props {
  href?: string;
}

export const Link: VFC<Props> = (props) => {
  if (props.href)
    return (
      <a {...props} target='_blank' rel='noopener noreferrer'>
        Link to {props.href}.
      </a>
    );
  else return <></>;
};
