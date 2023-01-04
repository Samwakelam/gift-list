import { NextApiRequest, NextApiResponse } from 'next';

import { databaseConnection } from 'lib/helpers/get-db-connection.helper';
import { ResponseProps } from 'lib/types/response-props.type';

import OwnerModel from 'lib/models/owner.model';
import WorkshopsModel from 'lib/models/workshop.model';
import ListModel from 'lib/models/list.model';
import GiftModel from 'lib/models/gift.model';

const getList = async (id: string) => {
  await databaseConnection();

  try {
    await WorkshopsModel.find();
    await OwnerModel.find();
    await GiftModel.find();
    const data = await ListModel.find({ _id: id })
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

const updateList = async (
  id: string,
  key: string,
  body: any
): Promise<ResponseProps> => {
  await databaseConnection();

  try {
    const data = await ListModel.updateOne({ _id: id }, { [key]: body[key] });

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
      const getData = await getList(req.query.id as string);
      return res.status(getData.status).json(getData.json);
    }
    case 'PUT': {
      if (Object.keys(req.body).length === 1) {
        const putData = await updateList(
          req.query.id as string,
          Object.keys(req.body)[0],
          req.body
        );
        return res.status(putData.status).json(putData.json);
      }
    }
    default: {
      return res.status(405).json({ message: 'Status not allowed' });
    }
  }
};
