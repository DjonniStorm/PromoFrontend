class LocalStorageOperator {
    #counter;
    /**
     * Конструктор
     * Очищает localStorage 
     * Задаёт значение счётчику добавленных объектов 
     */
    constructor() {
        //перед началом убираем всё лишнее
        localStorage.clear();
        this.#counter = 0;
    }
    /**
     * Добавление записи в конец
     * @param  {...any} args данные
     */
    push(...args) {
        try {
            localStorage.setItem(this.#counter++, args);
        } catch {}
    }
    /**
     * 
     * @param {Int32} index индекс, по которому меняются значения 
     * @param  {...any} args данные
     * @returns 
     */
    changeData(index, ...args) {
        if (index < 0 || index > this.#counter) return;
        try {
            localStorage.setItem(index, args);
        } catch {}
    }
    /**
     * Получение списка объектов
     * @returns список объектов в localStorage
     */
    getList() {
        const dict = new Map();
        for (let i = 0; i < this.#counter; i++) {
            dict.set(i, localStorage.getItem(i));
        }
        return dict;
    }
    /**
     * Получение одного объекта
     * @param {Int32} index индекс, по которому берётся значение 
     * @returns объект из localStorage или null, если такого нет
     */
    getNote(index) {
        if (index >= 0 && index <= this.#counter) {
            return localStorage.getItem(index);
        }
        return null;
    }
    /**
     * Удаление объекта
     * @param {Int32} index индекс, по которому удаляем 
     */
    delNote(index) {
        if (index >= 0 && index <= this.#counter) {
            localStorage.removeItem(index);
        }
    }
}