import HttpClient from './httpClient';
import { RefinedResponse, ResponseType } from 'k6/http';
import {CreateCrocodile} from './models/createCrocodile';

const httpClient: HttpClient = new HttpClient(`${__ENV.BASE_URL}`, { 'Content-Type': 'application/json' });

export function createCrocodile(payload: CreateCrocodile): RefinedResponse<ResponseType> {
   return httpClient.post('/crocodiles', JSON.stringify(payload));
}

export function getCrocodiles(): RefinedResponse<ResponseType> {
    return httpClient.get('/crocodiles');
}
