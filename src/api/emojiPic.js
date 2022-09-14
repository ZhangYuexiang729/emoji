import request from '@/utils/request'
export function getServicePackage(id) {
	return request({
		url: 'emojiPics/nextServerListData?id=' + id,
		method: 'get',
		
	})
}



