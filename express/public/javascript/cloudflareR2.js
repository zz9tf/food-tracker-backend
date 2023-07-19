import {
    S3Client,
    ListBucketsCommand,
    ListObjectsV2Command,
    GetObjectCommand,
    PutObjectCommand,
    CreateBucketCommand
  } from "@aws-sdk/client-s3";
  import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const accountId = process.env.ACCOUNT_ID
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

export const client = new S3Client({
  region: "auto",
  endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
  },
});
  
export const testParams = {
  Bucket: 'bucket-test',
  Key: 'test',
  Body: 'Body'
}

export const createBucket = async(params) => {
    try {
      const data = await client.send(
        new CreateBucketCommand({ Bucket: params.Bucket })
      );
      console.log(data);
      console.log("Successfully created a bucket called ", data.Location);
      return data;
    } catch (err) {
      console.log('Error', err);
    }
  }
  
  
  export const uploadedParams = async(params) => {
    try {
      const results = await client.send(new PutObjectCommand(params));
      console.log('Successfully created' + params.Key + ' and uploaded it to ' + params.Bucket + '/' + params.Key);
      return results;
    } catch (err) {
      console.log('Error', err);
    }
  }
  
  
  // router.get('/', async (req, res) => {
  //   res.json(await downloadParams(testParams));
  // });
  export const downloadParams = async (params) => {
    const command = new GetObjectCommand({
      Bucket: params.Bucket,
      Key: "test"
    });
  
    try {
      const response = await client.send(command);
      // The Body object also has 'transformToByteArray' and 'transformToWebStream' methods.
      const str = await response.Body.transformToString();
      console.log(str);
      return str;
    } catch (err) {
      console.error(err);
    }
  };