import { BoxInput } from "../../../Components/BoxInput";
import { ContainerForm, ScrollForm } from "./style";

export function Home() {
return(

    <>
    <ScrollForm>
        <ContainerForm>
          <BoxInput textLabel={"Informe o seu CEP"}
         
          placeHolder={"Digite"}
        />
        </ContainerForm>
    </ScrollForm>
    
    </>


)}