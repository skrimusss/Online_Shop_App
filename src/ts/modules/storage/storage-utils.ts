export const getLS = ((name: string): Array<string> => {
    return JSON.parse(localStorage.getItem(name)) ?? [];
})

export const saveInLS = ((name: string, data: Array<string>) => {
    localStorage.setItem(name, JSON.stringify(data));
})