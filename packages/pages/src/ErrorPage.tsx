import * as React from 'react';
import { Button, Heading, SimpleGrid, VStack, Text } from '@chakra-ui/react';
import { Internal } from './Internal';

interface IProps {
  /** Obsługa przycisku "Ponów" */
  onRestore?(): void;
}

/** Strona 500 z przyciskiem `Ponów` */
export const ErrorPage = ({ onRestore }: IProps) => {
  return (
    <SimpleGrid placeItems="center" h="70vh">
      <VStack maxW="600px" textAlign="center" spacing={6} color="gray.700">
        <Internal style={{ height: 300 }} />
        <VStack spacing={4}>
          <Heading>Wystąpił błąd</Heading>
          <Text color="gray.600">
            Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w
            przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez
            nieznanego drukarza do wypełnienia tekstem próbnej książki.
          </Text>
        </VStack>
        {onRestore && (
          <Button onClick={() => onRestore()} colorScheme="green" minW="200px">
            Ponów
          </Button>
        )}
      </VStack>
    </SimpleGrid>
  );
};
