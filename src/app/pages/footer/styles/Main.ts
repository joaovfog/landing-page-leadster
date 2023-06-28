import styled from "styled-components";
import { LinkedinWithCircle } from "@styled-icons/entypo-social/LinkedinWithCircle";
import { FacebookWithCircle } from "@styled-icons/entypo-social/FacebookWithCircle";
import { InstagramWithCircle } from "@styled-icons/entypo-social/InstagramWithCircle";

export const Main = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const MainLinks = styled.div`
    display: flex;
    flex-direction: column;
`

export const Cases = styled.div`
    display: flex;
    flex-direction: column;
`

export const Materials = styled.div`
    display: flex;
    flex-direction: column;
`

export const FollowLeadster = styled.div`
    display: flex;
    flex-direction: column;
`

export const HorizontalLine = styled.div`
    width: 100%;
    height: 1px;
    background: rgba(99, 99, 99, 0.2);
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    margin-top: 40px;
`

// icons
export const LinkedinIcon = styled(LinkedinWithCircle)`
    width: 25px;
    height: auto;
    color: lightgrey;
`

export const FacebookIcon = styled(FacebookWithCircle)`
    width: 25px;
    height: auto;
    color: lightgrey;
`

export const InstagramIcon = styled(InstagramWithCircle)`
    width: 25px;
    height: auto;
    color: lightgrey;
`
