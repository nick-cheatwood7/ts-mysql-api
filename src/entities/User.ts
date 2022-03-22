import { Entity, Property, PrimaryKey } from '@mikro-orm/core';
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class User {
  @PrimaryKey()
  id: string = uuidv4();

  @Property()
  createdAt: Date = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date();

  @Property()
  username!: string;

  @Property({ type: 'text' })
  password!: string;

  @Property()
  email!: string;
}
