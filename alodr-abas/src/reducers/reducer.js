
const initialState = {
     
    
    quickSelect :  {
       quickSelectIsShow : false, 
       quickSelectSerachHeader : '',
       citys : [],
       spe : [],
       cityId : null,
       citysConfirm : {
        id : "null" ,
        value : null
       },
       setSpeConfirm : {
        id : "null" , 
        value : null
       }
    } 
    ,

    form : {
        formState : 'signIn',
        formHeader : 'ثبت نام',
        registerErros : null ,
        selectInpCity : {
            id : null , 
            value : null
        }
        ,
        selectInpSpe : {
            id : null , 
            val : null
        } 
        ,
        dropDownInpIsShowCity : false,
        dropDownInpIsShowSpe : false,
        dropDownCityId : null , 
        dropDownSpeId : null , 

        alertForm : {
            alertFormIsShow : false,
            alertFormValue : null
        }
        ,
        login : {
            logErr : []
        } 

    }
    ,
    user : {
        userLoginedInfo : [] ,
        userRedirect : false
    }
    ,
    resultSearch : {
        searchMod : false,
        alldr : [] , 
        metaPage : null ,
        meta : null , 
        selectedDoctor : null ,
        foundDoc : [] , 
        innerInp : ''

    }

    ,
    comments : {
        docDetailComments : [] ,
        repCommentIsShow : false,
        repCommentId : null,
        commentSendMasage : '',
        commentSendId : null,
        commentLike : true,
        commentDisslike : true
    }
    ,
    samliarDoc :{
        allDrSame : [],
        changeSame : false
    }

    ,
    doctorPanel : {
        menuState : 'نمایش اطلاعات کاربری'
    }
    ,
    loader : {
        mainLoad : true,
        resultLoad : true,
    }
    ,
    topDoctorMonth : {
        toper : []
    }
}


export default function reducers (state = initialState, action) {
    switch(action.type){

        case "change" : 
            return {
                ...state,
                user : {...state.user , name : 'ali' }
            };
        
        case "Show_Quick" : {
            return {
                ...state ,
                quickSelect : {...state.quickSelect , quickSelectIsShow : action.payload.quickSelectIsShow}
            }
        }
        
        case "quick_Select_Serach_Header" : {
            return {
                ...state ,
                quickSelect : {...state.quickSelect , quickSelectSerachHeader : action.payload.quickSelectSerachHeader}
            }
        }

        case 'change_Sign_Login_Toggle' : {
            return {
                ...state , 
                form : {...state.form , formState : action.payload.changeSignLoginToggle}
            }
        }
        
        case 'change_Sign_Login_Header' : {
            return {
                ...state ,
                form : {...state.form , formHeader : action.payload.changeSignLoginHeader }
            }
        }

        case 'fetch_Cities' : {
            return {
                ...state ,
                quickSelect : {...state.quickSelect , citys :  action.payload.citys},
                loader : {...state.loader , mainLoad : false}
            }
        }

        case 'set_Citys_Confirm' : {
            return {
                ...state , 
                quickSelect : {...state.quickSelect , citysConfirm : {...state.quickSelect.citysConfirm , id : action.payload.id , value : action.payload.value}}
            }
        }

        case 'add_id' : {
            return {
                ...state , 
                quickSelect : {...state.quickSelect , cityId : action.payload.cityName}
            }
        }


        case 'fetch_speciallity' : {
            return {
                ...state , 
                quickSelect : {...state.quickSelect , spe : action.payload.spe}
            }
        }


        case 'fetch_all_doctor' : {
            return {
                ...state , 
                resultSearch : {...state.resultSearch , alldr : action.payload.alldr , metaPage : action.payload.metaPage , meta : action.payload.meta},
                loader : {...state.loader , resultLoad : false}
            }
        }


        case 'sel_doc' : {
            return {
                ...state , 
                resultSearch : {...state.resultSearch , selectedDoctor : action.payload.selectedDoctor}
            }
        }


        case 'set_spe_confirm' : {
            return {
                ...state , 
                quickSelect : {...state.quickSelect , setSpeConfirm : {...state.quickSelect.setSpeConfirm , id : action.payload.id , value : action.payload.value}}
            }
        }

        case 'inner_search' : {
            return {
                ...state , 
                resultSearch : {...state.resultSearch ,innerInp : action.payload.innerInp}
            }
        }

        case 'handle_Register_Erros' : {
            return {
                ...state , 
                form : {...state.form , registerErros : action.payload.registerErros}
            }
        }


        case 'drop_Down_InpIs_Show_City' : {
            return {
                ...state , 
                form : {...state.form , dropDownInpIsShowCity : action.payload.dropDownInpIsShowCity }
            }
        }

        case 'drop_Down_InpIs_Show_Spe' : {
            return {
                ...state , 
                form : {...state.form , dropDownInpIsShowSpe : action.payload.dropDownInpIsShowSpe }
            }
        }

        case 'set_Select_Inp_City' : {
            return {
                ...state , 
                form : {...state.form ,selectInpCity : {...state.form.selectInpCity , value : action.payload.value , id : action.payload.id} }
            }
        }

        case 'set_Select_Inp_Spe' : {
            return {
                ...state ,
                form : {...state.form   , selectInpSpe : {...state.form.selectInpSpe , val: action.payload.val , id : action.payload.id}}
            }
        }

        case 'drop_Down_City_Id' : {
            return {
                ...state ,
                form : {...state.form   , dropDownCityId : action.payload.dropDownCityId}
            }
        }
        case 'drop_Down_Spe_Id' : {
            return {
                ...state ,
                form : {...state.form   , dropDownSpeId : action.payload.dropDownSpeId}
            }
        }

        case 'alert_Form_Is_Show' : {
            return {
                ...state , 
                form : {...state.form , alertForm : {...state.form.alertForm , alertFormIsShow : action.payload.alertFormIsShow , alertFormValue : action.payload.alertFormValue}}
            }
        }

        case 'handle_Login_Errors' : {
            return {
                ...state , 
                form : {...state.form , login : {...state.form.login , logErr : action.payload.logErr}}
            }
        }

        case 'fetch_comments' : {
            return {
                ...state , 
                comments : {...state.comments , docDetailComments : action.payload.comment }
            }
        }

        case 'show_Rep_Comment' : {
            return {
                ...state ,
                comments : {...state.comments ,  repCommentIsShow : action.payload.repCommentIsShow , repCommentId : action.payload.repCommentId}
            }
        }

        case 'comment_Handle_Send_Massage' : {
            return {
                ...state ,
                comments : {...state.comments , commentSendMasage : action.payload.commentSendMasage , commentSendId : action.payload.commentSendId}
            }
        }


        case 'fetch_Samilar_Doctors' : {
            return {
                ...state ,
                samliarDoc : {...state.samliarDoc , allDrSame : action.payload.allDrSame}
            }
        }

        case 'fetch_Like_Dislike' : {
            return {
                ...state,
                comments : {...state.comments , commentLike : action.payload.commentLike , commentDisslike : action.payload.commentDisslike }
            }
        }


        case 'fetch_Logined_Doctor': {
            return {
                ...state , 
                user : {...state.user , userLoginedInfo : action.payload.userLoginedInfo}
            }
        }


        case 'update_Menu_State' : {
            return {
                ...state , 
                doctorPanel : {...state.doctorPanel , menuState : action.payload.menuState}
            }
        }

        case 'user_Redirect' : {
            return {
                ...state ,
                user : {...state.doctorPanel , userRedirect : action.payload.userRedirect}
            }
        }

        case 'search_mod' : {
            return {
                ...state , 
                resultSearch : {...state.resultSearch , searchMod : action.payload.searchMod}
            }
        }

        case 'change_Same' : {
            return {
                ...state , 
                samliarDoc : {...state.samliarDoc , changeSame : action.payload.changeSame}
            }
        }

        case 'top_Doctor_Month' : {
            return {
                ...state ,
                topDoctorMonth : {...state.topDoctorMonth , toper : action.payload.topDoctorMonth}
            }
        }
        
        default : 
        return state;


        
    
    }



}


// export default reducer;