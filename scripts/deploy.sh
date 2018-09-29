yarn run build
aws s3 sync ./build s3://inbox-template --profile s3-admin --delete