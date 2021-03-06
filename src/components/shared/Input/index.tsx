import { useEffect, useState } from 'react';

import { useFormContext } from 'react-hook-form';

import InputProps from './dtos/InputProps';

import { Container } from './styles';

export function Input({
  name,
  defaultValue,
  icon: Icon,
  iconSize = 20,
  ...rest
}: InputProps) {
  const { register, unregister, watch, setValue } = useFormContext();

  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    register(name);

    setValue(name, defaultValue);

    return () => {
      unregister(name);
    };
  }, [name, defaultValue, register, unregister, setValue]);

  const fieldValue = watch(name);

  function handleInputBlur() {
    setIsFocused(false);
  }

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputChange(value: string) {
    setValue(name, value);
  }

  return (
    <Container isFilled={!!fieldValue} isFocused={isFocused}>
      {Icon && <Icon size={iconSize} />}
      <input
        name={name}
        defaultValue={defaultValue}
        onBlur={handleInputBlur}
        onFocus={handleInputFocus}
        onChange={event => handleInputChange(event.currentTarget.value)}
        autoComplete="new-password"
        {...rest}
      />
    </Container>
  );
}
