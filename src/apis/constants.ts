export const storeKeys = {
    access_token: "80c48687-cf0a-493d-be76-82c3668eb4f0",
    response: "037d7d70-fd57-486f-8786-0c2fd4d0357a"
};

export const setStore = (key: string, value: Object | any): void => {
    window.localStorage.setItem(key, btoa(JSON.stringify(value)));
};

export const getStore = (key: string): Object | null | any => {
    const data = window.localStorage.getItem(key);
    return data ? JSON.parse(atob(data)) : null;
};

export const clearStore = (): void => window.localStorage.clear();