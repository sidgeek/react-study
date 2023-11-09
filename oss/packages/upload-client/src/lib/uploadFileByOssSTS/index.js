//ref: https://segmentfault.com/a/1190000040992156
import axios from 'axios'
import OSS from 'ali-oss'

// 后端生成sts，前端直传

async function getOssSTSToken() {
  const res = await axios.get("http://localhost:3001/sts")
  if (res.status !== 200) {
    return {
      code: res.status
    }
  }

  const { AccessKeyId, AccessKeySecret, Expiration, SecurityToken } = res.data.Credentials

  return {
    code: 200,
    data: {
      region: 'oss-cn-shanghai',
      accessKeyId: AccessKeyId,
      accessKeySecret: AccessKeySecret,
      stsToken: SecurityToken,
      expiration: Expiration,
      // 填写Bucket名称。
      bucket: "sid-test",
    }
  }
}

/**
 * 获取OSSClient
 * @param accessKeyId AccessKey ID
 * @param accessKeySecret 从STS服务获取的临时访问密钥AccessKey Secret
 * @param stsToken 从STS服务获取的安全令牌（SecurityToken）
 * @param region Bucket所在地域
 * @param bucket Bucket名称
 */
async function getOssClient() {
  const { code, data: params } = await getOssSTSToken();
  if (code !== 200) return false; // 如果请求出错，在上游处理
  const client = new OSS({
    ...params,
    refreshSTSTokenInterval: params.expiration,
    // 刷新临时访问凭证的时间间隔，单位为毫秒。
    //（这个refreshSTSToken是文档里的，为了保险各位可以在每次上传前先检查一次过期没有，不要依赖提供的这个方法）
    refreshSTSToken: async () => {
      const { code, data } = await getOssSTSToken(); // 过期后刷新token
      if (code === 200) {
        return data
      }
    },
  })
  return client
}

export default async function uploadFileToOssSTS({ file, fileName, bucketDir }) {
  const client = await getOssClient();

  const { res, url } = await client.put(`${bucketDir}/${fileName}`, file);
  if (res.status === 200) {
    // 这里拿到上传成功的文件的url
    return { error: null, url }
  } else {
    return { error: 'some error' }
  }
}