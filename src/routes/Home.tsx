import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
// import {} from 'styled-components/cssprop'

const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
    }
  }
`;

export default () => {
  const { loading, data } = useQuery(GET_MOVIES);
  // if (loading) {
  //   return "Loading...";
  // }
  // if (data && data.movies) {
  //   return data.movies.map((m: any) => <h1>{m.id}</h1>);
  // }

  return (
    <div className='home'>
      <header className='home'></header>
    </div>
  );
};
