const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=rJTHIhQgzPimzhrfr7kdGQz4h0DphbSA&q=${category}&limit=3`
    const resp = await fetch(url);
    const { data } = await resp.json();
    
    //Reconstrucción de la data
    const gifs = data.map( img => ({
        id: img.id,
        title:img.title,
        url:img.images.downsized_medium.url
    }));

    return gifs;
}

export default getGifs