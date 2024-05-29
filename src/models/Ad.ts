import { UploadResponse } from "imagekit/dist/libs/interfaces";
import { model, models, Model } from "mongoose";
import mongoose from "mongoose"

 export type Ad={
    _id:string,
    title:string,
    price:number,
    category:string,
    description:string,
    contact:string,
    files:UploadResponse[],
location:{
    lat:number,
    lng:number
},
userEmail:string;
createdAt:Date;
updatedAt:Date;
}
const adSchema = new mongoose.Schema<Ad>({
  title:{type:String,required:true},
  price:{type:Number,required:true},
  category:{type:String,required:true},
  description:{type:String,required:true},
  contact:{type:String,required:true},
  files:[Object],
  location:Object,
  userEmail:{type:String,required:true}
},{
    timestamps: true
});

adSchema.index({location:'2dsphere'});
export const AdModel= (models?.Ad as Model<Ad>) || model<Ad>('Ad',adSchema)