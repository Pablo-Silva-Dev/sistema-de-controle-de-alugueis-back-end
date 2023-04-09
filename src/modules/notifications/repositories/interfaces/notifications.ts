import { INotification } from "./notification";

export interface INotificationsRepository {
    list: (itemsPerPage?: number, page?: number) => Promise<INotification[]>;
    listByCategory: (
        category: string,
        itemsPerPage?: number,
        page?: number
    ) => Promise<INotification[]>;
    create: ({ id, title, content, category }: INotification) => Promise<void>;
    update: (id: string, read: boolean) => Promise<void>;
    delete: (id: string) => Promise<void>;
}