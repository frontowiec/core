import * as React from 'react';

interface IBaseProps {
  width?: number;
  height?: number;
  /** The color scheme of the button—one of the colors from theme.colors. */
  colorScheme?: string;
  color?: string;
}

interface IProps extends IBaseProps {
  primary: boolean;
  label: string;
}

/** The `Button` component is used to trigger an action or event, such as submitting a form,
 * opening a dialog, canceling an action, or performing a delete operation... */
export const Button = ({
  primary,
  label,
  colorScheme = '#553C9A',
  color = '#FFF',
}: IProps) => {
  if (primary) {
    return <button style={{ background: colorScheme, color }}>{label}</button>;
  }
  return <button>{label}</button>;
};
