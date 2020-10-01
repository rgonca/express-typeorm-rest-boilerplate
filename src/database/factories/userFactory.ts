import { User } from '../../api/entities/User';
import bcrypt from 'bcrypt';
import * as faker from 'faker';

export default async (data?: User): Promise<User> => {
  let password = await bcrypt.hash(faker.random.word(), 12);
  if (data && data.password) {
    password = await bcrypt.hash(data.password, 12);
  }
  const user = new User({
    firstName: (data && data.firstName) || faker.name.firstName(),
    lastName: (data && data.lastName) || faker.name.lastName(),
    email: (data && data.email) || faker.internet.email(),
    password,
  });
  return user;
};
