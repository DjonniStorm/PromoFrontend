import { useEffect, useState } from "react";
import { TableData } from "../../interfaces/DataObject";
import TableDataRow from "../../components/TableDataRow/TableDataRow";
import { KEY } from "../../helpers/LocalStorageKey";
import style from './All.module.css';
import cn from "classnames";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
function All() {
    const [ tableData, setTableData ] = useState<TableData[]>();
    const navigate = useNavigate();
    const redirect = (e) => {
        console.log('тут');
        navigate('/');
    };
    useEffect(
        () => {
            try {
                const data: string | null = localStorage.getItem(KEY);
                if (data) {
                    console.log(JSON.parse(data));
                    setTableData(JSON.parse(data) as TableData[]);
                } else {
                    throw new Error('Одна ошибка и ты ошибся')
                }
            } catch (e) {
                if (e instanceof Error) {
                    console.log(e);
                } else if (typeof e == 'string') {
                    console.log(e)
                }
            }
        }, []
    );
    return (
        <div className={cn(style['all'])}>
            <table className={cn(style['table'])}>
                <thead>
                    <tr>
                        <th>Заголовок</th>
                        <th>Описание</th>
                        <th>Время создания</th>
                        <th>Время изменения</th>
                        <th>Маркер выполнения</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tableData?.map((item) => {
                            return <TableDataRow 
                                key={item.header}
                                header={item.header}
                                description={item.description}
                                creation={item.creation}
                                modification={item.modification}
                                availability={item.availability}
                            />
                        })
                    }
                </tbody>
            </table>
            <Button onClick={redirect}>Назад</Button>
        </div>
    );
}

export default All;