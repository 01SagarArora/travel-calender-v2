import NotFound from 'components/NotFound/NotFound';
import { FC, ReactElement } from 'react';

interface IProps {
  clearState: () => void
}

const Oops: FC<IProps> = (): ReactElement => (
  <>
    <div><NotFound/></div>
  </>
);

export { Oops };
