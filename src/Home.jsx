import React from 'react';
import { ChakraProvider, Heading, VStack, Image, Box, HStack, Stat, StatGroup, StatLabel, StatNumber, Container, CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import Car from "./sampleevcar.jpeg";
import Sidebar from "./Sidebar.jsx";
function Home() {
    return (
        <ChakraProvider>
            <Sidebar />
            <VStack>
                <Heading>
                    EV Fleet Management
                </Heading>
                <Box boxSize='sm'>
                    <Image src={Car} />
                </Box>
            </VStack>
            <Container>
            <VStack alignItems='start'>
                <HStack>
                    <Container border = '1px'>
                        Chargers Status
                        <StatGroup>
                            <HStack>
                            <Stat>
                                <StatLabel>Available</StatLabel>
                                <StatNumber color = "green">15</StatNumber>
                                {/*<StatHelpText>
                                <StatArrow type='increase' />
                                23.36%
                                </StatHelpText>*/}
                            </Stat>

                            <Stat>
                                <StatLabel>Unavailable</StatLabel>
                                <StatNumber color = "red">15</StatNumber>
                                {/*<StatHelpText>
                                <StatArrow type='decrease' />
                                9.05%
                                </StatHelpText>*/}
                            </Stat>
                            </HStack>
                        </StatGroup>
                        <Container align="left">
                        <CircularProgress value={50} color='green' thickness='12px'>
                            <CircularProgressLabel>50%</CircularProgressLabel>
                        </CircularProgress>
                        </Container>
                    </Container>
                </HStack>
            </VStack>
            </Container>
        </ChakraProvider>
    );
}
export default Home;