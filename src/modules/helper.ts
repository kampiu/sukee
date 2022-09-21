type TRandStrType = "default" | "number"

type TPrefixIntegerType = "after" | "before"

// 随机生成
export const rand = (min: number, max: number): number =>
	Math.floor(Math.random() * (max - min + 1)) + min

// 随机生成不同类型的指定长度字符串
export const randStr = (len = 64, type: TRandStrType = "default"): string => {
	const strMap = {
		default: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
		number: "0123456789",
		lowerCase: "abcdefghijklmnopqrstuvwxyz",
		upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
	}
	const str = strMap[type]
	let result = ""
	let countLen = len
	while (countLen) {
		countLen -= 1
		result += str[rand(0, str.length - 1)]
	}
	return result
}

// 数字补零 after before
export const prefixInteger = (str = "", n = 0, type?: TPrefixIntegerType): string => {
	return type === "before"
		? (Array(n).join("0") + str).slice(-n)
		: (str + Array(n).join("0")).slice(0, n)
}
