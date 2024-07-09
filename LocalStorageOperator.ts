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
     * @param  {data} данные
     */
    push(data: string) : void {
        try {
            localStorage.setItem(this.counter.toString(), data);
            this.counter++;
        } catch {}
    }
    /**
     * 
     * @param {Int32} index индекс, по которому меняются значения 
     * @param  {...any} data данные
     * @returns 
     */
    changeData(index: number, data: string) : void {
        if (index < 0 || index > this.counter) return;
        try {
            localStorage.setItem(index.toString(), data);
        } catch {}
    }
    /**
     * Получение списка объектов
     * @returns список объектов в localStorage
     */
    getList() : string[] {
        let dict: string[] = [];
        for (let i = 0; i < this.counter; i++) {
            let a = localStorage.getItem(i.toString());
            if (a !== null) {
                dict.push(a);
            }
        }
        return dict;
    }
    /**
     * Получение одного объекта
     * @param {Int32} index индекс, по которому берётся значение 
     * @returns объект из localStorage или null, если такого нет
     */
    getNote(index: number) : string | null {
        if (index >= 0 && index <= this.counter) {
            return localStorage.getItem(index.toString());
        }
        return null;
    }
    /**
     * Удаление объекта
     * @param {Int32} index индекс, по которому удаляем 
     */
    delNote(index: number) : void {
        if (index >= 0 && index <= this.counter) {
            localStorage.removeItem(index.toString());
        }
    }
}

export default LocalStorageOperator;