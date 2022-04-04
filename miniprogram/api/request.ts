const baseURL = "https://music-1782897-1300612857.ap-shanghai.run.tcloudbase.com"

export const get = (uri:string) => {
    wx.showLoading({
        title:'···'
    })
    return new Promise((resolve,reject) => {
        wx.request({
            url:baseURL + uri,
            method:"GET",
            success:(res)=>{
                resolve(res.data)
            },
            fail:reject,
            complete:()=>{
                wx.hideLoading()
            }
        })
    })
}