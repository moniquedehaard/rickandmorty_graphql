import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";

// COMPONENTS
import Loading from "../../components/Loading/Loading";
import NotFound from "../NotFoundPage/NotFoundPage";

// STYLES
import "./CharacterDetailPage.css";

// QUERY
const GET_SPECIFIC_CHARACTER = gql`
  query Character($id: ID!) {
    character(id: $id) {
      name
      status
      species
      type
      gender
      image
      origin {
        name
        type
      }
      location {
        name
        type
      }
      episode {
        id
      }
    }
  }
`;

export default function CharacterDetailPage(props) {
  const string = props.history.location.state;

  const { loading, error, data } = useQuery(GET_SPECIFIC_CHARACTER, {
    variables: { id: props.match.params.id },
  });

  // LOADING
  if (loading) return <Loading />;

  // ERROR
  if (error) return <NotFound />;

  // if DATA exists
  if (data) {
    const {
      name,
      image,
      gender,
      species,
      origin,
      location,
      episode,
    } = data.character;

    return (
      <div className="test">
        <div className="header">
          {!string ? (
            <button
              className="btn_gb"
              onClick={() => {
                props.history.goBack();
              }}
            >
              Go back
            </button>
          ) : (
            <Link
              className="btn_gb"
              to={{
                pathname: `/search`,
                state: { search: string.searchTerm },
              }}
            >
              Go back
            </Link>
          )}
        </div>

        <div className="content_container">
          <div className="cc_left">
            <h1>{name}</h1>
            <div className="vertical_line">
              <h3>Species: {species}</h3>
              <h3>Gender: {gender} </h3>
              <h3> Origin: {origin.name} </h3>
              <h3> Last seen: {location.name} </h3>
              <h3> Number of episodes:{episode.length} </h3>
            </div>
          </div>

          <div className="cc_right">
            <img src={image} alt={name} />
          </div>
        </div>

        <div className="content_footer"></div>
      </div>
    );
  }
}
