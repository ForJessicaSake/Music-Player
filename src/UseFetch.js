import { useState, useEffect } from "react";

function UseFetch(url) {

    const [playlists, setPlaylists] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const [filteredPlaylists, setFilteredPlaylists] = useState(null);


    const filtered = (genre) => {
        const newPlaylist = playlists.filter((playlist) => {
            return playlist.genre === genre
        })
        setFilteredPlaylists(newPlaylist)
    }
    const all = () => {
        setFilteredPlaylists(null)
    }

    useEffect(() => {
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('could not fetch data from the resource')
                }
                return response.json();
            }).then((data) => {
                setPlaylists(data);
                setError(null)
                setIsPending(false)
            }).catch((err) => {
                setError(err.message)
                setIsPending(false)
            }
            )

    }, [url, filteredPlaylists])

    return { playlists, isPending, error, filtered, filteredPlaylists, all }
}

export default UseFetch;