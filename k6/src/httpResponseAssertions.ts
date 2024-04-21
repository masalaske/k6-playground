import { check } from "k6";
import { RefinedResponse, ResponseType } from 'k6/http';

export function isOk(response: RefinedResponse<ResponseType>): boolean {
    return check(response, { 'status is 200': (r) => r.status === 200 });
}