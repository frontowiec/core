import * as React from 'react';

interface IProps {
  name: string;
  borderW?: number;
}

export const Form = ({ name, borderW = 1 }: IProps) => {
  return <input type="text" name={name} style={{ borderWidth: borderW }} />;
};
