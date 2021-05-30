import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {Title, Input, Text} from '../styles/StyledComponents'
import axios from 'axios'
import _ from 'lodash'
import conv from '../utils/italicize'
import Photo from './Photo'
import '../global.css'

const Album = () => {
    const [search, setSearch] = useState('')
    const [photos, setPhotos] = useState([])
    const [filteredPhotos,setFilteredPhotos] = useState([])
    const [loading, setLoading] = useState(false)

    const {id} = useParams()
    const apiURL = 'https://jsonplaceholder.typicode.com/albums/'+ id + '/photos'

    //initial load of data
    useEffect(() => {
        setLoading(true)
        axios
            .get(apiURL)
            .then((res) => {
                setPhotos(res.data)
                setLoading(false)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [apiURL])

    //apply filter on data
    useEffect(() => {
        let newArr = photos.filter((photo) =>
            photo.title.toLowerCase().includes(search.toLowerCase())
        )
        let copy = _.cloneDeep(newArr)
        if(search !== ""){
            copy.forEach( item => item.title = italicize(item.title, search))
        }

        setFilteredPhotos(
            copy
        )
    }, [search, photos])

    if (loading) {
        return <div>
            <Title>🖼 Photos</Title>
            <div id="col">
                <Input placeholder="Search Titles"
                       type="text"
                       onChange={(e)=> {setSearch(e.target.value)}}
                />
            </div>
            <Text>Loading Photos...</Text>
        </div>
    }

    return (
        <div>
            <Title>🖼 Photos</Title>
            <div id="col">
                <Input placeholder="Search Titles"
                       type="text"
                       onChange={(e)=> {setSearch(e.target.value)}}
                />
            </div>
            {
                filteredPhotos
                &&
                filteredPhotos.map((photo) => (
                    <Photo
                        id={photo.id}
                        title={photo.title}
                        thumbnailUrl={photo.thumbnailUrl}
                        key={photo.id}
                    />
                ))
            }
        </div>
    )
}

//Italicize key words in a sentence
function italicize(text, key){
    let words = text.split(" ")
    for (let i = 0; i < words.length; i += 1) {
        if(words[i].toLowerCase().includes(key.toLowerCase())){
            words[i] = conv.italic(words[i])
        }
    }
    return words.join(' ')
}

export default Album