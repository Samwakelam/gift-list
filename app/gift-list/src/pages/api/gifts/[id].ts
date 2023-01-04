import { NextApiRequest, NextApiResponse } from 'next';

import { databaseConnection } from 'lib/helpers/get-db-connection.helper';
import { ResponseProps } from 'lib/types/response-props.type';

import OwnerModel from 'lib/models/owner.model';
import ListModel from 'lib/models/list.model';
import GiftModel from 'lib/models/gift.model';

const getGift = async (id: string) => {
  await databaseConnection();

  try {
    await OwnerModel.find();
    await ListModel.find();
    const data = await GiftModel.find()
      .populate('lists')
      .populate({
        path: 'properties',
        populate: {
          path: 'purchasedBy',
          model: 'Owner',
        },
      })
      .populate({
        path: 'properties',
        populate: {
          path: 'watching',
          model: 'Owner',
        },
      })
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

const updateGift = async (
  id: string,
  key: string,
  body: any
): Promise<ResponseProps> => {
  await databaseConnection();

  try {
    const data = await GiftModel.updateOne({ _id: id }, { [key]: body[key] });

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
      const getData = await getGift(req.query.id as string);
      return res.status(getData.status).json(getData.json);
    }
    case 'PUT': {
      if (Object.keys(req.body).length === 1) {
        const putData = await updateGift(
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
