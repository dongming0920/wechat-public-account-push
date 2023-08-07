/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {
    "APP_ID": "wx83c7dba518610925",
    "APP_SECRET": "ef8eafe96d19fce7a740a1ddb7380ff2",
    "IS_SHOW_COLOR": true,
    "CALLBACK_TEMPLATE_ID": "Ccz27ZKSQtr5c9OSHn0PLEqepVWFpoNRVjqVW9KFHCY",
    "CALLBACK_USERS": [
        {
            "name": "自己",
            "id": "okbkG6VqaNz6wxZc1ZSpJvFUpt2Q"
        }
    ],
    "USERS": [
        {
            "name": "东",
            "id": "Ccz27ZKSQtr5c9OSHn0PLEqepVWFpoNRVjqVW9KFHCY",
            "useTemplateId": "okbkG6VqaNz6wxZc1ZSpJvFUpt2Q",
            "province": "浙江",
            "city": "杭州",
            "horoscopeDate": "10-21",
            "horoscopeDateType": "今日",
            "openUrl": "https://shuangxunian.github.io/",
            "festivals": [
                {
                    "type": "*生日",
                    "name": "东",
                    "date": "11-03",
                    "year": "2023"
                }
            ],
            "customizedDateList": []
        }
    ],
    "SWITCH": {
        "weather": true,
        "holidaytts": true,
        "CIBA": true,
        "oneTalk": false,
        "earthyLoveWords": true,
        "momentCopyrighting": false,
        "poisonChickenSoup": false,
        "poetry": false,
        "horoscope": true,
        "birthdayMessage": true
    }
}

module.exports = USER_CONFIG

