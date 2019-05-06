import { EmailValidator } from '@angular/forms';

export interface UserSettings{
    id: number,
    name: string,
    dob: string,
    email: string,
    password: string,
    emailOffers: boolean,
    backgroundColour: string,
    subscriptionType: number,
    notes: string,
    rating: number
}