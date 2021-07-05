import React from 'react';

import { Box, chakra, Flex, Icon, useColorModeValue } from '@chakra-ui/react';

export const Hero = () => {
  const Feature = (props: { children: React.ReactNode }) => (
    <Flex alignItems="center" color={'black'}>
      <Icon
        boxSize={4}
        mr={1}
        color="green.600"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        ></path>
      </Icon>
      {props.children}
    </Flex>
  );
  return (
    <Box px={4} py={32} mx="auto">
      <Box
        w={{ base: 'full', md: 11 / 12, xl: 8 / 12 }}
        textAlign={{ base: 'left', md: 'center' }}
        mx="auto"
      >
        <chakra.h1
          mb={3}
          fontSize={{ base: '4xl', md: '5xl' }}
          fontWeight={{ base: 'bold', md: 'extrabold' }}
          color={useColorModeValue('gray.900', 'gray.100')}
          lineHeight="shorter"
        >
          Collateral Refinance Chit Fund
        </chakra.h1>
        <chakra.p
          mb={6}
          fontSize={{ base: 'lg', md: 'xl' }}
          color="gray.500"
          lineHeight="base"
        >
          {/* useColorModeValue(null, 'white') */}
          Chit fund that refinancne itself using the collaterals that has been
          put byy the users. The refinancing will undergone interest free
          mechanism that will help reduce the burden of monthly payment of the
          chit fund.
        </chakra.p>
        <chakra.p
          mb={6}
          fontSize={{ base: 'lg', md: 'xl' }}
          color="gray.500"
          lineHeight="base"
        >
          The chit fund is open, transparent, trustless, through the utilization of smart contracts.
        </chakra.p>
      </Box>
    </Box>
  );
};
