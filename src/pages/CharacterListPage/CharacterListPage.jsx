import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";

// COMPONENTS
import { Card, Loading } from "../../components";

// PAGE COMPONENTS
import NotFound from "../NotFoundPage/NotFoundPage";

// STYLES
import "./CharacterListPage.css";

// QUERY
const GET_CHARACTERS = gql`
  query getCharacters($page: Int!) {
    characters(page: $page) {
      info {
        count
        pages
      }
      results {
        name
        id
        image
      }
    }
  }
`;

export default function CharacterListPage() {
  const [counter, setCounter] = useState(1);

  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { page: counter },
  });

  // Loading
  if (loading) return <Loading />;

  // Error
  if (error) return <NotFound />;

  return (
    <div className="container_pp">
      <div className="box">
        {data.characters.results.map((el) => (
          <Card
            className="card"
            key={el.id}
            data={el}
            linkTo={`/characters/${el.id}`}
          />
        ))}
      </div>

      <div className="buttons">
        <button
          className="pagination_btn"
          onClick={() => {
            counter > 1 && setCounter(counter - 1);
          }}
        >
          See previous page
        </button>
        <button
          className="pagination_btn"
          onClick={() => {
            counter < 35 && setCounter(counter + 1);
          }}
        >
          See next page
        </button>
      </div>
    </div>
  );
}
