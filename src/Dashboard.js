import { useState, useEffect } from 'react'
import { Container, Form } from "react-bootstrap"
import useAuth from "./useAuth"
import SpotifyWebApi from "spotify-web-api-node"


const spotifyApi = new SpotifyWebApi({
    clientId: "7cb17b44beea45eabd2156522ae03d72",
})

export default function Dashboard({ code }) {
    const accessToken = useAuth(code)
    const [search, setSearch] = useState("")
    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {
        if (!accessToken) return
        spotifyApi.setAccessToken(accessToken)
    }, [accessToken])

    useEffect(() => {
        if (!search) return setSearchResults([])
        if (!accessToken) return
        spotifyApi.searchTracks(search).then(response => {
            console.log(response)
        })
    }, [search])

    return (
        <Container className="d-flex flex-column py-2" style={{ height: "100vh" }}>
            <Form.Control
                type="search"
                placeholder="Search Songs/Artists"
                value={search}
                onChange={e => setSearch(e.target.value)} />
            <div className="flex-grow-1 my-2" style={{ overflowY: "auto" }}>Hi</div>
            <div>
                HiHi
            </div>
        </Container>
    )
}
