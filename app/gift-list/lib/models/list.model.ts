import { Schema, model, models, Types } from 'mongoose';

const ListSchema = new Schema({
  name: { type: String },
  lookupKey: { type: String },
  createdAt: { type: Date },
  description: { type: String || null },
  visibility: {
    isVisible: { type: Boolean },
    sharedWith: { type: Types.ObjectId, ref: 'Owner' },
  },

  gifts: { type: Types.ObjectId, ref: 'Gift' },
  workshop: { type: Types.ObjectId, ref: 'Workshop' },
  owner: { type: Types.ObjectId, ref: 'Owner' },
});

export default models.List || model('List', ListSchema, 'List');
