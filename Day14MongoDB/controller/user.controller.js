const User = require('../models/user.model.js');
const Url = require('../models/url.model.js');
// patch-check

exports.getUsers = async (req,res) =>{
    const users = await User.find({});
    res.json(users);
}
exports.getUserId = async(req,res)=>{
    const {name} = req.params;
    const user = await User.find({name:name});
    res.json(user);
}

exports.addUsers = async (req,res)=>{
    try {
        const userMeta = req.body;
        
        if(userMeta?.name){
            const user = await User.findOne({name:userMeta.name});
            if(user){
                return res.status(409).json({error: "User already exists"})
            }
        }
        
        // Create user
        await User.create(userMeta);
        return res.status(201).json({message: "User is created"})
        
    } catch(err) {
        // Mongoose validation error
        if(err.name === 'ValidationError') {
            const messages = Object.values(err.errors).map(e => e.message);
            return res.status(400).json({error: messages.join(', ')})
        }
        
       
    }
}
//-------------------------------------------------------------------------------
function generateShortId(length = 6) {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let id = '';
    for (let i = 0; i < length; i++) id += chars.charAt(Math.floor(Math.random() * chars.length));
    return id;
}

exports.createShortUrl = async (req, res) => {
    try {
        const { redirectURL } = req.body;
        if (!redirectURL) return res.status(400).json({ error: 'redirectURL is required' });

        // generate unique shortId
        let shortId = generateShortId();
        while (await Url.findOne({ shortId })) {
            shortId = generateShortId();
        }

        const url = await Url.create({ shortId, redirectURL });
        const shortUrl = `${req.protocol}://${req.get('host')}/s/${url.shortId}`;
        return res.status(201).json({ shortId: url.shortId, shortUrl, redirectURL: url.redirectURL });
    } catch (err) {
        return res.status(500).json({ error: 'Internal server error' });
    }
}

exports.redirectShortUrl = async (req, res) => {
    try {
        const { shortId } = req.params;
        const url = await Url.findOne({ shortId });
        if (!url) return res.status(404).json({ error: 'Short URL not found' });

        // increment click counter (best-effort)
        try { url.clicks = (url.clicks || 0) + 1; await url.save(); } catch (e) {}

        return res.redirect(url.redirectURL);
    } catch (err) {
        return res.status(500).json({ error: 'Internal server error' });
    }
}
