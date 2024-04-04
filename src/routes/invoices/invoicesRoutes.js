import { InvoicesController } from '../../Controllers/invoices/invoicesController.js'
import { Router } from 'express'

export const createInvoicesRouter = ({ invoicesModel }) => {
  const invoicesController = new InvoicesController({ invoicesModel })
  const invoicesRouter = Router()

  invoicesRouter.get('/', invoicesController.getInvoices)
  invoicesRouter.get('/:id', invoicesController.getInvoice)
  invoicesRouter.post('/', invoicesController.createInvoice)
  invoicesRouter.patch('/:id', invoicesController.updateInvoice)
  invoicesRouter.delete('/:id', invoicesController.deleteInvoice)

  return invoicesRouter
}
