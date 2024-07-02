class LocalStorageOperator {
    private counter: number;
    /**
     * Конструктор
     * Очищает localStorage 
     * Задаёт значение счётчику добавленных объектов 
     */
    constructor() {
        //перед началом убираем всё лишнее
        localStorage.clear();
        this.counter = 0;
    }
    /**
     * Добавление записи в конец
     * @param  {...any} args данные
     */
    push(...args: any) {
        try {
            localStorage.setItem(this.counter.toString(), args);
            this.counter++;
        } catch {}
    }
    /**
     * 
     * @param {Int32} index индекс, по которому меняются значения 
     * @param  {...any} args данные
     * @returns 
     */
    changeData(index: number, ...args: any) {
        if (index < 0 || index > this.counter) return;
        try {
            localStorage.setItem(index.toString(), args);
        } catch {}
    }
    /**
     * Получение списка объектов
     * @returns список объектов в localStorage
     */
    getList() {
        const dict = new Map();
        for (let i = 0; i < this.counter; i++) {
            dict.set(i, localStorage.getItem(i.toString()));
        }
        return dict;
    }
    /**
     * Получение одного объекта
     * @param {Int32} index индекс, по которому берётся значение 
     * @returns объект из localStorage или null, если такого нет
     */
    getNote(index: number) {
        if (index >= 0 && index <= this.counter) {
            return localStorage.getItem(index.toString());
        }
        return null;
    }
    /**
     * Удаление объекта
     * @param {Int32} index индекс, по которому удаляем 
     */
    delNote(index: number) {
        if (index >= 0 && index <= this.counter) {
            localStorage.removeItem(index.toString());
        }
    }
}