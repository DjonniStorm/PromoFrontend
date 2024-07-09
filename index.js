"use strict";
var _a, _b, _c;
//Object.defineProperty(exports, "__esModule", { value: true });
//var LocalStorageOperator_1 = require("./LocalStorageOperator");
//создание объекта класса-задания
var storageOperation = new LocalStorageOperator();
//активные, сменяющиеся div блоки
var $elems = document.querySelectorAll('.center-display');
var $table = document.getElementById('dataTable');
//кнопка для подтверждения на форме ввода новых данных
var $buttonSubmit = document.getElementById('buttonSubmit');
//кнопка добавления новой записи
var $buttonAdd = document.getElementById('buttonAdd');
//кнопка получения списка объектов
var $buttonGetList = document.getElementById('buttonGetList');
//кнопка перехода на страницу получения одного объекта
var $buttonGetNote = document.getElementById('buttonGetNote');
var $buttonGet = document.getElementById('getNote');
//кнопока изменения на страницы одной записи
var $buttonChange = document.getElementById('buttonChange');
//кнопка удаления конкретной записи
var $buttonRemove = document.getElementById('buttonRemove');
var checker = -1;
//обработчик нажания формы ввода новых данных
$buttonSubmit === null || $buttonSubmit === void 0 ? void 0 : $buttonSubmit.addEventListener('click', function (e) {
    e.preventDefault();
    pushData(checker);
});
function pushData(index) {
    //собираем все данные с input
    var input = document.querySelectorAll('form input');
    var isInputHasEmptyField = false;
    console.log(index);
    input.forEach(function (x) {
        x.style.border = '';
        if (x === undefined || x == null || x.value == '' || x.value.trim() == '') {
            isInputHasEmptyField = true;
            x.style.border = '2px solid red';
        }
    });
    if (!isInputHasEmptyField) {
        var d_1;
        input.forEach(function (x) { return d_1.push(x.value); });
        var data = {
            a: d_1[0],
            b: d_1[1],
            c: d_1[2],
            d: d_1[3],
            e: d_1[4],
        };
        //input.forEach(e => data.push(e.value));
        if (index === -1) {
            storageOperation.push(data);
        }
        else {
            storageOperation.changeData(index, data);
            checker = 1;
        }
        makeNone(1);
        input.forEach(function (e) { return e.value = ''; });
    }
}
$buttonAdd === null || $buttonAdd === void 0 ? void 0 : $buttonAdd.addEventListener('click', function () {
    makeNone(0);
});
(_a = document.getElementById('addBack')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function (e) {
    e.preventDefault();
    makeNone(1);
});
(_b = document.getElementById('tableBack')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    var rows = document.querySelectorAll('#dataTable tr');
    console.log(rows);
    if (rows !== null && $table !== null) {
        for (var i = rows.length - 1; i >= 0; i--) {
            $table.deleteRow(i - 1);
        }
        makeNone(1);
    }
});
(_c = document.getElementById('getBack')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () { return makeNone(1); });
$buttonGetList === null || $buttonGetList === void 0 ? void 0 : $buttonGetList.addEventListener('click', function () {
    var _a;
    var dict = storageOperation.getList();
    if (dict.size > 0) {
        try {
            (_a = document.getElementById('remove')) === null || _a === void 0 ? void 0 : _a.remove();
        }
        catch (Exception) { }
    }
    for (var i = 0; i < dict.size; i++) {
        var row = $table === null || $table === void 0 ? void 0 : $table.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(0);
        var cell3 = row.insertCell(0);
        var cell4 = row.insertCell(0);
        var cell5 = row.insertCell(0);
        var text = dict.get(i);
        if (text === null || text === undefined)
            return;
        var rowsOfData = text.split(',');
        cell1.innerHTML = rowsOfData[4];
        cell2.innerHTML = rowsOfData[3];
        cell3.innerHTML = rowsOfData[2];
        cell4.innerHTML = rowsOfData[1];
        cell5.innerHTML = rowsOfData[0];
    }
    makeNone(2);
});
$buttonGetNote === null || $buttonGetNote === void 0 ? void 0 : $buttonGetNote.addEventListener('click', function () {
    makeNone(3);
});
$buttonGet === null || $buttonGet === void 0 ? void 0 : $buttonGet.addEventListener('click', function () {
    var _a, _b, _c;
    var note;
    var input = document === null || document === void 0 ? void 0 : document.getElementById('note');
    input.style.border = "";
    if (input.value == '' && input.value.trim() == '') {
        input.style.border = '2px solid red';
        return;
    }
    try {
        (_a = document.querySelector('div.center-display strong')) === null || _a === void 0 ? void 0 : _a.remove();
    }
    catch (Exception) { }
    if ((note = storageOperation.getNote(+input.value)) !== null) {
        console.log(storageOperation.getNote(+input.value));
        console.log(document.querySelector('div.center-display #tableResult'));
        if ($elems[3].contains(document.querySelector('div.center-display #tableResult'))) {
            (_b = document.querySelector('div.center-display #tableResult')) === null || _b === void 0 ? void 0 : _b.remove();
        }
        var tableResult = document.createElement('table');
        var row = tableResult.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(0);
        var cell3 = row.insertCell(0);
        var cell4 = row.insertCell(0);
        var cell5 = row.insertCell(0);
        var rowsOfData = note.split(',');
        console.log(rowsOfData);
        tableResult.setAttribute("id", "tableResult");
        $elems[3].prepend(tableResult);
        cell1.innerHTML = rowsOfData[4];
        cell2.innerHTML = rowsOfData[3];
        cell3.innerHTML = rowsOfData[2];
        cell4.innerHTML = rowsOfData[1];
        cell5.innerHTML = rowsOfData[0];
    }
    else {
        console.log(document.querySelector('div.center-display strong'));
        if ($elems[3].contains(document.querySelector('div.center-display strong'))) {
            return;
        }
        var falseInput = document.createElement('strong');
        falseInput.innerHTML = 'Такой записи нет';
        (_c = document.getElementById('getNote')) === null || _c === void 0 ? void 0 : _c.before(falseInput);
        falseInput.style.color = '#F00';
    }
});
$buttonChange === null || $buttonChange === void 0 ? void 0 : $buttonChange.addEventListener('click', function () {
    var _a;
    // debugger
    try {
        (_a = document.getElementById('tableResult')) === null || _a === void 0 ? void 0 : _a.remove();
    }
    catch (Exception) { }
    var am = document.getElementById('note').value;
    if (am !== undefined && am !== null && am != '' && parseInt(am) >= 0) {
        checker = +am;
        pushData(checker);
        makeNone(0);
        return;
    }
    makeNone(1);
});
$buttonRemove === null || $buttonRemove === void 0 ? void 0 : $buttonRemove.addEventListener('click', function () {
    var _a, _b;
    var inputValue = document.getElementById('note').value;
    storageOperation.delNote((_a = +inputValue) !== null && _a !== void 0 ? _a : -1);
    try {
        (_b = document.getElementById('tableResult')) === null || _b === void 0 ? void 0 : _b.remove();
    }
    catch (Exception) { }
    makeNone(1);
});
function makeNone(number) {
    /*
        0 - форма ввода данных
        1 - меню
        2 - таблица записей
        3 - получение/изменение/удаление записи
    */
    if (number >= 0 && number <= 3) {
        for (var i = 0, length_1 = $elems.length; i < length_1; i++) {
            $elems[i].classList.add('none');
        }
        $elems[number].classList.remove('none');
        return;
    }
}
