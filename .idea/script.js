import http from 'k6/http';
export default function () {

  const url = 'http://test.k6.io/login';
  const payload = JSON.stringify({

  email: 'aaa',
  password: 'bbb',

  }

  );
  const param = {
  headers: {
     'Content-Type': 'application/json',
  },
  };

  http.post(url, payload, param);
}