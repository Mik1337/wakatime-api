export default (mongoose) => {
  const Information = mongoose.model(
    'data', {
      time: Object,
      date: String
    }
  );
  return Information;
};
