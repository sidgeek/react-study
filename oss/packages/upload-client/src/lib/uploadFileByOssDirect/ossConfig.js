import { Base64 } from './base64';
import { CRYUtil } from './crypto/crypto';
import HMAC from './crypto/hmac';
import SHA1 from './crypto/sha1';

const { REACT_APP_OSS_ACCESSID, REACT_APP_OSS_ACCESSKEY, REACT_APP_OSS_DOMAIN, REACT_APP_OSS_BUCKET} = process.env
const ossConfig = {
  accessid: REACT_APP_OSS_ACCESSID,
  accesskey: REACT_APP_OSS_ACCESSKEY,
  domain: REACT_APP_OSS_DOMAIN, 
  bucket: REACT_APP_OSS_BUCKET,
}

export const getOssUploadParams = (fileName, bucketDir = 'img') => {
  const policyText = {
    expiration: '2024-09-01T12:00:00.000Z', //设置该Policy的失效时间，超过这个失效时间之后，就没有办法通过这个policy上传文件了
    conditions: [
      ['content-length-range', 0, 1048576000], // 设置上传文件的大小限制
    ],
  };

  const policyBase64 = Base64.encode(JSON.stringify(policyText));
  const message = policyBase64;
  const bytes = HMAC(SHA1, message, ossConfig.accesskey, {
    asBytes: true,
  });
  const signature = CRYUtil.bytesToBase64(bytes);

  const { accessid, domain, bucket } = ossConfig;
  const key = `${bucketDir}/${fileName}`;
  return {
    key,
    OSSAccessKeyId: accessid,
    policy: policyBase64,
    signature,
    success_action_status: 200,
    host: `https://${bucket}.${domain}/`,
    imgUrl: `https://xxxxxa/${key}`, // 阿里云的oss对应的对外访问地址
  };
};
