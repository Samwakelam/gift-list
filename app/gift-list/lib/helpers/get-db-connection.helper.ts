import mongoose from 'mongoose';

export const databaseConnection = async (): Promise<typeof mongoose> => {
  const mongoDBUrl: string = process.env.MONGO_URI as string;

  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  };

  return await mongoose.connect(mongoDBUrl);
};
