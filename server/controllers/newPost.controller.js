const searchNews = require('./searchNews')
const createNewPost = async (req, res) => {
    const { url } = req.body;
    try {
        const result = await searchNews(url)
        if (!result){
            res.status(500).json('content not found')
        }
        res.status(201).json(result)
    } catch (e) {
        res.status(500).json(`there is some error... ${e}`)
    }
}

module.exports =  {
    createNewPost,
}