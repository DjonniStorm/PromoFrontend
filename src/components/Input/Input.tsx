import { forwardRef } from 'react';
import style from './Input.module.css';
import cn from 'classnames';
interface InputProps {
    type: 'text' | 'datetime-local';
    placeholder?: string;
    labelText: string;
    id: string;
};
const Input = forwardRef<HTMLInputElement, InputProps>(({placeholder, type, labelText, id}: InputProps, ref) => {
    return (
        <div className={cn(style['input'])}>
            <label htmlFor={id}>{labelText}</label>
            <input ref={ref} id={id} type={type} placeholder={placeholder ?? ''}/>
        </div>
    );
});

export default Input;