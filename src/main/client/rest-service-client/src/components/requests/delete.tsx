export const sendDeleteRequest = async (url: string, id: string) => {
    try {
        const response = await fetch(url, {
            method: "DELETE",
            credentials: 'include',
            headers: {  
                'id': id,
            }, 
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