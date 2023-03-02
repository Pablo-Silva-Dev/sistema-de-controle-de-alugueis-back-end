import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)


function dateDifference(start_date: Date, end_date: Date): number {
    const startDate = dayjs(start_date)
    const endDate = dayjs(end_date)
    return endDate.diff(startDate, 'days')
}

function daysToExpireRent(end_date: Date): number {
    const endDate = dayjs(end_date)
    return endDate.diff(new Date(), 'days')
}

console.log(dateDifference(new Date('2023-03-10T00:00:00.000Z'),
    new Date('2023-03-28T00:00:00.000Z')))
console.log(daysToExpireRent(new Date('2023-03-28T00:00:00.000Z')))