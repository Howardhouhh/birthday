// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送給最好的妳",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "希望我送的禮物妳會喜歡",  // 同上...
        "兩個月前的今天是妳的生日",
        "很抱歉禮物我拖了這麼久",
        "雖然我們沒有一起過過生日",
        "但我希望未來的每一年",
        "我都能夠幫妳慶生",
        "......",
        "謝謝妳在去年",
        "我心情最不好的時候出現",
        "跟妳聊天的每一秒都很開心",
        "未來還會繼續叨擾妳喔",
        "不可以嫌我麻煩 (嘿嘿",
        "......",
        "還有，多給自己一點自信",
        "妳真的很優秀！",
        "未來國考加油！",
        "Fighting!"
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "送給最好的妳": "./imgs/1672326286816.jpg",
        // "還有，多給自己一點自信": "./imgs/1672326269298.jpg",
        // "心爱的小可爱": "./imgs/xiaokeai.png",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "開始",
        play: "音樂",
        bannar_coming: "裝飾一下",
        balloons_flying: "好像少點東西",
        cake_fadein: "蛋糕？",
        light_candle: "蠟燭？",
        wish_message: "生日快樂",
        story: "A MESSAGE FOR YOU",
    }
};
