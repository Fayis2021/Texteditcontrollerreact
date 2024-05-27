import { useState } from "react";
import { Text } from "react-native";
//formvalidation
import * as Yup from 'yup'


const formvalidation=Yup.object().shape({
  passwordlength:Yup.number().min(4,"it should be minimum of 4 letters").max(12,"max of 12 characters").required("this is required")
})

const [password ,setPassword]=useState("");
const [isPasswordGenerated ,setisPasswordGenerated]=useState(false);

const [lowerCase ,lowerCaseSet]=useState(true);

const [upperCase ,upperCaseSet]=useState(false);
const [symbol ,symbolSet]=useState(false);
const [number ,useNumber]=useState(false);




const generatePasswordString = ( passwordlength:number) => {
let CharacterList=''

const UpperCaseList="ASDFGHJKLMNBVCXZQWERTYUIOP"
const lowerCaseList='asdfghjklmnbvcxzqwertyuiop'
const numbersList='0123456789'

if(upperCase){
  CharacterList +=UpperCaseList
}
if(lowerCaseList){
  CharacterList +=lowerCaseList
}
if(number){
  CharacterList +=number
}

const passwordfinal=createPassword(CharacterList,passwordlength)

setPassword(passwordfinal)
setisPasswordGenerated(true)

}
const createPassword = (character :String,passwordlength:number)=>{
 let result='';
 for (let i = 0; i < passwordlength; i++) {
  const characterIndex= Math.round(Math.random()*character.length)
  result +=character.charAt(characterIndex)
  
 }
 return result;
}

const resetPassword=()=>{
  setPassword('')
  setisPasswordGenerated(false)
  lowerCaseSet(true)
  upperCaseSet(false)
  useNumber(false)
}


const  App = () =>{
return(
 <Text>
  dn cfkd
 </Text>
);
}

export default App