import Text from "./components/text";
import PlusIcon from "./assets/icons/plus.svg?react";


export default function App() {


  return (
    <div className="grid gap-3">
    <div className="flex flex-col gap-2 ">
      <Text variant={"body-sm-bold"} className="text-green-base">Olá, mundo!</Text>
      <Text variant={"body-md"} className="text-green-base">Olá, mundo!</Text>
      <Text variant={"body-md-bold"} className="text-green-base">Olá, mundo!</Text>
      <Text className="text-green-base">levar o cachorro para passear</Text>


      <div className="flex gap-1">
      <PlusIcon className="fill-green-base"/>
      </div>
    </div>
</div>
  )
}

