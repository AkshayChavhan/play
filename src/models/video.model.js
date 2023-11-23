import { Schema, model } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
import aggregatePaginate from "mongoose-aggregate-paginate-v2";


const VideoSchema = new Schema(
    {
        videoFile : {
            type: String , //Cloudanary url
            require: true
        },
        thumbnail : {
            type: String , //Cloudanary url
            require: true
        },
        title : {
            type: String , 
            require: true
        },
        description : {
            type: String ,
            require: true
        },
        duration : {
            type: Number ,
            require: true
        },
        views : {
            type: Number ,
            default: 0
        },
        isPublished : {
            type:Boolean,
            default: true
        },
        owner:{
            type:Schema.Types.ObjectId,
            ref:"User"
        }
    },
    {
        timestamps : true
    }
)


VideoSchema.plugin(mongooseAggregatePaginate)

export const Video = model("Video" , VideoSchema);