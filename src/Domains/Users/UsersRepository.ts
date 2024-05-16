import { User } from '../../../db/entity'
import { AppDataSource } from '../../../db/data-source'
import { IUser } from './types'

export class UserRepository {
  async getUsers() {
    const db: IUser[] = [
  
    ]

    return db
  }
  async createUser({ name, surname, email }: IUser) {
    const userRepository = AppDataSource.getRepository(User)
    const birthday = (new Date()).toTimeString()
    const user = {
      name,
      surname,
      email,
      birthday: birthday
    }

    const createdUser = await userRepository.save(user)

    return createdUser
  }
}
