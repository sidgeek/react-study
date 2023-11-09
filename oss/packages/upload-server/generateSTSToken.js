const StsClient = require("@alicloud/sts-sdk");

/**
 * 生成STStoken
 * @param accessKeyId AccessKey ID
 * @param accessKeySecret 从STS服务获取的临时访问密钥AccessKey Secret
 * @param roleArn 指定角色的ARN
 * @param roleSessionName 时临时Token的会话名称，自己指定用于标识你的用户，或者用于区分Token颁发给谁
 * @param durationSeconds token 有效事件，单位：秒
 * @param policy 指定的授权策略 默认为null
 * @return
 *   RequestId, 请求id
 *   AssumedRoleUser: {
 *     Arn, ${roleArn}/${roleSessionName}
 *     AssumedRoleId
 *   },
 *   Credentials: {
 *     SecurityToken, sts token
 *     AccessKeyId, accessKeyId
 *     AccessKeySecret, accessKeySecret
 *     Expiration 过期时间
 *   }
 */

function generateSTSToken({
  accessKeyId,
  accessKeySecret,
  roleArn,
  roleSessionName = "external-username",
  durationSeconds = 3600,
  policy = null,
}) {
  const sts = new StsClient({
    endpoint: "sts.aliyuncs.com", // check this from sts console
    accessKeyId, // check this from aliyun console
    accessKeySecret, // check this from aliyun console
  });
  return sts.assumeRole(roleArn, roleSessionName, policy, durationSeconds);
}


module.exports = generateSTSToken