const musics = require("../models/musicas.json")

const newMusicList = musics.map(music => {
    const newMusic = {
        id: music.id,
        nome: music.name,
        amostra: music.preview_url,
        nome_album: music.name,
        imagem: music.album.url,
        artista: music.artists.name
    }
    return newMusic
})

const newArtistList = musics.map(music => {
    const newArtist = {
        id: music.artists.id,
        nome: music.artists.name
    }
    return newArtist
})

const getMusics = (request, response) => {
    console.log(request.url)
    response.status(200).send(newMusicList)
}

const getMusicsById = (request, response) => {
    const id = request.params.id
    if (id > musics.length || id < 0) {
        response.status(404).send("ID não localizado")
    } else {
        response.status(200).send(newMusicList.find(music => music.id == id))
    }
}

const getArtists = (request, response) => {
    const artista = request.params.artist
    console.log(artista)
    response.status(200).send(newArtistList.filter(music => music.name == artista))
}

// listaArtistas.forEach(artista => {

//     const encontrei = listaSemRepetir.find(artist => artist.id === artista.id)
//     if (!encontrei) {
//         listaSemRepetir.push(artista)
//     }
// })

// response.status(200).send(listaSemRepetir)
//     // response.status(200).send(newArtistList.filter(music => music.name == artista))

// }
module.exports = {
    getMusics,
    getMusicsById,
    getArtists
}
