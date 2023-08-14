
import mongoose from 'mongoose';

// Define the schema interface
export interface IMarketPlace extends mongoose.Document {
  name: string;
  phoneNo: number;
  email: string;
  product: 'Stationary' | 'Vehicle';
  itemName: string;
  price: number;
  negotiable: boolean;
  image: string;
}
export interface ReviewDocument extends mongoose.Document {
  name: string;
  phoneno: number;
  email: string;
  category: string;
  message: string;
  about: string;
}

const reviewSchema = new mongoose.Schema<ReviewDocument>(
  {
    name: { type: String, required: true },
    phoneno: { type: Number, required: true },
    email: { type: String, required: true },
    category: { type: String, enum: ['hostel', 'student chapter'], required: true },
    message: { type: String, required: true },
    about: { type: String, required: true },
  },
  { timestamps: true }
);

const Review =mongoose.models.Review || mongoose.model<ReviewDocument>('Review', reviewSchema);
// Define the schema
const marketPlaceSchema = new mongoose.Schema<IMarketPlace>({
  name: { type: String, required: true },
  phoneNo: { type: Number, required: true },
  email: { type: String, required: true },
  product: { type: String, enum: ['Stationary', 'Vehicle'], required: true },
  itemName: { type: String, required: true },
  price: { type: Number, required: true },
  negotiable: { type: Boolean, default: false },
  image: { type: String, required: true },
});

// Create the model
const MarketPlaceModel =mongoose.models.MarketPlaceModel || mongoose.model<IMarketPlace>('MarketPlaceModel', marketPlaceSchema);

export {Review,MarketPlaceModel};