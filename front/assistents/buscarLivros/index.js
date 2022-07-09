const useBook  = async (bookId) => {

    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": "ea3bc9ff14msh6ed2d7181a884acp1f1ad1jsn611a05e58512",
            "X-RapidAPI-Host": "hapi-books.p.rapidapi.com",
        },
    };

    return await (await fetch(`https://hapi-books.p.rapidapi.com/book/${bookId}`, options)).json();

};

export default useBook;