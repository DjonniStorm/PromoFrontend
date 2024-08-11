import Button from "../../components/Button/Button";
import style from './MainPanel.module.css';
import cn from "classnames";
function MainPanel() {
    const onClick = () => console.log('123');
    return (
        <div className={cn(style['navigation'])}>
            <Button onClick={onClick}>
            Добавить запись
            </Button>
            <Button onClick={onClick}>
            Получить список записей
            </Button>
            <Button onClick={onClick}>
            Получить/изменить/удалить запись
            </Button>
        </div>
    );
}

export default MainPanel;