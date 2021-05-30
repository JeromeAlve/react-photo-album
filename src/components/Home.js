import React, { useState, useEffect } from 'react'
import {Title, ListItem} from '../styles/StyledComponents'
import axios from 'axios'

const Home = () => {
    const [albums, setAlbums] = useState(null)

    const apiURL = 'https://jsonplaceholder.typicode.com/users/1/albums'

    useEffect(() => {
        axios
            .get(apiURL)
            .then((res) => {
                setAlbums(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
            }, [])

    return (
        <div>
            <Title>📸 Albums</Title>
            {
                albums &&
                albums.map((album) => (
                <AlbumItem data-testid="apiCall"
                    id={album.id}
                    title={album.title}
                    key={album.id}
                />
                ))
            }
        </div>
    )
}

const AlbumItem = ({ id, title }) => (
    <div>
        <div>
            <ListItem data-testid="album-btn" as="a" href={"/album/" + id}> {title} </ListItem>
        </div>
    </div>
)

export default Home