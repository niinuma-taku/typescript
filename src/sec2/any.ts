import axios from 'axios';
export {};

let url: string =
  'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

axios.get(url).then(function (res) {
  interface Article {
    id: number;
    title: string;
    description: string;
  }

  let data: Article[];
  data = res.data;

  data = [
    {
      id: 15,
      title: 'r',
      description: 're',
    },
  ];

  console.log(res);
});
