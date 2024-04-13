import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    padding-top: 70px;
    background-color: #fff;
    background-color: #F7F9F9;
`;

export const ContainerLembrete = styled.View`
    align-items: center;
    justify-content: space-between;
    margin-top: 50px;
    flex-direction: row;
    background-color: #F0F3F4;
    border-radius: 40px 40px 0 0;
    border: 1px solid #000000;
    width: 100%;
    height: 100%;
`;

export const ContainerPerfil = styled.View`
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    flex-direction: row;
    background-color: #F1F4F5;
    border-radius: 40px;
    border: 1px solid #000000;
    width: 90%;
    height: 100px;
`;

export const Textcontainer = styled.Text`
    font-size: 24px;
`;

export const Imageperfil = styled.Image`
    width: 70px;
    height: 70px;
    border-radius: 30px;
    border: 1px solid #000000;
`;