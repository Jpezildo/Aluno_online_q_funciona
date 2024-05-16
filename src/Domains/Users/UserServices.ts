import { UserRepository } from './UsersRepository';
import { IUser } from './types';

export class UsersService {
  async create({ email, name, surname, birthday, password }: IUser): Promise<IUser> {
    const userRepository = new UserRepository()

    if (!name) throw new Error("Name is missing")
    if (!email) throw new Error("Email is missing")
    if (!surname) throw new Error("surname is missing")
    if (!birthday) throw new Error("birthday is missing")
    if (!password) throw new Error("password is missing")

    const user = { email, name, surname, birthday, password }
    const createdUser = await userRepository.createUser(user)

    return createdUser
  }
}
