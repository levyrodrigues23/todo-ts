import Text from "./components/text";
import PlusIcon from "./assets/icons/plus.svg?react";
import Icon from "./components/icon";
import PencilIcon from "./assets/icons/pencil.svg?react";
import SpinnerIcon from "./assets/icons/spinner.svg?react";
import Badge from "./components/badge";
import Button from "./components/button";
import ButtonIcon from "./components/button-icon";
import TrashIcon from "./assets/icons/trash.svg?react"
import InputText from "./components/input-text.";
import Card from "./components/card";
import Container from "./components/container";

export default function App() {


  return (

    <Container>
      <div className="grid gap-10">
        <div className="flex flex-col gap-2 ">
          <Text variant={"body-sm-bold"} className="text-green-base text-2xl">Olá, mundo!</Text>
          <Text variant={"body-md"} className="text-green-base text-2xl">Olá, mundo!</Text>
          <Text variant={"body-md-bold"} className="text-green-base text-2xl">Olá, mundo!</Text>
          <Text className="text-green-base text-2xl">levar o cachorro para passear</Text>



        </div>

        <div className="flex gap-10">
          <Icon svg={PlusIcon} />
          <Icon svg={PencilIcon} className="fill-green-base" />
          <Icon svg={SpinnerIcon} animate />
        </div>

        <div>
          <Badge variant={"secondary"}>5</Badge>
          <Badge variant={"primary"}>2 de 5</Badge>
        </div>

        <div>
          <Button icon={PlusIcon}>Nova Tarefa</Button>
        </div>


        <div>
          <ButtonIcon icon={PencilIcon} variant="secondary" />
          <ButtonIcon icon={TrashIcon} variant="tertiary" />
          <ButtonIcon icon={TrashIcon} variant="primary" />


        </div>
        <div>
          <InputText />
        </div>


        <div>
          <Card size={"md"}>Card teste</Card>
        </div>
      </div>
    </Container>
  )
}

