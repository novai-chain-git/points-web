export const TelegramLog = (botId) => {
	return new Promise((resolve,reject) =>{
		window.Telegram.Login.auth({ bot_id: botId,
			request_access: 'write', embed: 1 }, (data) => {
			console.log(data, '这是回调数据');//这里的data和之前返回的user数据和格式无差异
			if (!data) {
				//失败时你需要做的逻辑
				  reject()
			}else {
				//电报登录成功你需要做的逻辑（这里我是直接写了一个函数去调用登录成功后的业务逻辑）
				 resolve(data)

			}
		});
	})

}
