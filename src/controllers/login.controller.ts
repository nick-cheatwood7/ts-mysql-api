import { Request, Response } from 'express';
// import { RequestContext } from '@mikro-orm/core';

export class LoginController {
  static async apiLogin(_req: Request, res: Response) {
    // Get auth headers
    // Lookup user by credentials
    // If a user was found, authenticate them
    res.send('Logged in!');
  }
}
