import api from '.'

interface createPayload {
    amount: number,
    category_id: number,
    date: string
}

export const create = (payload: createPayload) => {
    return api.post('transaction', payload)
}

export const list = () => {
    return api.get('transaction')
}

export const destory = (transactionId: number) => {
    return api.post('transaction', transactionId)
}

export default {create, list, destory}