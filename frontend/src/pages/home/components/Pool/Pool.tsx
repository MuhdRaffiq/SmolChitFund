import React from 'react';

import { Box, Heading, Text, VStack } from '@chakra-ui/react';

export const Pool = () => {
  return (
    <Box maxW="md" border="1px" borderColor="black" m={4} p="8">
      <Heading size="md" textAlign="center" pb="8">Pool 1</Heading>
      <VStack spacing={4} align="start">
        <Box>
          <Text>Max Pooled Fund Received: 50 USD</Text>
          <Text>Required Collateral amount: 0.114 ETH</Text>
          <Text>Max Participants: 5</Text>
        </Box>
        <Box>
          <Text>Current Participants: 5</Text>
          <Text>Current Collateral: 0.114 ETH</Text>
          <Text>Monthly commitment: 10 USD</Text>
          <Text>Turn Bid: Every first week of month</Text>
        </Box>
        <Box>
          <Text>Refinance Mechanism</Text>
          <Text>ETH price during deposit: 2000 USD</Text>
          <Text>Total LUSD received: 250</Text>
          <Text>Percentage in Uniswap LP: 20%</Text>
          <Text>Percentage in Stability Pool: 80%</Text>
          <Text>Staked LQTY: 30</Text>
        </Box>
        <Box>
          <Text>Refinancing: 25 USD per month</Text>
          <Text>Monthly commitment after refinanceing: 5 USD</Text>
        </Box>
      </VStack>
    </Box>
  );
};
