import { Options } from 'k6/options';
import getCrocodiles from './scenarios/getCrocodiles';
import createCrocodiles from './scenarios/createCrocodiles';

export const options: Partial<Options> = {
    scenarios: {
        create_crocodiles: {
            executor: 'ramping-vus',
            startVUs: 0,
            stages: [
                { duration: '5s', target: 5 },
                { duration: '10s', target: 10 },
                { duration: '20s', target: 20 },
                { duration: '10s', target: 10 },
                { duration: '5s', target: 5 },
            ],
            gracefulRampDown: '0s',
            exec: 'createCrocodiles',
        },
        get_crocodiles: {
            executor: 'constant-vus',
            vus: 20,
            duration: '1m',
            gracefulStop: '0s',
            exec: 'getCrocodiles'
        },
    },
    thresholds: {
        http_req_failed: ['rate<0.01'],
        'http_req_duration{scenario:create_crocodiles}': ['p(99)<200'],
        'http_req_duration{scenario:get_crocodiles}': ['p(99)<300'],
    },
};

export { createCrocodiles, getCrocodiles}