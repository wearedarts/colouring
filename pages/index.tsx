import Head from 'next/head';
import styles from '../styles/Home.module.css';
import styled from 'styled-components';

import { ColourButton } from '../components/ColourButton';
import { ColouringImage } from '../components/ColouringImage';
import { useState } from 'react';

const ButtonRow = styled.div`
  display: flex;
`;

export default function Home() {
  const [colour, setColour] = useState('green');

  const handleChange = (col: string) => {
    setColour(col);
  };

  return (
    <main className={styles.container}>
      <Head>
        <title>Darts Colouring</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <ButtonRow>
        <ColourButton
          label='Orange'
          clicker={handleChange}
          colour='#f47e44'
          currentColour={colour}
        />
        <ColourButton
          label='Blue'
          clicker={handleChange}
          colour='#4a61ac'
          currentColour={colour}
        />
        <ColourButton
          label='Maroon'
          clicker={handleChange}
          colour='#522f43'
          currentColour={colour}
        />
        <ColourButton
          label='Teal'
          clicker={handleChange}
          colour='#4bbab6'
          currentColour={colour}
        />
        <ColourButton
          label='White'
          clicker={handleChange}
          colour='#f5ece5'
          currentColour={colour}
        />
        <ColourButton
          label='Pink'
          clicker={handleChange}
          colour='#f7a6b1'
          currentColour={colour}
        />
      </ButtonRow>

      <ColouringImage currentColour={colour} />
    </main>
  );
}
