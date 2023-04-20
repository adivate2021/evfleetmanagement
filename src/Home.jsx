import React from 'react';
import { ChakraProvider, Heading, VStack, Image, Box, HStack, Stat, StatGroup, StatLabel, StatNumber, Container, CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import Car from "./sampleevcar.jpeg";
import Sidebar from "./Sidebar.jsx";
import { Chart as ChartJS } from 'chart.js/auto'
import { Line, Chart, Doughnut } from "react-chartjs-2";

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
                <HStack spacing="35px">
                    <Container border = '1px' align = "left">
                        Chargers Status
                        {/*<StatGroup>
                            <HStack>
                            <Stat>
                                <StatLabel>Available</StatLabel>
                                <StatNumber color = "green">15</StatNumber>
                            </Stat>

                            <Stat>
                                <StatLabel>Unavailable</StatLabel>
                                <StatNumber color = "red">15</StatNumber>
                            </Stat>
                            </HStack>
                        </StatGroup>*/}
                        <Container align="left">
                        {/*<CircularProgress value={50} color='green' thickness='12px'>
                            <CircularProgressLabel>50%</CircularProgressLabel>
                            </CircularProgress>*/}
                        <Doughnut
                            data = {{
                                labels: ["Available", "Charging", "Offline", "Coming Soon"],
                                datasets: [
                                    {
                                        data: [4, 2, 2, 2],
                                        responsive:true,
                                    },
                                ],
                            }}
                        />
                        </Container>
                    </Container>
                    <Container border = '1px'>
                        <Line
                            data={{
                            labels: ["January", "Februrary", "March", "April", "May", "June", "July"],
                            datasets: [
                                {
                                    label: "Energy Usage (MWh)",
                                    data: [7, 14, 20, 13, 25, 23,26],
                                    fill: false,
                                    borderWidth:4,
                                    backgroundColor: "orange",
                                    borderColor:'orange',
                                    responsive:true,
                                    title: "W",
                                    display: true
                                    },
                                ],
                                }}
                            />                        
                    </Container>
                </HStack>
            </VStack>
            </Container>
        </ChakraProvider>
    );
}
export default Home;