import React from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

const PetBox = ({ pet }) => {
  const DELETE_PET = gql`
    mutation DeletePet($id: ID!) {
      removePet(id: $id)
    }
  `;

  const ALL_PETS = gql`
    query AllPets {
      pets {
        id
        name
        type
        img
      }
    }
  `;
  const [DeletePetMutation, { loading, error }] = useMutation(DELETE_PET, {
    refetchQueries: [{ query: ALL_PETS }],
  });
  const deletePetHandler = () => {
    DeletePetMutation({
      variables: { id: pet.id },
    });
  };
  return (
    <div className="pet pet-container">
      <figure>
        <img src={pet.img + `?pet=${pet.id}`} alt="" />
      </figure>
      <div className="pet-name">{pet.name}</div>
      <div className="pet-type">{pet.type}</div>
      <div>
        <button onClick={deletePetHandler} className="pet-delete">
          Delete Item
        </button>
      </div>
    </div>
  );
};

export default PetBox;
