import axios from 'axios';




export const QuickReservShow = (arg) => {
    return {
        type : 'Show_Quick',
        payload : {
            quickSelectIsShow : arg
        }
    }
}


export const quickSelectSerachHeader = (quickSelectSerachHeader) => {

    console.log(quickSelectSerachHeader)
    return {
        type : 'quick_Select_Serach_Header',
        payload : {
            quickSelectSerachHeader : quickSelectSerachHeader
        }
    }
}


export const changeSignLoginToggle = (changeSignLoginToggle) => {
    return {
        type : 'change_Sign_Login_Toggle',    
        payload : {
            changeSignLoginToggle : changeSignLoginToggle
        }
    }
}


export const changeSignLoginHeader = (changeSignLoginHeader) => {
    return {
        type : 'change_Sign_Login_Header',
        payload : {
            changeSignLoginHeader 
        }
    }
}

export const fetchCities = () => {


    return async (dispatch) =>{

        let result = await axios.get('http://192.168.0.226:2020/api/allCities')
        // let result = await axios.get('https://moviesapi.ir/api/v1/movies?page={1}')
        let citys = result.data.data

        dispatch({
            type : 'fetch_Cities',
            payload : {
                citys : citys
            }
        })

    }
}


export const fetchSpeciallity = () => {

    return async (dispatch) => {
        let result = await axios.get('http://192.168.0.226:2020/api/All_Speciallity');
        let spe = result.data.data
        

        dispatch({
            type : 'fetch_speciallity' , 
            payload : {
                spe : spe
            }
        })
    }
}


export const fetchAllDoctors = (arg1 , arg2 , arg3 ) => {


    return async (dispatch) => {
        axios.get(`http://192.168.0.226:2020/api/dr/${arg1}/${arg2}/${arg3}`).then(res => {
            
            let arr = res.data.data
            let pagesSite = [];
            for(let i =1;i <= res.data.meta.last_page ; i++){
                if(Math.abs(i-res.data.meta.current_page) < 4){
                    pagesSite.push(i);
                }
            }
    
    
            dispatch({
                type : 'fetch_all_doctor' ,
                payload : {
                    alldr : arr ,
                    metaPage : pagesSite , 
                    meta : res.data.meta
                }
            })
        })
        

    }
}

export const addIdCity = (id) => {

    // console.log(id)
    return {
        type : 'add_id', 
        payload : {
            id 
        }
    }
}

export const setCitysConfirm = (id , value) => {
    return {
        type : 'set_Citys_Confirm',
        payload : {
            id ,
            value
        }
    }
}

export const setSpeConfirm = (id , value) => {
    return {
        type : 'set_spe_confirm' ,
        payload : {
            id ,
            value
        }
    }
}

export const selectDoc = (selectedDoctor) => {

    let cls = [...selectedDoctor]
    console.log(cls)
    return{
        type : 'sel_doc',
        payload : {
            selectedDoctor : cls
        }
    }

}


export const innerSearchBox = (arg) => {
    return {
        type : 'inner_search',
        payload : {
            innerInp : arg
        }
    }
}


export const handleRegisterErros = (val) => {
    
    return {
        type : 'handle_Register_Erros' ,
        payload : {
            registerErros : val
        }
    }
}



export const handleLoginErrors = (val , tok) => {
    console.log(val)
    return{
        type : 'handle_Login_Errors' ,
        payload : {
            logErr : val
        }
    }
}



export const change = (arg) => {
    return {
        type : 'change',
        payload : {
            name : arg,
        }
    }

}


export const sendDropDownInpIsShowCity = (dropDownInpIsShowCity) =>{
    return {
        type : 'drop_Down_InpIs_Show_City',
        payload : {
            dropDownInpIsShowCity
        }
    }
}


export const sendDropDownInpIsShowSpe = (dropDownInpIsShowSpe) =>{
    return {
        type : 'drop_Down_InpIs_Show_Spe',
        payload : {
            dropDownInpIsShowSpe
        }
    }
}


export const setSelectInpCity = (id , value) => {

    return {
        type : 'set_Select_Inp_City' ,
        payload : {
            id ,
            value
        }
    }
}


export const setSelectInpSpe = (id , val) => {
    console.log(val)
    return {
        type : 'set_Select_Inp_Spe' ,
        payload : {
            id , 
            val
        }
    }
}



export const setDropDownCityId = (dropDownCityId) => {

    return {
        type : 'drop_Down_City_Id' , 
        payload : {
            dropDownCityId
        }
    }
}


export const setDropDownSpeId = (dropDownSpeId) => {

    return {
        type : 'drop_Down_Spe_Id' , 
        payload : {
            dropDownSpeId
        }
    }
}

export const alertFormIsShow = (alertFormIsShow , alertFormValue) => {
    if(alertFormIsShow === true){
        let inputs =  document.querySelectorAll('.formWrpper input')
        inputs.forEach(item => {
           if(item.hasAttribute('disabled') )
           {
               item.removeAttribute('disabled')
               
           }
        })
    }


    return {
        type : 'alert_Form_Is_Show' ,
        payload : {
            alertFormIsShow,
            alertFormValue
        }
    }
}


export const fetchComments = (id) =>{

    return async (dispatch) => {
        let result = await axios.get(`http://192.168.0.226:2020/api/comments/${id}`)

        let arr = []
        let newarr = result.data.data.filter(item => {
            return(
                item != null
            )
        })
        let ans = new Array();

        
        for(let i=0;i<result.data.data.length;++i){
            if(result.data.data[i])
                arr.push(result.data.data[i])
            
        }
        console.log(arr)
        
        dispatch({
            type : 'fetch_comments',
            payload : {
                comment : arr
            }
        })
    }
}


export const showRepComment = (repCommentIsShow , repCommentId) => {
    return {
        type : 'show_Rep_Comment',
        payload : {
            repCommentIsShow, 
            repCommentId 
        }
    }
}

export const commentHandleSendMassage = (commentSendMasage , commentSendId) => {
    let mass;
    if(commentSendMasage === 'comment saved Successfully')
    {
        mass = 'دیدگاه شما با موفیقت ثبت شد'
    }
    else {
        mass = 'لطفا پیامی بنویسید'
    }
    return {
        type : 'comment_Handle_Send_Massage',
        payload  : {
            commentSendMasage : mass,
            commentSendId
        }
    }
}

export const fetchSamilarDoctors = (id) => {
    
    const formData = new FormData()
    formData.append('id' , id)
    return async (dispatch) => {
        let result = await axios.post('http://192.168.0.226:2020/api/dr/same_drs' , formData)

        console.log(result)

        dispatch({
            type : 'fetch_Samilar_Doctors',
            payload : {
                allDrSame : result.data.data
            }
        })
    }
    

}


export const fetchLikeDislike = (id,todo , likeDisslikeState) => {

    
    const formData = new FormData();
    formData.append('id' , id)
    formData.append('todo' , todo)

    return async (dispatch) => {
        let result = await axios.post('http://192.168.0.226:2020/api/comment/LikeOrDissLikeComments' , formData)


        dispatch({
            type : 'fetch_Like_Dislike',
            payload : {
                commentLike : likeDisslikeState,
                commentDisslike : !likeDisslikeState
            }
        })
    }
}


export const fetchLoginedDoctor = () => {


    return async (dispatch) => {

        axios.post('http://192.168.0.226:2020/api/me' , {}, {
            headers : {
                authorization : 'Bearer ' + localStorage.getItem('token')
            }
        }).then(res => {
            dispatch({
                type : 'fetch_Logined_Doctor' ,
                payload : {
                    userLoginedInfo : res.data.data
                }
            })
        }).catch(err => {
            console.log(err)
            if(err.response.status === 202){
                axios.post('http://192.168.0.226:2020/api/abc' , {} , {
                    headers : {
                        authorization : 'Bearer ' + localStorage.getItem('refresh_token')
                    }
                }).then(res => {
                    localStorage.setItem('token' , res.data.access_token)
                    localStorage.setItem('refresh_token' , res.data.refresh_token)
                    dispatch({
                        type : 'fetch_Logined_Doctor' ,
                        payload : {
                            userLoginedInfo : res.data.data
                        }
                    })
                }).catch(err => {
                    console.log(err)
                })
            }
        })



    }
}


export const logOutDoc = () => {

    let token = localStorage.getItem('token')
    return async (dispatch) => {

        axios.post('http://192.168.0.226:2020/api/logout' , {} , {
            headers : {
                authorization : 'Bearer ' + token
            }
        }).then(res => {
            if(res.status === 202){
                localStorage.clear()
            }
        }).catch(err => {
            console.log(err)
        })
    }
}


export const updateMenuState = (menuState) => {

    return {
        type : 'update_Menu_State',
        payload : {
            menuState
        }
    }
}

export const usRedirect = (userRedirect) => {
    return {
        type : 'user_Redirect' ,
        payload : {
            userRedirect
        }
    }
} 

export const onSearchMod = (searchMod) => {
    return {
        type : 'search_mod' ,
        payload : {
            searchMod
        }
    }
}


export const doctorPanelComplete = (image , aboutMe ,  id) => {

    return async (dispatch) => {
        axios.put('http://192.168.0.226:2020/api/dr/update' , {
            profile : image ,
            Bio : aboutMe ,
            id 
        }).then(res => {
            console.log(res)
            window.location.reload()

        }).catch(err => {
            console.log(err)
        })
    }
}


export const selectedpage = (correctPage) => {
    return async (dispatch) => {
        axios.get(`http://192.168.0.226:2020/api/dr/null/null/null?page=${correctPage}`).then(res => {
            console.log(res)
            let arr = res.data.data
        
    
            let pagesSite = [];
            for(let i =1;i <= res.data.meta.last_page ; i++){
                if(Math.abs(i-res.data.meta.current_page) < 4){
                    pagesSite.push(i);
                }
            }
            dispatch({
                type : 'fetch_all_doctor' ,
                payload : {
                    alldr : arr ,
                    metaPage : pagesSite , 
                    meta : res.data.meta
                }

            })
        }).catch(err => {
            console.log(err)
        })
    }
}


export const setChangeSame = (changeSame) => {
    return {
        type : 'change_Same' ,
        payload : {
            changeSame
        }
    }
}


export const fetchTopDoctorMonth = () => {

    return async (dispatch) => {
        axios.get('http://192.168.0.226:2020/api/BestDrs').then(res => {
            console.log(res)
            // let arr = new Array()
            // for(let key of res.data.data)
            // {
            //     // console.log(key)
            //     arr.push(key)
            // }

            // console.log(arr)
            // console.log(arr)
            dispatch({

                type : 'top_Doctor_Month' ,
                payload : {
                    topDoctorMonth : res.data.data
                }
            })
        }).catch(err => {
            console.log(err)
        })


    }
}