import { graphql } from 'react-relay';

const query = graphql`
  query srcAppQuery {
    hello
    js
  }
`;

console.log(query);