import { Request, Response } from 'express';
import { DI } from '../index';
import { User } from '../entities/User';

export class UserController {
  static async getUsers(_req: Request, res: Response) {
    console.log('Fetching users...');
    // Fetch all users from db
    try {
      const users = await DI.em.find(User, {});
      res.send(users);
    } catch (err) {
      console.error(err);
      res.send('Cannot find users');
    }
  }
}
