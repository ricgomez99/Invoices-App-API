import { Invoice } from '../schemas/schemas.js'

export class InvoicesModel {
  static async getInvoices() {
    try {
      const invoices = await Invoice.findAll()
      if (!invoices) return null

      return invoices
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message)
      }
    }
  }

  static async getInvoiceById(id) {
    try {
      const invoice = await Invoice.findByPk(id)
      if (!invoice) return null

      return invoice
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message)
      }
    }
  }

  static async createInvoice({ invoiceData }) {
    try {
      const invoice = await Invoice.create(invoiceData)
      if (!invoice) return null

      return invoice
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message)
      }
    }
  }

  static async updateInvoice({ id, inputData }) {
    try {
      const updatedInvoice = await Invoice.update(inputData, {
        where: {
          id: id,
        },
      })

      if (updatedInvoice) return updatedInvoice

      return null
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message)
      }
    }
  }

  static async deleteInvoice(id) {
    try {
      const deletedInvoice = await Invoice.destroy({
        where: {
          id: id,
        },
      })

      if (deletedInvoice) return true

      return null
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message)
      }
    }
  }
}
