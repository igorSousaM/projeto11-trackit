import styled from "styled-components"
import { UserContext } from "../provider/UserContext"
import { useContext } from "react"

export default function Header(params) {

    const {userData} = useContext(UserContext)


    return (
        <StyledHeader>
            <p>Trackit</p>
            <img data-identifier="avatar" src={userData.image} alt="profile" />
        </StyledHeader>
    )
};


const StyledHeader = styled.header`   
    position: absolute;
    width: 100%;
    height: 70px;
    left: 0px;
    top: 0px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    

    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    
    p{
    margin-left: 18px;
    
    width: 97px;
    height: 49px;

    font-family: 'Playball', cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 38.982px;
    line-height: 49px;

    color: #FFFFFF;
    }

    img{
    width: 51px;
    height: 51px;

        margin-right: 18px;

    background: url(image.png);
    border-radius: 98.5px;  
    }
`