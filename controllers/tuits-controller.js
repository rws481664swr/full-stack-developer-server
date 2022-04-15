import * as dao from "../tuits/tuits-dao.js";

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

const createTuit =async (req, res) => {
    const newTuit = {
        ...req.body,
        _id: getId(),
        likes:0,
        ...dummyvalues
    };
    const insertedTuit = await dao.createTuit(newTuit);
    res.json(insertedTuit);
}


const findAllTuits = async (req, res) => {
    const tuits = await dao.findAllTuits()
    res.json(tuits)
};

const deleteTuit = async  (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    const status = await dao.deleteTuit(tuitdIdToDelete);
    res.sendStatus(status);
}


const updateTuit =async  (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const status = await dao.updateTuit(tuitdIdToUpdate,req.body)
    res.sendStatus(status);
}


export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findAllTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}
