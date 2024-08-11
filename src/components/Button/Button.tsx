import { ReactNode } from "react";
import style from './Button.module.css';
import cn from "classnames";
interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
};

function Button({children, onClick} : ButtonProps) {
    return (
        <>
            <button className={cn(style['button'])} onClick={() => onClick()}>
                {children}
            </button>
        </>
    );
}

export default Button;