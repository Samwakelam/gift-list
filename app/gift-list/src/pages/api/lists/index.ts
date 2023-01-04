import { NextApiRequest, NextApiResponse } from 'next';

import { databaseConnection } from 'lib/helpers/get-db-connection.helper';
import { ResponseProps } from 'lib/types/response-props.type';

import OwnerModel from 'lib/models/owner.model';
import WorkshopsModel from 'lib/models/workshop.model';
import ListModel from 'lib/models/list.model';
import GiftModel from 'lib/models/gift.model';

export const getAllLists = async (): Promise<ResponseProps> => {
  await databaseConnection();

  try {
    await WorkshopsModel.find();
    await OwnerModel.find();
    await GiftModel.find();
    const data = await ListModel.find()
      .populate('gifts')
      .populate('workshop')
      .populate('owner')
      .populate({
        path: 'visibility',
        populate: {
          path: 'sharedWith',
          model: 'Owner',
        },
      });

    return { status: 200, json: { message: 'Success', data } };
  } catch (error) {
    return { status: 500, json: { message: 'Error', error } };
  }
};

const createList = async (body: any): Promise<ResponseProps> => {
  await databaseConnection();

  try {
    const data = await ListModel.create({ ...body });

    return { status: 200, json: { message: 'Success', data } };
  } catch (error) {
    return { status: 500, json: { message: 'Error', error } };
  }
};

const updateAllLists = async (body: any): Promise<ResponseProps> => {
  await databaseConnection();

  try {
    const data = await ListModel.updateMany({}, { $set: body });

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
      const getData = await getAllLists();
      return res.status(getData.status).json(getData.json);
    }
    case 'POST': {
      const postData = await createList(req.body);
      return res.status(postData.status).json(postData.json);
    }
    case 'PUT': {
      const putData = await updateAllLists(req.body);
      return res.status(putData.status).json(putData.json);
    }
    default: {
      return res.status(405).json({ message: 'Status not allowed' });
    }
  }
};
