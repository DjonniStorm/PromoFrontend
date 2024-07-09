"use strict";
var LocalStorageOperator = /** @class */ (function () {
    /**
     * Конструктор
     * Очищает localStorage
     * Задаёт значение счётчику добавленных объектов
     */
    function LocalStorageOperator() {
        //перед началом убираем всё лишнее
        localStorage.clear();
        this.counter = 0;
    }
    /**
     * Добавление записи в конец
     * @param  {data} данные
     */
    LocalStorageOperator.prototype.push = function (args) {
        try {
            localStorage.setItem(this.counter.toString(), "".concat(args.header, " ").concat(args.description, " ").concat(args.creation, " ").concat(args.modification, " ").concat(args.availability));
            this.counter++;
        }
        catch (_a) { }
    };
    /**
     *
     * @param {Int32} index индекс, по которому меняются значения
     * @param  {...any} args данные
     * @returns
     */
    LocalStorageOperator.prototype.changeData = function (index, _a) {
        var header = _a.header, description = _a.description, creation = _a.creation, modification = _a.modification, availability = _a.availability;
        if (index < 0 || index > this.counter)
            return;
        var args = "".concat(header, " ").concat(description, " ").concat(creation, " ").concat(modification, "  ").concat(availability);
        try {
            localStorage.setItem(index.toString(), args);
        }
        catch (_b) { }
    };
    /**
     * Получение списка объектов
     * @returns список объектов в localStorage
     */
    LocalStorageOperator.prototype.getList = function () {
        var dict = new Map();
        var checker = 0;
        for (var i = 0; i < this.counter; i++) {
            var a = localStorage.getItem(i.toString());
            if (a !== null) {
                dict.set(checker, a);
                checker++;
            }
        }
        return dict;
    };
    /**
     * Получение одного объекта
     * @param {Int32} index индекс, по которому берётся значение
     * @returns объект из localStorage или null, если такого нет
     */
    LocalStorageOperator.prototype.getNote = function (index) {
        if (index >= 0 && index <= this.counter) {
            return localStorage.getItem(index.toString());
        }
        return null;
    };
    /**
     * Удаление объекта
     * @param {Int32} index индекс, по которому удаляем
     */
    LocalStorageOperator.prototype.delNote = function (index) {
        if (index >= 0 && index <= this.counter) {
            localStorage.removeItem(index.toString());
        }
    };
    return LocalStorageOperator;
}());
exports.LocalStorageOperator = LocalStorageOperator;
