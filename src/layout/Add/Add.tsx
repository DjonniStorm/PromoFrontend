import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import cn from "classnames";
import style from "./Add.module.css";
import { FormEvent } from "react";
function Add() {
    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(e);
    };
    return (
        <>
            <form onSubmit={onSubmit} className={cn(style['form'])}>
                <Input
                    type="text"
                    placeholder="заголовок..."
                    id="header"
                    labelText="Введите заголовок:"
                />
                <Input
                    id="description"
                    type="text"
                    placeholder="описание..."
                    labelText="Опишите:"
                />
                <Input
                    id="creation"
                    type="datetime-local"
                    labelText="Введите время создания:"
                />
                <Input
                    id="creation"
                    type="datetime-local"
                    labelText="Введите время изменения:"
                />
                <Input
                    id="availability"
                    type="text"
                    placeholder="тутуту..."
                    labelText="Маркер выполнения:"
                />
                <Button>Готово</Button>
            </form>
        </>
    );
}

export default Add;