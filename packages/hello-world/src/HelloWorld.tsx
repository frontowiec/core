import * as React from 'react';
import { Heading } from '@chakra-ui/react';

interface IProps {
  /** Change text color*/
  color?: string;
}

/** This is `just` an example. */
export const HelloWorld = ({ color = "green" }: IProps) => {
  return (
    <Heading
      color={color}
      // sx={{ '@keyframes blinker': '50% { opacity: 0; }' }}
      // animation="blinker 1s linear infinite"
    >
      HelloWorld
    </Heading>
  );
};

