import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc'
import { IDateProvider } from '../interfaces/IDateProvider'

dayjs.extend(utc)

export class DateProvider implements IDateProvider {
    compareInHours(start_date: Date, end_date: Date): number {
        const end_date_utc = this.convertToUTC(end_date)
        const start_date_utc = this.convertToUTC(start_date)
        const totalHours = dayjs(end_date_utc).diff(start_date_utc)
        return totalHours
    }
    convertToUTC(date: Date): string {
        const utcDate = dayjs(date).utc().local().format()
        return utcDate
    }
    dateNow(): Date {
        const dateNow = dayjs().toDate()
        return dateNow
    }
    compareInDays(start_date: Date, end_date: Date): number {
        const startDate = this.convertToUTC(start_date)
        const endDate = this.convertToUTC(end_date)
        const totalDays = dayjs(endDate).diff(startDate)
        return totalDays
    }
    addDays(days: number): Date {
        const totalDays = dayjs().add(days, 'days').toDate()
        return totalDays
    }
    addHours(hours: number): Date {
        const totalHours = dayjs().add(hours, 'hours').toDate()
        return totalHours
    }
    compareIfBefore(start_date: Date, end_date: Date): boolean {
        const isBefore = dayjs(start_date).isBefore(end_date)
        return isBefore
    }
    dateDifference(start_date: Date, end_date: Date): number {
        const startDate = dayjs(start_date)
        const endDate = dayjs(end_date)
        return endDate.diff(startDate, 'days')
    }
    daysToExpireRent(end_date: Date): number {
        const endDate = dayjs(end_date)
        return endDate.diff(new Date(), 'days')
    }
}