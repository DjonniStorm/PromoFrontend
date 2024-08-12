import classNames from "classnames";
import { TableData } from "../../interfaces/DataObject";
import style from './TableDataRow.module.css';
function TableDataRow({header, description, creation, modification, availability}: TableData) {
    return (
        <tr className={classNames(style['test'])}>
            <td>{header}</td>
            <td>{description}</td>
            <td>{creation}</td>
            <td>{modification}</td>
            <td>{availability}</td>
        </tr>
    );
}

export default TableDataRow;