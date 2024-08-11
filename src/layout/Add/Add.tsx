import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import cn from "classnames";
import style from "./Add.module.css";
import { FormEvent, useRef } from "react";
function Add() {
    const header = useRef<HTMLInputElement>(null);
    const description = useRef<HTMLInputElement>(null);
    const creation = useRef<HTMLInputElement>(null);
    const modification = useRef<HTMLInputElement>(null);
    const availability = useRef<HTMLInputElement>(null);
    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(new FormData());
        if (!header.current) {
        
        }
        console.log();
        console.log(e);
    };
    return (
        <>
            <form onSubmit={onSubmit} className={cn(style['form'])}>
                <Input
                    ref={header}
                    type="text"
                    placeholder="заголовок..."
                    id="header"
                    labelText="Введите заголовок:"
                    />
                <Input
                    ref={description}
                    id="description"
                    type="text"
                    placeholder="описание..."
                    labelText="Опишите:"
                />
                <Input
                    ref={creation}
                    id="creation"
                    type="datetime-local"
                    labelText="Введите время создания:"
                    />
                <Input
                    ref={modification}
                    id="modification"
                    type="datetime-local"
                    labelText="Введите время изменения:"
                    />
                <Input
                    ref={availability}
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