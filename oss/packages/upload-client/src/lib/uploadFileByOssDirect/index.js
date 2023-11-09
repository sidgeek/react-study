import { getOssUploadParams } from "./ossConfig";
import axios from 'axios'

export default async function uploadFileByOssDirect({ file, fileName, bucketDir }) {
  const {
    key,
    policy,
    OSSAccessKeyId,
    success_action_status,
    signature,
    host,
    imgUrl,
  } = getOssUploadParams(fileName, bucketDir);

  const formData = new FormData();
  formData.append('name', fileName);
  formData.append('key', key);
  formData.append('policy', policy);
  formData.append('OSSAccessKeyId', OSSAccessKeyId);
  formData.append('success_action_status', success_action_status);
  formData.append('signature', signature);
  formData.append('file', file);

  // let res, error
  // try {
  //   res = await axios.post(host, formData);
  // } catch (error) {
  //   error = error
  // }

  // if (res?.status === 200) {
  //   return { error, url: imgUrl }
  // } else {
  //   return { error: error || "some error!" }
  // }

  return { error: "some error!" }
}