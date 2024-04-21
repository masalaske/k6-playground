import { sleep } from 'k6';
import { Counter } from 'k6/metrics';
import { createCrocodile } from '../crocodileApi';
import {isOk} from '../httpResponseAssertions';
import {someCreateCrocodile} from '../models/createCrocodile';

export let successfulCreations = new Counter('created_crocodiles');

export default function() {
    const payload = someCreateCrocodile();

    const response = createCrocodile(payload);

    if (isOk(response)) {
        successfulCreations.add(1);
    }

    sleep(1);
}
