import posts from "./tuits.js";

let tuits = posts;

const dummyvalues = {
     "topic": "Web Development",
    "postedBy": {
        "username": "Anonymouse"
    },
    "disliked":false,
    "liked": false,
    "verified": false,
    "handle": "ReactJS",
    "time": "10 years",
    "title": "n/a",
    "logo-image": "/images/react-blue.png",
    "avatar-image": "/images/react-blue.png",
    "stats": {
        "comments": 0,
        "retuits": 0,
        "likes": 0,
        "dislikes":0
    }
}

const getId = () => {
    return new Date().getTime() + ''
}
const createTuit = (req, res) => {
    const newTuit = {
        ...req.body,
        _id: getId(),
        ...dummyvalues
    };
    newTuit.likes = 0;
    console.log(newTuit)
    tuits.push(newTuit);
    res.json(newTuit);
}


const findAllTuits = (req, res) => {
    console.log(tuits)
    res.json(tuits)
};

const deleteTuit = (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    tuits = tuits.filter(t => t._id !== tuitdIdToDelete);
    res.sendStatus(200);
}


const updateTuit = (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updatedTuit = req.body;
    tuits = tuits.map(t => t._id === tuitdIdToUpdate ? updatedTuit : t);
    res.sendStatus(200);
}


export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findAllTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}
