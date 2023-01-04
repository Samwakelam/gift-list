import { NextApiRequest, NextApiResponse } from 'next';

import { databaseConnection } from 'lib/helpers/get-db-connection.helper';
import { ResponseProps } from 'lib/types/response-props.type';

import OwnerModel from 'lib/models/owner.model';
import WorkshopsModel from 'lib/models/workshop.model';
import { Owner } from '@sam/types';

export const getOwner = async (id: string): Promise<ResponseProps> => {
  await databaseConnection();

  try {
    await WorkshopsModel.find();
    const data = await OwnerModel.find({ _id: id })
      .populate('connections')
      .populate('workshops');

    return { status: 200, json: { message: 'Success', data } };
  } catch (error) {
    return { status: 500, json: { message: 'Error', error } };
  }
};

const updateOwner = async (
  id: string,
  owner: Owner
): Promise<ResponseProps> => {
  await databaseConnection();

  try {
    const data = await OwnerModel.updateOne({ _id: id }, owner);

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
      const getData = await getOwner(req.query.id as string);
      return res.status(getData.status).json(getData.json);
    }
    case 'PUT': {
      const putData = await updateOwner(req.query.id as string, req.body);
      return res.status(putData.status).json(putData.json);
    }
    default: {
      return res.status(405).json({ message: 'Status not allowed' });
    }
  }
};
