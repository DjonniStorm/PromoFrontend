import Button from "../../components/Button/Button";
import style from './MainPanel.module.css';
import cn from "classnames";
function MainPanel() {
    return (
        <div className={cn(style['navigation'])}>
            <Button>
            Добавить запись
            </Button>
            <Button>
            Получить список записей
            </Button>
            <Button>
            Получить/изменить/удалить запись
            </Button>
        </div>
    );
}

export default MainPanel;