/******************************

脚本功能：简讯——解锁VIP
下载地址：https://is.gd/bs4iRX
软件版本：5.0.1
脚本作者：彭于晏💞
更新时间：2022-11-17

使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/api\.tipsoon\.com\/api\/v1\/user\/info url script-response-body https://raw.githubusercontent.com/dagenduizhanga/Surge/master/js/JX.js?token=GHSAT0AAAAAABXUN3UPWESJH3NWTUT7ZQOKY3V2AVQ

[mitm] 

hostname = api.tipsoon.com

*******************************/

body = $response.body.replace(/\"is_vip":\w+/g, '\"is_vip":true')

$done({body});
