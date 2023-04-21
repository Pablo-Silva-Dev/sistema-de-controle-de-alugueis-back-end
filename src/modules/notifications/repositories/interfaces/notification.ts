export interface INotification {
    id?: string;
    title: string;
    content: string;
    category: string;
    read?: boolean;
    print_number?: number;
}