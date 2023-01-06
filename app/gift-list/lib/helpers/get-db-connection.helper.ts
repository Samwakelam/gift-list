import mongoose from 'mongoose';

export const databaseConnection = async (): Promise<typeof mongoose> => {
  console.log('process.env.MONGO_URI: ', process.env.MONGO_URI);
  const mongoDBUrl: string = process.env.MONGO_URI as string;

  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  };

  return await mongoose.connect(mongoDBUrl);
};
