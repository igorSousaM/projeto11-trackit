import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/img/logo.png"

export default function RegistrationPage() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [image, setImage] = useState("")

    const navigate = useNavigate()

    function registrationCompleted(event) {
        event.preventDefault()

        const body = {
            email: email,
            password: password,
            name: name,
            profilePicture: image
        }

        console.log(body)

        navigate("/")
    }

    return (
        <StyledScreen>
            <img src={logo} alt="logo"></img>
            <Titulo>Trackit</Titulo>
            <Formulario onSubmit={registrationCompleted}>
                <input required data-identifier="input-email" value={email} type="email" placeholder="email" onChange={e => setEmail(e.target.value)} />
                <input required data-identifier="input-password" value={password} type="password" placeholder="senha" onChange={e => setPassword(e.target.value)} />
                <input required data-identifier="input-name" value={name} type="text" placeholder="nome" onChange={e => setName(e.target.value)} />
                <input required data-identifier="input-photo" value={image} type="url" placeholder="foto" onChange={e => setImage(e.target.value)} />
                <button type="submit">Cadastrar</button>
            </Formulario>
            <Link to="/"><p data-identifier="back-to-login-action">Ja tem uma conta? Faça login</p></Link>
        </StyledScreen>
    )
};

const StyledScreen = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    img{
        width:160px ;
        height: 90px;
    }

    p{
width: 232px;
height: 17px;

font-family: 'Lexend Deca', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 13.976px;
line-height: 17px;
text-align: center;
text-decoration-line: underline;

color: #52B6FF;
}
    `

const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input{
box-sizing: border-box;

width: 303px;
height: 45px;

background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 5px;

font-family: 'Lexend Deca', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;

//color: #DBDBDB;
color:red;
}

button{
width: 303px;
height: 45px;

background: #52B6FF;
border-radius: 4.63636px;

font-family: 'Lexend Deca', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 20.976px;
line-height: 26px;
text-align: center;

color: #FFFFFF;
}
    `

const Titulo = styled.h1`
    width: 180px;
    height: 86.23px;
    
    margin: 0px;
    
    font-family: 'Playball', cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 68.982px;
    line-height: 86px;
    
    /* identical to box height */
    text-align: center;
    
    color: #126BA5
    `
