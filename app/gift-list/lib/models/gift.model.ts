import { Schema, model, models, Types } from 'mongoose';

const GiftSchema = new Schema({
  name: { type: String },
  lookupKey: { type: String },
  createdAt: { type: Date },
  description: { type: String || null },
  visibility: {
    isVisible: { type: Boolean },
    sharedWith: { type: Types.ObjectId, ref: 'Owner' },
  },

  image: { type: String },
  price: { type: String },
  shopName: { type: String },
  url: { type: String },
  category: { type: String },
  details: { type: String },
  properties: {
    purchased: { type: Boolean },
    purchasedBy: { type: Types.ObjectId || null, ref: 'Owner' },
    watching: [{ type: Types.ObjectId, ref: 'Owner' }],
  },
  lists: [{ type: Types.ObjectId, ref: 'List' }],
});

export default models.Gift || model('Gift', GiftSchema, 'Gift');
