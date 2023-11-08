import PageWrapper from "./PageWrapper";
import React from "react";
import {ListItem, UnorderedList} from "@chakra-ui/react";


const HomeTab = () => {
    return (
        <PageWrapper>
            <UnorderedList>
                <ListItem>Lorem ipsum dolor sit amet</ListItem>
                <ListItem>Consectetur adipiscing elit</ListItem>
                <ListItem>Integer molestie lorem at massa</ListItem>
                <ListItem>Facilisis in pretium nisl aliquet</ListItem>
            </UnorderedList>
        </PageWrapper>
    )
}

export default HomeTab