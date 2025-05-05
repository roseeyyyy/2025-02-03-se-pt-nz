const express = require("express");
const router = express.Router();
const friends = require('../models/friends')

// 1️⃣ Default endpoint — gets all friends
router.get('/', (req, res) => {
    res.json(friends)
})

// 2️⃣ Filter endpoint: filter by gender and/or starting letter
router.get('/filter', (req, res) => {
    console.log(req.query)
    let { gender, letter } = req.query;
    let matchingFriends = [...friends];

    if (gender) {
        matchingFriends = matchingFriends.filter(friend => friend.gender === gender);
    }

    if (letter) {
        matchingFriends = matchingFriends.filter(friend => friend.name.startsWith(letter));
    }

    if (matchingFriends.length > 0) {
        res.status(200).json(matchingFriends)
    } else {
        res.status(404).json({ error: "No matching friends found" })
    }
})

// 3️⃣ Info route: return selected headers only
router.get('/info', (req, res) => {
    const { 'user-agent': userAgent, 'content-type': contentType, accept } = req.headers;
    res.json({ 'user-agent': userAgent, 'content-type': contentType, accept });
})

// 4️⃣ Dynamic request param endpoint - get friend by ID
router.get('/:id', (req, res) => {
    console.log(req.params)
    let friendId = parseInt(req.params.id);
    let friend = friends.find(f => f.id === friendId);

    if (friend) {
        res.status(200).json(friend)
    } else {
        res.status(404).json({ error: `No friend found with ID ${friendId}` })
    }
})

// 5️⃣ POST - add new friend
router.post('/', (req, res) => {
    let newFriend = req.body;
    console.log(newFriend)

    if (!newFriend.name || !newFriend.gender) {
        res.status(500).json({ error: 'Friend object must contain a name and gender' });
        return;
    }
    if (!newFriend.id) {
        newFriend.id = friends.length + 1;
    }

    friends.push(newFriend)
    res.status(200).json(newFriend)
})

// 6️⃣ PUT - update existing friend
router.put('/:id', (req, res) => {
    let friendId = parseInt(req.params.id);
    let updatedFriend = req.body;

    let index = friends.findIndex(f => f.id === friendId);

    if (index !== -1) {
        friends[index] = { ...friends[index], ...updatedFriend };
        res.status(200).json(friends[index]);
    } else {
        res.status(404).json({ error: `No friend found with ID ${friendId}` });
    }
})

module.exports = router;
