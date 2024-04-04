import { User } from '../schemas/schemas.js'

export class UsersModel {
  static async getUsers() {
    try {
      const users = await User.findAll()
      if (users) {
        return users
      }

      return null
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message)
      }
    }
  }

  static async getUserById(id) {
    try {
      const user = await User.findByPk(id)
      if (user) return user

      return null
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message)
      }
    }
  }

  static async createUser({ userData }) {
    try {
      const user = await User.create(userData)
      if (user) return user

      return false
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message)
      }
    }
  }

  static async updateUser({ id, userData }) {
    try {
      const updatedUser = await User.update(userData, {
        where: {
          id: id,
        },
      })
      if (!updatedUser) return null

      return updatedUser
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message)
      }
    }
  }

  static async deleteUser(id) {
    try {
      const deletedUser = await User.destroy({
        where: {
          id: id,
        },
      })
      if (!deletedUser) return null

      return deletedUser
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message)
      }
    }
  }
}
