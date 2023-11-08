import {Box, Text} from "@chakra-ui/react";
import {Element} from 'react-scroll';


const PageWrapper = ({id, label, children} : any) => {
    return (
        <Box minHeight='100vh'>
            <Element name={id}>
                <Text as='h1' fontSize='2xl'>{label}</Text>
            </Element>
            {children}
        </Box>
    )
}

export default PageWrapper