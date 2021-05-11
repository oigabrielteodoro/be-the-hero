import { ComponentType, InputHTMLAttributes } from 'react';

import { IconBaseProps } from 'react-icons';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: ComponentType<IconBaseProps>;
  iconSize?: number;
}

export default InputProps;
