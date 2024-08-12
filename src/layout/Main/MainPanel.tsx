import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import style from './MainPanel.module.css';
import cn from "classnames";
type AvailableRoutes = '/add' | '/all' | '/error'
function MainPanel() {
    const navigate = useNavigate();
    const redirect = (point: AvailableRoutes) => {
        navigate(point);
    };
    return (
        <div className={cn(style['navigation'])}>
            <Button onClick={() => redirect('/add')}>
            Добавить запись
            </Button>
            <Button onClick={() => redirect('/all')}>
            Получить список записей
            </Button>
            <Button onClick={() => redirect('/error')}>
            Получить/изменить/удалить запись
            </Button>
        </div>
    );
}

export default MainPanel;