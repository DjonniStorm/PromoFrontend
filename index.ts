import LocalStorageOperator from "./LocalStorageOperator";

//создание объекта класса-задания
const storageOperation = new LocalStorageOperator();
//активные, сменяющиеся div блоки
const $elems = document.querySelectorAll('.center-display') as NodeListOf<HTMLDivElement>;
const $table = document.getElementById('dataTable') as HTMLTableElement;
//кнопка для подтверждения на форме ввода новых данных
const $buttonSubmit = document.getElementById('buttonSubmit') as HTMLButtonElement;
//кнопка добавления новой записи
const $buttonAdd = document.getElementById('buttonAdd') as HTMLButtonElement;
//кнопка получения списка объектов
const $buttonGetList = document.getElementById('buttonGetList') as HTMLButtonElement;
//кнопка перехода на страницу получения одного объекта
const $buttonGetNote = document.getElementById('buttonGetNote') as HTMLButtonElement;
const $buttonGet = document.getElementById('getNote') as HTMLButtonElement;
//кнопока изменения на страницы одной записи
const $buttonChange = document.getElementById('buttonChange') as HTMLButtonElement;
//кнопка удаления конкретной записи
const $buttonRemove = document.getElementById('buttonRemove') as HTMLButtonElement;
let checker: number = -1;
//обработчик нажания формы ввода новых данных
$buttonSubmit?.addEventListener('click', e => {
    e.preventDefault();
    pushData(checker);
});
function pushData(index: number) {
    //собираем все данные с input
    let input = document.querySelectorAll('form input') as NodeListOf<HTMLInputElement>;
    let isInputHasEmptyField = false;
    console.log(index)
    input.forEach(x => {
        x.style.border = '';
        if (x === undefined || x == null || x.value == '' || x.value.trim() == '') {
            isInputHasEmptyField = true;
            x.style.border = '2px solid red';
        }
    })
    if (!isInputHasEmptyField) {
        let data: string = "";
        input.forEach(x => data += `${x.value}, `);
        if (index === -1) {
            storageOperation.push(data);
        } else {
            storageOperation.changeData(index, data);
            checker = 1;
        }
        makeNone(1);
        input.forEach(e => e.value = '');
    }
}
$buttonAdd?.addEventListener('click', () => {
    makeNone(0);
});
document.getElementById('addBack')?.addEventListener('click', e => {
    e.preventDefault();
    makeNone(1);
});
document.getElementById('tableBack')?.addEventListener('click', () => {
    let rows: NodeListOf<HTMLTableRowElement> = document.querySelectorAll('#dataTable tr') as NodeListOf<HTMLTableRowElement>;
    console.log(rows);
    if (rows !== null && $table !== null) {
        for (let i = rows.length - 1; i >= 0; i--) {
            $table.deleteRow(i - 1);
        }
        makeNone(1);
    }
});
document.getElementById('getBack')?.addEventListener('click', () => makeNone(1));
$buttonGetList?.addEventListener('click', () => {
    const dict: string[] = storageOperation.getList();
    if (dict.length > 0) {
        try {
            document.getElementById('remove')?.remove();
        }
        catch (Exception) {}
    }
    for (let i = 0; i < dict.length; i++) {
        let row: HTMLTableRowElement = $table?.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(0);
        let cell3 = row.insertCell(0);
        let cell4 = row.insertCell(0);
        let cell5 = row.insertCell(0);
        let text = dict[i];
        if (text === null || text === undefined) return;
        let rowsOfData: string[] = text.split(',');
        cell1.innerHTML = rowsOfData[4];
        cell2.innerHTML = rowsOfData[3];
        cell3.innerHTML = rowsOfData[2];
        cell4.innerHTML = rowsOfData[1];
        cell5.innerHTML = rowsOfData[0];
    }
    makeNone(2);
});
$buttonGetNote?.addEventListener('click', () => {
    makeNone(3);
});
$buttonGet?.addEventListener('click', () => {
    var note;
    let input = document?.getElementById('note') as HTMLInputElement;
    input.style.border = "";
    if (input.value =='' && input.value.trim() == '') {
        input.style.border = '2px solid red';
        return;
    }
    try {
        document.querySelector('div.center-display strong')?.remove();
    } catch(Exception) {}
    if ((note = storageOperation.getNote(+input.value)) !== null) {
        console.log(storageOperation.getNote(+input.value))
        console.log(document.querySelector('div.center-display #tableResult'));
        if ($elems[3].contains(document.querySelector('div.center-display #tableResult'))) {
            document.querySelector('div.center-display #tableResult')?.remove();
        }
        let tableResult = document.createElement('table');
        let row = tableResult.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(0);
        let cell3 = row.insertCell(0);
        let cell4 = row.insertCell(0);
        let cell5 = row.insertCell(0);
        let rowsOfData = note.split(',');
        console.log(rowsOfData);
        tableResult.setAttribute("id", "tableResult");
        $elems[3].prepend(tableResult);
        cell1.innerHTML = rowsOfData[4];
        cell2.innerHTML = rowsOfData[3];
        cell3.innerHTML = rowsOfData[2];
        cell4.innerHTML = rowsOfData[1];
        cell5.innerHTML = rowsOfData[0];
    } else {
        console.log(document.querySelector('div.center-display strong'))
        if ($elems[3].contains(document.querySelector('div.center-display strong'))) {
            return;
        }
        let falseInput = document.createElement('strong');
        falseInput.innerHTML = 'Такой записи нет';
        document.getElementById('getNote')?.before(falseInput);
        falseInput.style.color = '#F00';
    }
});
$buttonChange?.addEventListener('click', () => {
    // debugger
    try {
        document.getElementById('tableResult')?.remove();
    } catch(Exception) {}
    let am = (document.getElementById('note') as HTMLInputElement).value;
    if (am !== undefined && am !== null && am != '' && parseInt(am) >= 0) {
        checker = +am;
        pushData(checker);
        makeNone(0);
        return;
    }
    makeNone(1);
});
$buttonRemove?.addEventListener('click', () => {
    let inputValue = (document.getElementById('note') as HTMLInputElement).value;
    storageOperation.delNote(+inputValue ?? -1);
    try {
        document.getElementById('tableResult')?.remove();
    } catch (Exception) {}
    makeNone(1);
});
function makeNone(number: number) {
    /*
        0 - форма ввода данных
        1 - меню
        2 - таблица записей
        3 - получение/изменение/удаление записи
    */
   if (number >= 0 && number <= 3) {
       for (let i = 0, length = $elems.length; i < length; i++) {
           $elems[i].classList.add('none');

       }
       $elems[number].classList.remove('none');
       return;
   }
}