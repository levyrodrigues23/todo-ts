import Text from "./components/text";
import PlusIcon from "./assets/icons/plus.svg?react";
import Icon from "./components/icon";
import PencilIcon from "./assets/icons/pencil.svg?react";
import SpinnerIcon from "./assets/icons/spinner.svg?react";

export default function App() {


  return (
    <div className="grid gap-3">
    <div className="flex flex-col gap-2 ">
      <Text variant={"body-sm-bold"} className="text-green-base text-2xl">Olá, mundo!</Text>
      <Text variant={"body-md"} className="text-green-base text-2xl">Olá, mundo!</Text>
      <Text variant={"body-md-bold"} className="text-green-base text-2xl">Olá, mundo!</Text>
      <Text className="text-green-base text-2xl">levar o cachorro para passear</Text>


     
    </div>

    <div className="flex gap-1">
       <Icon svg={PlusIcon} className="fill-green-base"/>
       <Icon svg={PencilIcon} className="fill-green-base"/>
       <Icon svg={SpinnerIcon} className="fill-green-base"/>
      </div>
    </div>

  )
}

