interface LocalData {
    [key: string] : string;
};
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
    push(args : LocalData) : void {
        try {
            localStorage.setItem(this.counter.toString(), `${args.header} ${args.description} ${args.creation} ${args.modification} ${args.availability}`);
            this.counter++;
        } catch {}
    }
    /**
     * 
     * @param {Int32} index индекс, по которому меняются значения 
     * @param  {...any} args данные
     * @returns 
     */
    changeData(index: number, {header, description, creation, modification, availability} : LocalData) : void {
        if (index < 0 || index > this.counter) return;
        let args: string = `${header} ${description} ${creation} ${modification}  ${availability}`;
        try {
            localStorage.setItem(index.toString(), args);
        } catch {}
    }
    /**
     * Получение списка объектов
     * @returns список объектов в localStorage
     */
    getList() : string[] {
        let array: string[] = [];
        for (let i = 0; i < this.counter; i++) {
            let a = localStorage.getItem(i.toString());
            if (a !== null)
                array.push(a);
        }
        return array;
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