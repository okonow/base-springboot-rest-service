export const sendGetRequest = async (url: string) => {
    try {
        const response = await fetch(url, {
            method: 'GET',
            credentials: 'include',
            headers: {
            }
        });
        
        if (response.ok) {
            return await response.json();
        } else {
            throw new Error('Ошибка при выполнении запроса');
        }
    } catch (error) {
        console.error('Ошибка:', error);
        throw new Error('Произошла ошибка при обращении к серверу');
    }
};

export const sendGetRequestWithId = async (url: string, id: string) => {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                "id": id,
            }
        });
        
        if (response.ok) {
            return await response.json();
        } else {
            throw new Error('Ошибка при выполнении запроса');
        }
    } catch (error) {
        console.error('Ошибка:', error);
        throw new Error('Произошла ошибка при обращении к серверу');
    }
};