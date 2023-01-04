import { NextApiRequest, NextApiResponse } from 'next';

import { databaseConnection } from 'lib/helpers/get-db-connection.helper';
import { ResponseProps } from 'lib/types/response-props.type';

import OwnerModel from 'lib/models/owner.model';
import WorkshopsModel from 'lib/models/workshop.model';
import ListModel from 'lib/models/list.model';
import { Workshop } from '@sam/types';

export const getWorkshop = async (id: string) => {
  await databaseConnection();

  try {
    await ListModel.find();
    await OwnerModel.find();
    const data = await WorkshopsModel.find({ _id: id })
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

const updateWorkshop = async (
  id: string,
  body: Workshop
): Promise<ResponseProps> => {
  await databaseConnection();

  try {
    const data = await WorkshopsModel.updateOne({ _id: id }, { ...body });

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
      const getData = await getWorkshop(req.query.id as string);
      return res.status(getData.status).json(getData.json);
    }
    case 'PUT': {
      const putData = await updateWorkshop(req.query.id as string, req.body);
      return res.status(putData.status).json(putData.json);
    }
    default: {
      return res.status(405).json({ message: 'Status not allowed' });
    }
  }
};
