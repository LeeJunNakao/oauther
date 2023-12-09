import { Request as ExpressRequest } from 'express';

export type Request = Omit<ExpressRequest, 'session'> & {
  session: {
    adminId: number;
    email: string;
    isMaster: boolean;
  };
};
