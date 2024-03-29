import { useEffect, useState } from "react";
import { BoxInput } from "../../../Components/BoxInput";
import { AlignContainer, ContainerForm, FlexWrapContainer, ScrollForm } from "./style";
import axios from "axios";



export function Home() {

const [cep, setCep] = useState("02737100")
const [logradouro, setLogradouro] = useState("")
const [bairro, setBairro] = useState("")
const [cidade, setCidade] = useState("")
const [estado, setEstado] = useState("")
const [uf, setUf] = useState("")



const myFunction = async () => {
  // run asynchronous tasks here
  if (cep != null && cep.length === 8 ) {
   const endereco = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)

   if (endereco.error) {
    alert("Verifique o CEP")
    return;
    
   }
   setBairro(endereco.data.bairro)
   setCidade(endereco.data.localidade)
   setEstado(endereco.data.uf)
   setLogradouro(endereco.data.logradouro)
   setUf(endereco.data.uf)
  }
};

//ERRO POR NAO USAR ARROW FUNCTION
// useEffect(myFunction(),[cep]);

useEffect(() => {
  myFunction();
},[cep]);
return(

    <AlignContainer>
    <ScrollForm>
        <ContainerForm>
          <BoxInput
          textLabel={"Informar CEP"}
          placeHolder={"Digite o seu CEP"}
          maxLenght={9}
          editable={true}
          keyType={"numeric"}
          fieldValue={cep}
          onChangeText={(tx) => {setCep(tx)}}
        />
          <BoxInput 
          textLabel={"Logradouro"}
          placeHolder={"Logradouro..."}
          editable={false}
          keyType={"text"}
          fieldValue={logradouro}
          // onChangeText={(tx) => {setLogradouro(tx)}}
        />
          <BoxInput 
          textLabel={"Bairro"}
          placeHolder={"Bairro..."}
          editable={false}
          keyType={"text"}
          fieldValue={bairro}
          // onChangeText={(tx) => {setBairro(tx)}}
        />
          <BoxInput 
          textLabel={"Cidade"}
          placeHolder={"Cidade..."}
          editable={false}
          keyType={"text"}
          fieldValue={cidade}
          // onChangeText={(tx) => {setCidade(tx)}}
        />
        <FlexWrapContainer>
          <BoxInput 
          fieldWidth={55}
          textLabel={"Estado"}
          placeHolder={"Estado..."}
          editable={false}
          keyType={"text"}
          fieldValue={estado}
          // onChangeText={(tx) => {setEstado(tx)}}
        />
          <BoxInput 
          fieldWidth={28}
          textLabel={"UF"}
          placeHolder={"UF..."}
          editable={false}
          keyType={"text"}
          fieldValue={uf}
          // onChangeText={(tx) => {setUf(tx)}}
        />
        </FlexWrapContainer>
        </ContainerForm>
    </ScrollForm>
    
    </AlignContainer>


)}