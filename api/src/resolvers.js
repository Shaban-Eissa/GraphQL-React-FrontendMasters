module.exports = {
  Query: {
    pets(_, { input }, { models }) {
      return models.Pet.findMany(input || {});
    },
    pet(_, { id }, { models }) {
      return models.Pet.findOne({ id });
    },
    user(_, __, { models }) {
      return models.User.findOne();
    },
  },
  Mutation: {
    addPet(_, { input }, { models }) {
      return models.Pet.create(input);
    },
    removePet: async (_, { id }, { models }) => {
      const pet = await models.Pet.findOne({ id });
      if (!pet) {
        return false;
      }
      await models.Pet.remove(pet);
      return true;
    },
  },

  Pet: {
    img(pet) {
      return pet.type === "DOG"
        ? "https://placehold.co/600x400"
        : "https://placehold.co/600x400";
    },
  },
};
