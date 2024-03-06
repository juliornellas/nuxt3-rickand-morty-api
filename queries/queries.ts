export const GET_CHARACTERS = gql`
  query getCharacters {
    characters {
      results {
        name
        image
        status
        id
        species
        location {
          name
        }
      }
    }
  }
`;

export const GET_CHARACTER = gql`
  query getCharacters($id: ID!) {
    character(id: $id) {
      name
      image
      status
      id
      species
      location {
        name
      }
    }
  }
`;
