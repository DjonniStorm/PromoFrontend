import { ButtonHTMLAttributes, ReactNode } from "react";
import style from './Button.module.css';
import cn from "classnames";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode;
};

function Button({children, onClick} : ButtonProps) {
    return (
        <>
            <button onClick={onClick} className={cn(style['button'])}>
                {children}
            </button>
        </>
    );
}

export default Button;