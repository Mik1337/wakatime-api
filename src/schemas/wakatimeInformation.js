export default `
  type Time {
    digital: String
    hours: Int
    minutes: Int
    text: String
    total_seconds: Float
  }
  type Information {
    time: Time
    date: String
  }

  type Query {
    getInformation: [Information]
  }
`;
