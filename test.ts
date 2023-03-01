import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)


function dateDifference(start_date: Date, end_date: Date): number {
    const startDate = dayjs(start_date)
    const endDate = dayjs(end_date)
    return endDate.diff(startDate, 'days')
}

console.log(dateDifference(new Date('2023-02-24'), new Date('2023-02-28')))