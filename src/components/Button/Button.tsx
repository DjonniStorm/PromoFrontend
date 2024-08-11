import { ReactNode } from "react";
import style from './Button.module.css';
import cn from "classnames";
interface ButtonProps {
    children: ReactNode;
};

function Button({children} : ButtonProps) {
    return (
        <>
            <button className={cn(style['button'])}>
                {children}
            </button>
        </>
    );
}

export default Button;