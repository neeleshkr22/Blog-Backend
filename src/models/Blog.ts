import mongoose,{Schema, Document, Model, Types} from "mongoose";

export interface IBlog extends Document{
    title : string,
    content : string,
    imageUrl? : string,
    author : Types.ObjectId,
    createdAt : Date,
    updatedAt : Date,
}
