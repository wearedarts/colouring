import { Colour } from './types';

export const colourFilter = (colour: Colour) => {
  return (
    colour.name.includes('3') ||
    colour.name.includes('5') ||
    colour.name.includes('7')
  );
};
