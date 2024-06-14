class LocalStorageOperator {
    #counter;
    constructor() {
        //перед началом убираем всё лишнее
        localStorage.clear();
        this.#counter = 0;
    }
    push(header, description, creation, modification, availability) {
        localStorage.setItem(this.#counter++, Array.from(header, description, creation, modification, availability));
    }
    push(...args) {
        try {
            localStorage.setItem(this.#counter++, args);
        } catch {}
    }
    getList() {
        const dict = new Map();
        for (let i = 0; i < this.#counter; i++) {
            dict.set(i, localStorage.getItem(i));
        }
        return dict;
    }
    getNote(index) {
        if (index > 0 && index <= this.#counter) {
            return localStorage.getItem(index);
        }
        return null;
    }
}