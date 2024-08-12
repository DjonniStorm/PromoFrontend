import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import cn from "classnames";
import style from "./Add.module.css";
import { FormEvent, useRef } from "react";
import { TableData } from "../../interfaces/DataObject";
import {KEY} from '../../helpers/LocalStorageKey';
import { useNavigate } from "react-router-dom";
function Add() {
    const navigate = useNavigate();
    const redirect = () => {
        navigate('/all');
    }
    const header = useRef<HTMLInputElement>(null);
    const description = useRef<HTMLInputElement>(null);
    const creation = useRef<HTMLInputElement>(null);
    const modification = useRef<HTMLInputElement>(null);
    const availability = useRef<HTMLInputElement>(null);
    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        let result: boolean = false;
        //
        if (header.current && !header.current.value) {
            header.current.style.borderColor = '#F00';
            result = false;
        } else if (header.current && header.current.value) {
            result = true;
            header.current.style.borderColor = '#000';
        }
        //
        if (description.current && !description.current.value) {
            description.current.style.borderColor = '#F00';
            result = false;
        } else if (description.current && description.current.value) {
            result = true;
            description.current.style.borderColor = '#000';
        }
        //
        if (creation.current && !creation.current.value) {
            creation.current.style.borderColor = '#F00';
            result = false;
        } else if (creation.current && creation.current.value) {
            result = true;
            creation.current.style.borderColor = '#000';
        }
        //
        if (modification.current && !modification.current.value) {
            modification.current.style.borderColor = '#F00';
            result = false;
        } else if (modification.current && modification.current.value) {
            result = true;
            modification.current.style.borderColor = '#000';
        }
        //
        if (availability.current && !availability.current.value) {
            availability.current.style.borderColor = '#F00';
            result = false;
        } else if (availability.current && availability.current.value) {
            result = true;
            availability.current.style.borderColor = '#000';
        }
        if (result) {
            addNewData({
                header: header.current!.value,
                description: description.current!.value,
                creation: creation.current!.value,
                modification: modification.current!.value,
                availability: availability.current!.value
            });
            redirect();
        } else {
            alert('Не заполнено');
        }
        console.log();
        console.log(e);
    };
    const addNewData = (newData: TableData) => {
        try {
            const data = localStorage.getItem(KEY);
            let prevData: TableData[];
            if (data) {
                prevData = JSON.parse(data) as TableData[];
                prevData.push(newData);
                console.log(JSON.parse(data));
            } else {
                prevData = [newData];
            }
            localStorage.setItem(KEY, JSON.stringify(prevData));
        } catch (e) {
            console.warn(e);
        }
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
                <Button type="submit">
                    Готово
                </Button>
            </form>
        </>
    );
}

export default Add;