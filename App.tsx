import { Text } from "react-native";
import {
  Container,
  ContainerPerfil,
  Textcontainer,
  Imageperfil,
  ContainerLembrete
} from "./src/css/Home";

export default function App() {
  return (
    <Container>
      
      <ContainerPerfil>
        <Imageperfil source={{ uri: "https://github.com/cauesilva1.png" }} />
        <Textcontainer>Caue catone silva</Textcontainer>
      </ContainerPerfil>

      <ContainerLembrete>

      </ContainerLembrete>

    </Container>

  );
}
