import React from 'react';

import { Box, Flex, Grid, Heading } from '@chakra-ui/react';

import { Hero, Pool } from './components';

export const Home = () => {
  return (
    <div>
      <Hero />
      <Box>
        <Heading size="lg" textAlign="center" py="8">Availabe Pool</Heading>
        <Flex>
          <Pool />
          <Pool />
          <Pool />
        </Flex>
      </Box>
    </div>
  )
}
