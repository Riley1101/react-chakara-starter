import React from 'react'
import { Button, useColorMode, Center, Heading, Box, VStack } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
export default function Home() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <>
            <Box>
                <Center h="100vh">
                    <VStack spacing="8">
                        <Heading>
                            React Chakra UI Starter
                        </Heading>
                        <Button onClick={toggleColorMode} rightIcon={colorMode === "light" ? <SunIcon /> : <MoonIcon />}>
                            Toggle
                        </Button>
                    </VStack>
                </Center>
            </Box>
        </>
    )
}
