export async function getImage() {
    try {
        const response = await fetch('https://api.giphy.com/v1/gifs/random?api_key=xgcnvYuqk4vP1WQQtWPz6F1A0B4WHHdA')
        const data = await response.json()
        return {
            url: data.data.images.original.url, 
            title: data.data.title || data.data.id
        }
    } catch(error) {
        console.error('Error when fetch image', error)
        return {
            url: '', 
            title: ''
        }
    }
}