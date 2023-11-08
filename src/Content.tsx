import {VStack} from "@chakra-ui/react";


const Content = ({children} : any) => {
    return (
        <VStack padding='2%'>
            {children}
        </VStack>
    )
}

export default Content