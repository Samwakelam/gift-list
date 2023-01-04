import { Schema, models, model, Types } from 'mongoose';

const WorkshopSchema = new Schema({
  name: { type: String },
  lookupKey: { type: String },
  createdAt: { type: Date },
  description: { type: String || null },
  visibility: {
    isVisible: { type: Boolean },
    sharedWith: [{ type: Types.ObjectId, ref: 'Owner' }],
  },

  lists: [{ type: Types.ObjectId, ref: 'List' }],
  owner: { type: Types.ObjectId, ref: 'Owner' },
});

export default models.Workshop || model('Workshop', WorkshopSchema, 'Workshop');
