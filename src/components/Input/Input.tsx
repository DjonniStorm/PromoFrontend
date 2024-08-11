import style from './Input.module.css';
import cn from 'classnames';
interface InputProps {
    type: 'text' | 'datetime-local';
    placeholder?: string;
    labelText: string;
    id: string;
};
function Input({placeholder, type, labelText, id}: InputProps) {
    return (
        <div className={cn(style['input'])}>
            <label htmlFor={id}>{labelText}</label>
            <input id={id} type={type} placeholder={placeholder ?? ''}/>
        </div>
    );
}

export default Input;