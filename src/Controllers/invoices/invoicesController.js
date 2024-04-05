export class InvoicesController {
  constructor({ invoicesModel }) {
    this.invoicesModel = invoicesModel
  }

  getInvoices = async (req, res) => {
    const invoices = await this.invoicesModel.getInvoices()
    if (!invoices) {
      return res.status(400).json({ message: 'Unable to get Invoices' })
    }

    return res.status(200).json(invoices)
  }

  getInvoice = async (req, res) => {
    const { id } = req.params
    const invoice = await this.invoicesModel.getInvoiceById(id)
    if (!invoice) {
      return res.status(400).json({ message: 'Invoice not found' })
    }

    return res.status(200).json(invoice)
  }

  createInvoice = async (req, res) => {
    const invoiceData = req.body
    const createdInvoice = await this.invoicesModel.createInvoice({
      invoiceData,
    })
    if (!createdInvoice) {
      return res.status(400).json({ message: 'Unable to create invoice' })
    }

    return res.status(202).json({ message: 'Invoice Created!' })
  }

  updateInvoice = async (req, res) => {
    const { id } = req.params
    const inputData = req.body

    const updatedData = await this.invoicesModel.updateInvoice({
      id,
      inputData,
    })
    if (!updatedData) {
      return res.status(400).json({ message: 'Unable to update Invoice data' })
    }

    return res.status(202).json({ message: 'Invoice data updated!' })
  }

  deleteInvoice = async (req, res) => {
    const { id } = req.params
    const deletedInvoice = await this.invoicesModel.deleteInvoice(id)
    if (!deletedInvoice) {
      return res.status(400).json({ message: 'Unable to delete Invoice' })
    }

    return res.status(202).json({ message: 'Invoice Deleted' })
  }
}