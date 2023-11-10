import {Box, Text, VStack} from "@chakra-ui/react";
import {Link} from 'react-scroll';
import {useState} from "react";


interface SidebarItemParam {
    id: string
    label: string
}

const Sidebar = () => {
    const sidebarItems = [
        {id: 'about', label: 'About'},
        {id: 'experience', label: 'Experience'},
        {id: 'education', label: 'Education'},
        {id: 'skills', label: 'Skills'},
        {id: 'interests', label: 'Interests'},
        {id: 'awards', label: 'Awards'},
    ]

    const [watchLink, setWatchLink] = useState('home')

    const handleSetActive = (to : string) => {
        console.log(to);
        setWatchLink(to);
    };

    const SidebarItem = (param : SidebarItemParam) => {
        return (
            <Box position='relative' display='flex' margin='0'>
                <Link
                    to={param.id}
                    href={`#${param.id}`}
                    className={watchLink === param.id ? 'active' : ''}
                    onSetActive={handleSetActive}
                    activeClass='active'
                    spy
                    smooth
                    offset={-50}
                    duration={500}
                >
                    <Text as='h1' fontSize='2xl' _hover={{ fontWeight: 'bold' }}>
                        {param.label}
                    </Text>
                </Link>
            </Box>
        )
    }

    return (
        <Box width='250px' position='fixed' left='0' top='0' backgroundColor='tomato' color='white' padding='20px' height='100vh'>
            <VStack>
                {sidebarItems.map((item, index) => {
                    return (
                        <SidebarItem key={index} id={item.id} label={item.label}/>
                    )
                })}
            </VStack>
        </Box>
    )
}

export default Sidebar