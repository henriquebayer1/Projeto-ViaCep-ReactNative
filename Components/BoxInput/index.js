import { Input } from "../Input"
import { Label } from "../Label"
import { FieldContent } from "./styles"

export const BoxInput = ({
fieldWidth = 100, 
editable = false,
textLabel,
placeHolder,
fieldValue = null,
onChangeText = null,
keyType = 'default',
maxLenght

}) => {

    return(
        <FieldContent fieldWidth={fieldWidth}>
            <Label
            textLabel={textLabel}/>
            <Input
            placeholder={placeHolder}
            editable={editable}
            keyType={keyType}
            maxLength={maxLenght}
            fieldValue={fieldValue}
            onChangeText={onChangeText}/>
        </FieldContent>
    )
}