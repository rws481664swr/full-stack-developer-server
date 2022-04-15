import mongoose from 'mongoose';
const schema = mongoose.Schema({
    _id:String,
    tuit: String,
    liked: {type:Boolean, default:false},
    disliked: {type:Boolean, default:false},
     postedBy: {
        username: String
    },
    time:String,
    handle:String,
    verified:{type:Boolean,default:false},
    stats:{type:{
        likes: {type:Number, default:0},
        dislikes: {type:Number, default:0},
        retuits:{type:Number, default:0},
        comments:{type:Number, default:0}
    },default:{likes:0,dislikes: 0,retuits:0,comments:0}},
    "avatar-image":{type:String,default:'/images/profile.png'}

}, {collection: 'tuits'});
export default schema;
