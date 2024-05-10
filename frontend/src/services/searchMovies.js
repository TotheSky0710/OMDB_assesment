import { buildQuery } from "../util";

const search_movies = async (query, setMovies) => {
    const endpoint = buildQuery(query);

    try {
        const res = await fetch(endpoint);
        if (res.ok) {
            const data = await res.json();
            setMovies([...data.Search]);
        } else {
            const errors = await res.json();
            for(let err of errors) {
                alert(err.msg);
            }
        }

    } catch (error) {
        console.log(error);
        setMovies([])
    }
}

export { search_movies };