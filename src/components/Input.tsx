import React, { memo } from 'react';
import type { TextInputProps } from 'react-native-paper';
import { TextInput } from 'react-native-paper';

const InputComponent: React.FC<TextInputProps> = props => {
  return <TextInput mode="outlined" {...props} />;
};

export const Input = memo(InputComponent);
