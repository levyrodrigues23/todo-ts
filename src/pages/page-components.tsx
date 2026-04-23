import Badge from "../components/badge";
import Button from "../components/button";
import ButtonIcon from "../components/button-icon";
import Card from "../components/card";
import Container from "../components/container";
import Icon from "../components/icon";
import InputText from "../components/input-text.";
import Skeleton from "../components/skeleton";
import Text from "../components/text";
import PlusIcon from "../assets/icons/plus.svg?react";
import PencilIcon from "../assets/icons/pencil.svg?react";
import SpinnerIcon from "../assets/icons/spinner.svg?react";
import TrashIcon from "../assets/icons/trash.svg?react"
import InputCheckbox from "../components/input-checkbox";

export default function PageComponents() {


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
                    <InputCheckbox/>
                </div>

                <div className="flex gap-1">
                    <Badge variant={"secondary"}>5</Badge>
                    <Badge variant={"primary"}>2 de 5</Badge>
                    <Badge loading >5</Badge>
                </div>

                <div>
                    <Button icon={PlusIcon}>Nova Tarefa</Button>
                </div>


                <div className="flex gap-1">
                    <ButtonIcon icon={PencilIcon} variant="secondary" />
                    <ButtonIcon icon={TrashIcon} variant="tertiary" />
                    <ButtonIcon icon={TrashIcon} variant="primary" />
                    <ButtonIcon icon={TrashIcon} loading />


                </div>
                <div>
                    <InputText />
                </div>


                <div>
                    <Card size={"md"}>Card teste</Card>
                </div>
            </div>

            <div className="space-y-2">
                <Skeleton className="h-6" />
                <Skeleton className="h-6" />
                <Skeleton className="w-96 h-6" />
            </div>
        </Container>
    )
}