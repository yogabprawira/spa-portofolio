import {Box, Text} from "@chakra-ui/react";
import {Element} from 'react-scroll';


const PageWrapper = ({id, label, children} : any) => {
    return (
        <Box minWidth='800px' minHeight='100vh' padding='20px'>
            <Element name={id}>
                <Text as='h1' fontSize='4xl'>{label}</Text>
            </Element>
            {children}
        </Box>
    )
}

export default PageWrapper