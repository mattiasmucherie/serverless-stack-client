export default {
  STRIPE_KEY: "pk_test_46zYjQNSCpJslL11rOlcoG0Y002GwAlMvi",
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "eu-west-1",
    BUCKET: "notes-app-uploads-serverless-hallonkvarg"
  },
  apiGateway: {
    REGION: "eu-west-1",
    URL: "https://gdlrnsjtg8.execute-api.eu-west-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "eu-west-1",
    USER_POOL_ID: "eu-west-1_v84qKoTkh",
    APP_CLIENT_ID: "2f1t14c09ngmd2ic29e4qpf5sl",
    IDENTITY_POOL_ID: "eu-west-1:10c4ae21-7cf1-498d-81e6-4f76956bc5a3"
  }
};
