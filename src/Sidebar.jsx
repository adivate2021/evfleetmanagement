import React from 'react';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Input,
    useDisclosure,
    ButtonGroup
  } from '@chakra-ui/react'
function Sidebar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <>
        <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
            Menu
        </Button>
        <Drawer size = 'xs'
            isOpen={isOpen}
            placement='left'
            onClose={onClose}
            finalFocusRef={btnRef}
        >
            <DrawerOverlay />
            <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>

            <DrawerBody>
                <Button> Dashboard </Button>
                <Button>Manage your Vehicles</Button>
            </DrawerBody>

            {/*<DrawerFooter>
                <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
                </Button>
                <Button colorScheme='blue'>Save</Button>
            </DrawerFooter>*/}
            </DrawerContent>
        </Drawer>
        </>
    )
}
export default Sidebar;