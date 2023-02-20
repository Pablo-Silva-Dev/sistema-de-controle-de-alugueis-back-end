import { v4 as uuidv4 } from 'uuid'

export function generateVoucherCode() {
    const randomVoucherCode = uuidv4()
        .toString()
        .substring(0, 6)
        .toUpperCase()
    return randomVoucherCode
}


