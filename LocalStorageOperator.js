class LocalStorageOperator {
    constructor() {}
    Push(header, description, creation, modification, availability) {
        localStorage.setItem(header, description, creation, modification, availability);
    }
    Push(...args) {
        try {
            localStorage.setItem(args[0], args[1], args[2], args[3], args[4]);
        } catch {}
    }
}