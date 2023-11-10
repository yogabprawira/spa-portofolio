import {VStack} from "@chakra-ui/react";


const Content = ({children} : any) => {
    return (
        <VStack paddingLeft='20px'>
            {children}
        </VStack>
    )
}

export default Content