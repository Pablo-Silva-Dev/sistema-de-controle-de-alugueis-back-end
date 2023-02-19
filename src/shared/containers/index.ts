import { container } from 'tsyringe'
import { AdministratorsRepository } from '../../modules/administrators/repositories/implementations/AdministratorsRepository'
import { AdmTokensRepository } from '../../modules/administrators/repositories/implementations/AdmTokensRepository'
import { ClientsRepository } from '../../modules/clients/repositories/implementations/ClientsRepository'
import { ItemsRepository } from '../../modules/items/repositories/implementations/ItemsRepository'
import { OrdersRepository } from '../../modules/orders/repositories/implementations/OrdersRepository'
import { DateProvider } from '../providers/DateProvider/implementations/DateProvider'
import { SESMailProvider } from '../providers/EmailProvider/SESMailProvider'

container.registerSingleton('ClientsRepository', ClientsRepository)
container.registerSingleton('ItemsRepository', ItemsRepository)
container.registerSingleton('AdministratorsRepository', AdministratorsRepository)
container.registerSingleton('AdmTokensRepository', AdmTokensRepository)
container.registerSingleton('OrdersRepository', OrdersRepository)
container.registerSingleton('DateProvider', DateProvider)
container.registerInstance('SESMailProvider', new SESMailProvider())