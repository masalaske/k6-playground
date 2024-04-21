import { sleep } from 'k6';
import { Counter } from 'k6/metrics';
import { getCrocodiles } from '../crocodileApi';
import {isOk} from '../httpResponseAssertions';

export let successfulRetrievals = new Counter('retrieved_crocodiles')

export default function() {
    const response = getCrocodiles();

    if (isOk(response)) {
        successfulRetrievals.add(1);
    }

    sleep(1);
}
