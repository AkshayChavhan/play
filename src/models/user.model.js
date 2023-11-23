import { Schema, model } from "mongoose";

const UserSchema = new Schema(
    {
        username: {
            type: String,
            require: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },
        email: {
            type: String,
            require: true,
            unique: true,
            lowercase: true,
            trim: true
        },
        fullname: {
            type: String,
            require: true,
            trim: true,
            index: true
        },
        avatar: {
            type : String ,//cloudanary url
            require : true
        },
        coverImage: {
            type : String ,//cloudanary url
        },
        watchHistory : [
            {
                type: Schema.Types.ObjectId,
                ref: "Video"
            }
        ],
        password : {
            type: String ,
            require : [true , "Password is required."]
        },
        refreshToken : {
            type: String
        }
    },
    {
        timestamps : true
    }
)


export const User = model("User", UserSchema);
