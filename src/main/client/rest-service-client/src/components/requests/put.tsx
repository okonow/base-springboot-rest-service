export const sendPutRequest = async (url: string, body: any, id: string) => {
    try {
        const response = await fetch(url, {
            method: "PUT",
            credentials: 'include',
            headers: {  
                'id': id,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        
        if (response.ok) {
            return response;
        } else {
            throw new Error('Ошибка при выполнении запроса');
        }
    } catch (error) {
        console.error('Ошибка:', error);
        throw new Error('Произошла ошибка при обращении к серверу');
    }
};