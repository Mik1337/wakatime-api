export default {
  Query: {
    getInformation: async (_, args, { models }) => {
      try {
        return models.Information.find({}, {_id:0}, (err, data) => {
          if (err) {
            throw err;
          } else {
            return data;
          }
        });
      } catch (err) {
        console.log(err);
        return null;
      }
    },
  },
};
