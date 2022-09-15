import request from '@/utils/request'
export function getServicePackage(skip,limit) {
	return request({
		url: 'emojiPics/getData?skip='+skip+'&limit='+limit,
		method: 'get',
		
	})
}

export function getCount() {
	return request({
		url: 'emojiPics/getCount',
		method: 'get',
		
	})
}



