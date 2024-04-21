# K6 Playground

Infrastructural setup is heavily inspired from official repo:  https://github.com/grafana/k6/blob/master/docker-compose.yml 

This playground extends it with Typescript and Vite support.
# How to start

```shell
cp .env.sample .env
npm install
docker compose up
npm run start
```

# Benefits of k6

- Familiar toolchain can be used (JS/TS)
- Load testing tools often are curl-like (e.g. [hey](https://github.com/rakyll/hey) , or declarative ([taurus](https://gettaurus.org/))
  - With k6 you can script your load tests in a modularized way
- Extensible
- Good Documentation and Community behind
- You can easily correlate load test data with your technical and functional monitoring dashboards (Grafana, Datadog,...)

# Further resources
- [k6 vs JMeter](https://grafana.com/blog/2021/01/27/k6-vs-jmeter-comparison/)
- [Performance Testing and k6 - Article explaining key concepts](https://medium.com/hepsiburadatech/performance-testing-and-k6-f650287607aa)
- REST and WS Test API: https://test-api.k6.io/
- Automation (CI):
  - [Jenkins](https://grafana.com/blog/2020/04/19/load-testing-your-api-with-postman/)
  - [GitHubActions](https://github.com/grafana/k6-action)
- Automatic test generation from existing artifacts:
  - [From OpenAPI / Swagger](https://grafana.com/blog/2020/04/19/load-testing-your-api-with-postman/)
  - [From Postman](https://grafana.com/blog/2020/04/19/load-testing-your-api-with-postman/)
- [Metrics](https://k6.io/docs/using-k6/metrics/)

# Helpful code examples
- https://github.com/go-automate/k6-typescript-framework/tree/master