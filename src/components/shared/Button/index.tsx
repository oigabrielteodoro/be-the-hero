import ButtonProps from './dtos/ButtonProps';

import { Container } from './styles';

export function Button({ children, ...rest }: ButtonProps) {
  return <Container {...rest}>{children}</Container>;
}
