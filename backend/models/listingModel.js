import mongoose from "mongoose";


const Schema = mongoose.Schema; 

const listingSchema = new Schema ({

    title: {
        type: String, 
        required: true
    }, 
    roomType: {
        type: String, 
        required: true
    }, 
    price: {
        type: String,
        required: true 
    }, 
    guestCount: {
        type: Number, 
        required: true
    }, 
    bedroomCount: {
        type: Number, 
        required: true
    },
    bedCount: {
        type: Number, 
        required: true
    }, 
    bathroomCount: {
        type: Number, 
        required: true
    },
    amenities: {
        type: [String], 
        required: true,
        trim: true
    }, 
    facilities: {
        type: [String], 
        required: true, 
        trim: true
    }, 
    propertyType: {
        type: String, 
        required: true
    }, 
    petsRule: {
        type: Boolean, 
        required: true
    }, 
    smokingRule: {
        type: Boolean, 
        required: true
    }
}, { timestamps: true }); 

export default listingSchema; 
