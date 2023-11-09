import axios from "axios";
// 后端生成签名，前端直传

async function getOssSignle() {
  const res = await axios.get("http://localhost:3001/oss");

  if (res?.status !== 200) {
    return {
      code: res.status,
    };
  }

  return {
    code: 200,
    data: {
      ...res.data,
      success_action_status: "200",
      // 填写Bucket名称。
      bucket: "sid-test",
    },
  };
}

export default async function uploadFileToOss({ file, fileName, bucketDir }) {
  const { code, data } = await getOssSignle();
  if (code !== 200) return { error: "获取签名失败", url: "" };

  const { policy, accessid, success_action_status, signature, host } = data;
  const imgUrl = `https://xxxx/${bucketDir}/${fileName}`

  const formData = new FormData();
  formData.append("name", fileName);
  formData.append("key", `${bucketDir}/${fileName}`);
  formData.append("policy", policy);
  formData.append("OSSAccessKeyId", accessid);
  formData.append("success_action_status", success_action_status);
  formData.append("signature", signature);
  formData.append("file", file);

  let res, error;
  try {
    res = await axios.post(host, formData);
  } catch (error) {
    error = error;
  }

  if (res?.status === 200) {
    return { error, url: imgUrl };
  } else {
    return { error: error || "some error!" };
  }
}
