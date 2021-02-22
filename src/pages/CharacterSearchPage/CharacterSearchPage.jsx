import React, { useState, useEffect } from "react";
import { useLazyQuery, gql } from "@apollo/client";

// OWN HOOKS
import useDebounce from "../../hooks/useDebounce";

// COMPONENTS
import { Loading, Card } from "../../components";

// PAGE COMPONENTS
import { NotFoundPage } from "../NotFoundPage";

// STYLES
import "./CharacterSearchPage.css";

// QUERY
const GET_CHARACTERS_BY_NAME = gql`
  query findCharacters($name: String!) {
    characters(filter: { name: $name }) {
      info {
        count
      }
      results {
        name
        id
        image
      }
    }
  }
`;

export default function CharacterSearchPage(props) {
  const string = props.history.location.state;
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  // Lazy Query: executing queries in response to events other than component rendering
  const [getCharacters, { data, loading, error }] = useLazyQuery(
    GET_CHARACTERS_BY_NAME,
    {
      variables: { name: debouncedSearchTerm },
    }
  );

  // Check  string
  useEffect(() => {
    if (string) {
      setSearchTerm(string.search);
    }
  }, [string]);

  // Make data request after time interval
  useEffect(() => {
    if (debouncedSearchTerm && debouncedSearchTerm.length > 0) {
      getCharacters();
    }
  }, [debouncedSearchTerm]);

  return (
    <div className="search_container">
      <div className="searchbar_container">
        <img src="results.png" alt="rickandmorty" />

        {/* CLEAN PAGE */}
        {!string && (
          <input
            placeholder="Find your favorite character... "
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            className="searchBarS"
          />
        )}

        {/* RECEIVING OUTPUT FROM HOME/PDP */}
        {string && (
          <input
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            className="searchBarS"
          />
        )}
      </div>

      {/* LOADING */}
      {loading && <Loading />}

      {/* ERROR */}
      {error && <NotFoundPage />}

      {/* DATA & SEARCHTERM */}
      {debouncedSearchTerm && data && (
        <div className="results_container">
          {data.characters.results.map((el) => {
            return (
              <Card
                key={el.id}
                data={el}
                linkTo={{
                  pathname: `/characters/${el.id}`,
                  state: {
                    searchTerm: searchTerm,
                  },
                }}
              />
            );
          })}
        </div>
      )}
    </div>

    //
  );
}
