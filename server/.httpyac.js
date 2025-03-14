// https://httpyac.github.io/
module.exports = {
  defaultHeaders: {
    // 键和值都需要是string类型
    // 键需要以x-开头，标明是一个自定义header
    authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAxSk5aMVNURzVOMzdBRjVITTA1R1BGOEVTIiwiZW1haWwiOiJyRUlwZ1BZaGJBQG5vYS5jb20iLCJpYXQiOjE3NDE1Nzc1NzksImV4cCI6MTc0MTU4MTE3OX0.6cJtmTuFqgZQOhIjuy7DkMiwsv5y-_pM8Xa9ePbKGAY',
  },
  environments: {
    $shared: {
    },
    dev: {
      host: 'http://localhost:9999',
    },
    prod: {
      host: 'http://localhost:9999',
    },
  },
}
