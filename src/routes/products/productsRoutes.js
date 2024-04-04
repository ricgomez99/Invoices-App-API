import { Router } from 'express'
import { ProductsController } from '../../Controllers/products/productsControlles.js'

export const createProductsRouter = ({ productsModel }) => {
  const productsRouter = Router()
  const productsController = new ProductsController({ productsModel })

  productsRouter.get('/', productsController.getProducts)
  productsRouter.get('/:id', productsController.getProduct)
  productsRouter.post('/', productsController.createProduct)
  productsRouter.patch('/:id', productsController.updateProduct)
  productsRouter.delete('/:id', productsController.deleteProduct)

  return productsRouter
}
