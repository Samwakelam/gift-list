import { useRef } from 'react';
import * as process from 'process';

import { Owner, Workshop } from '@sam/types';

import { WorkshopManagerContract } from './workshop-manager.contract';
import { getFetcher } from '../../helpers/get-fetcher.helper';

export class WorkshopManagerService implements WorkshopManagerContract {
  owner: Owner;
  env = process.env.NODE_ENV === 'development' ? 'http' : 'https';

  constructor(owner: Owner) {
    this.owner = owner;
  }

  async createWorkshop(
    workshop: Omit<Workshop, 'id'>
  ): Promise<Workshop | null> {
    const host = window.location.host;
    const absoluteURL = `${this.env}://${host}/api/workshops/`;

    const fetchData = await getFetcher(absoluteURL, 'POST', {
      ...workshop,
      lookupKey: `#owner:${this.owner._id}`,
      owner: this.owner._id,
    });

    if (fetchData.message === 'Error') throw new Error(fetchData.error);

    const workshops: Workshop[] = [...this.owner.workshops];
    workshops.push(fetchData.data);

    this.updateOwner({ ...this.owner, workshops });
    return fetchData.data;
  }

  async getOwner(): Promise<Owner | null> {
    return this.owner;
  }

  async getOwnerById(id: string): Promise<Owner | null> {
    return null;
  }

  async getConnectionById(id: string): Promise<Owner | null> {
    const connections = this.owner.connections;
    const connection = connections.filter((x) => x._id === id)[0];
    if (connection) {
      return connection;
    }
    return null;
  }

  async updateOwner(owner: Owner): Promise<void> {
    const host = window.location.host;
    const absoluteURL = `${this.env}://${host}/api/owners/${owner._id}`;

    const currentOwner = { ...this.owner };
    this.owner = owner;

    const fetchData = await getFetcher(absoluteURL, 'PUT', owner);

    if (fetchData.message === 'Error') throw new Error(fetchData.error);

    if (fetchData.data.modifiedCount === 0) {
      this.owner = currentOwner;
      throw new Error('Did not modify workspace');
    }
  }

  async updateWorkshopById(id: string, workshop: Workshop): Promise<void> {
    const host = window.location.host;
    const absoluteURL = `${this.env}://${host}/api/workshops/${id}`;

    const index = this.owner.workshops.findIndex(
      (_workshop) => _workshop._id === workshop._id
    );
    this.owner.workshops[index] = workshop;
    const fetchData = await getFetcher(absoluteURL, 'PUT', workshop);

    if (fetchData.message === 'Error') throw new Error(fetchData.error);
  }

  async deleteWorkshopById(id: string): Promise<void> {}
}

export function useWorkshopManagerService(owner: Owner) {
  const manager = useRef(new WorkshopManagerService(owner)).current;
  return manager;
}
