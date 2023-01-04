import { NextApiRequest, NextApiResponse } from 'next';

import { databaseConnection } from 'lib/helpers/get-db-connection.helper';
import { ResponseProps } from 'lib/types/response-props.type';

import OwnerModel from 'lib/models/owner.model';
import WorkshopsModel from 'lib/models/workshop.model';

export const getAllOwners = async (): Promise<ResponseProps> => {
  await databaseConnection();

  try {
    await WorkshopsModel.find();
    const data = await OwnerModel.find()
      .populate('connections')
      .populate('workshops');

    return { status: 200, json: { message: 'Success', data } };
  } catch (error) {
    return { status: 500, json: { message: 'Error', error } };
  }
};

const createOwner = async (body: any): Promise<ResponseProps> => {
  await databaseConnection();

  try {
    const data = await OwnerModel.create({ ...body });

    return { status: 200, json: { message: 'Success', data } };
  } catch (error) {
    return { status: 500, json: { message: 'Error', error } };
  }
};

const updateAllOwners = async (body: any): Promise<ResponseProps> => {
  await databaseConnection();

  try {
    const data = await OwnerModel.updateMany({}, { $set: body });

    return { status: 200, json: { message: 'Success', data } };
  } catch (error) {
    return { status: 500, json: { message: 'Error', error } };
  }
};

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  switch (req.method) {
    case 'GET': {
      const getData = await getAllOwners();
      return res.status(getData.status).json(getData.json);
    }
    case 'POST': {
      const postData = await createOwner(req.body);
      return res.status(postData.status).json(postData.json);
    }
    case 'PUT': {
      const putData = await updateAllOwners(req.body);
      return res.status(putData.status).json(putData.json);
    }
    default: {
      return res.status(405).json({ message: 'Status not allowed' });
    }
  }
};
