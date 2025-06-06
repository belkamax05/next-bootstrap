import { DefaultNextProps } from './DefaultNextProps';
import { ServerComponent } from './ServerComponent';

export type ServerPageComponent<TProps extends DefaultNextProps> = ServerComponent<TProps>;
