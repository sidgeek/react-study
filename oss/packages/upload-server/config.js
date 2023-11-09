const {
  REACT_APP_OSS_ACCESSID,
  REACT_APP_OSS_ACCESSKEY,
  REACT_APP_OSS_DOMAIN,
  REACT_APP_OSS_BUCKET,
  REACT_APP_OSS_STS_ROLE,
} = process.env;

const ossConfig = {
  accessid: REACT_APP_OSS_ACCESSID,
  accesskey: REACT_APP_OSS_ACCESSKEY,
  domain: REACT_APP_OSS_DOMAIN,
  bucket: REACT_APP_OSS_BUCKET,
  role: REACT_APP_OSS_STS_ROLE,
};

const stsConfig = {
  accessKeyId: ossConfig.accessid,
  accessKeySecret: ossConfig.accesskey,
  roleArn: ossConfig.role,
  bucket: ossConfig.bucket,
};

const sigConfig = {
  accessKeyId: ossConfig.accessid,
  accessKeySecret: ossConfig.accesskey,
  bucket: ossConfig.bucket,
};

module.exports = { stsConfig, sigConfig };
