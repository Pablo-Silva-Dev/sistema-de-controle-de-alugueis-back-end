import dayjs from "dayjs"

export function daysToExpireRent(end_date: Date): number {
    const endDate = dayjs(end_date)
    return endDate.diff(new Date(), 'days')
}