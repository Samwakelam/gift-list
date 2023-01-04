import { Schema, model, models, Types } from 'mongoose';

const OwnerSchema = new Schema({
  name: { type: String, lowercase: true },
  image: { type: String || null },
  workshops: [{ type: Types.ObjectId, ref: 'Workshop' }],
  connections: [{ type: Types.ObjectId, ref: 'Owner' }],
  password: { type: String },
});

export default models.Owner || model('Owner', OwnerSchema, 'Owner');
