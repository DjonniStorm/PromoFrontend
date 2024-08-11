import { useEffect, useState } from "react";
interface TableData {
    header: string;
    description: string;
    creation: string;
    modification: string;
    availability: string;
}
function All() {
    const [ tableData, setTableData ] = useState<TableData>();
    useEffect(
        () => {
            try {
                const data: string | null = localStorage.getItem('items');
                if (data) {
                    console.log(JSON.parse(data));
                    setTableData(JSON.parse(data) as TableData);
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
        <>
            <table>
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

                </tbody>
            </table>
        </>
    );
}

export default All;