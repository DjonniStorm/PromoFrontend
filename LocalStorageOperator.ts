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
    push(data : {
        header: string,
        description: string,
        creation: string,
        modification: string,
        availability: string
    }) : void {
        let args: string = `${data.header} ${data.description} ${data.creation} ${data.modification}  ${data.availability}`;
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
    changeData(index: number, data : {
        header: string,
        description: string,
        creation: string,
        modification: string,
        availability: string
    }) : void {
        if (index < 0 || index > this.counter) return;
        let args: string = `${data.header} ${data.description} ${data.creation} ${data.modification}  ${data.availability}`;
        try {
            localStorage.setItem(index.toString(), args);
        } catch {}
    }
    /**
     * Получение списка объектов
     * @returns список объектов в localStorage
     */
    getList() : Map<number, string> {
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