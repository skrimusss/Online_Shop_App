export const getLS = ((name) => {
    var _a;
    return (_a = JSON.parse(localStorage.getItem(name))) !== null && _a !== void 0 ? _a : [];
});
export const saveInLS = ((name, data) => {
    localStorage.setItem(name, JSON.stringify(data));
});
