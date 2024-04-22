import { z } from 'zod'
import {CurrencySchema, CryptocurrencyResponseSchema} from '../schema/crypto-schema'

export type Currency = z.infer<typeof CurrencySchema>

export type Cryptocurrency = z.infer<typeof CryptocurrencyResponseSchema>