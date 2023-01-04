import { NextApiRequest, NextApiResponse } from 'next';

import { databaseConnection } from 'lib/helpers/get-db-connection.helper';
import { ResponseProps } from 'lib/types/response-props.type';

import OwnerModel from 'lib/models/owner.model';
import WorkshopsModel from 'lib/models/workshop.model';
import ListModel from 'lib/models/list.model';

export const getAllWorkshops = async (): Promise<ResponseProps> => {
  await databaseConnection();

  try {
    await ListModel.find();
    await OwnerModel.find();
    const data = await WorkshopsModel.find()
      .populate('lists')
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

const createWorkshop = async (body: any): Promise<ResponseProps> => {
  await databaseConnection();
  console.log('body: ', body);

  try {
    const data = await WorkshopsModel.create({ ...body });

    return { status: 200, json: { message: 'Success', data } };
  } catch (error) {
    return { status: 500, json: { message: 'Error', error } };
  }
};

const updateAllWorkshops = async (body: any): Promise<ResponseProps> => {
  await databaseConnection();

  try {
    const data = await WorkshopsModel.updateMany({}, { $set: body });

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
      const getData = await getAllWorkshops();
      return res.status(getData.status).json(getData.json);
    }
    case 'POST': {
      const postData = await createWorkshop(req.body);
      return res.status(postData.status).json(postData.json);
    }
    case 'PUT': {
      const putData = await updateAllWorkshops(req.body);
      return res.status(putData.status).json(putData.json);
    }
    default: {
      return res.status(405).json({ message: 'Status not allowed' });
    }
  }
};
