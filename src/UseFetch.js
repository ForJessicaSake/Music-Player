import { useState, useEffect } from "react";

function UseFetch(url) {

    const [playlists, setPlaylists] = useState(null);
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)
    const [filteredPlaylists, setFilteredPlaylists] = useState([])



    const handleClickPop=() => {
        const newPlaylist = playlists.filter((playlist)=>{
          return playlist.genre === "Pop"
        })
        console.log(newPlaylist)
        setPlaylists(newPlaylist);
    }

    const handleClickRB = () => {
        const newPlaylist = playlists.filter((playlist) => {
            return playlist.genre === "R&B"
        })
        console.log(newPlaylist)
        setPlaylists(newPlaylist);
    }

    const handleClickAfro = () => {
        const newPlaylist = playlists.filter((playlist) => {
            return playlist.genre === "Afrobeats"
        })
        console.log(newPlaylist)
        setPlaylists(newPlaylist);
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

    }, [url])

    return { playlists, isPending, error, handleClickAfro, handleClickPop, handleClickRB }
}

export default UseFetch;