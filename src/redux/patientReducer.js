//actions
export const GET_PATIENT = "get/PatientInfo";
export const ADD_PATIENT = "add/patient";
export const EDIT_PATIENT = "edit/patient";
export const DELETE_PATIENT = "delete/patient";
export const SELF_INFO="get/self";
export const GET_PATIENT_INFO="get/info";

//action creater

export const addPatientDetails = (payload) => (
  {
type:ADD_PATIENT,
  payload
});
export const editPatientDetails = (payload) => (
  {
type:EDIT_PATIENT,
  payload
});

export const getPatientDetails = (payload) => (
  {
type:GET_PATIENT_INFO,
payload
  
});
export const getPatientInfo = () => (
  {
type:GET_PATIENT,
  
});
export const deletePatientInfo = (payload) => (
  {
type:DELETE_PATIENT,
payload
  
});
export const getDetails = (payload) => (
  {
type:SELF_INFO,
payload
  
});

//default reducer state
const defaultState = {
   details: JSON.parse(localStorage.getItem('patientdetails')),
  // login:JSON.parse(localStorage.getItem('logindata')),
  info:[],
  loading: true,

msg:"err"
  
  
};


//reducer
export const patientReducer = (state = defaultState, action) => {
    
        
  switch (action.type) {
    case GET_PATIENT:
         return {...state,loading: false};
    
    case ADD_PATIENT:
    //  state.details.push({...action.payload.patientdetails});

   //  localStorage.setItem('patientdetails', JSON.stringify(state.details));
     
   //  localStorage.setItem('logindata', JSON.stringify([...JSON.parse(localStorage.getItem('logindata')), { email:action.payload.patientdetails.email , password: "default", role: "patient", name: action.payload.patientdetails.name }]));
           return {
                ...state,details:[...state.details,action.payload.patientdetails],msg:"Patient Added"
            };   
    case DELETE_PATIENT:
      const listFiltred = state.details.filter(patient => patient.id !== action.payload)
    //  localStorage.setItem('patientdetails', JSON.stringify(listFiltred));
            return {
                ...state,details:listFiltred,msg:"Patient Deleted"
            };   
    case SELF_INFO:
     
      const info = state.details.filter(patient => patient.email=== action.payload)
      return{
        ...state,info:info,msg:"Info"
      };
    case EDIT_PATIENT:
      
      //  localStorage.setItem('patientdetails', JSON.stringify(list));
      const i=state.details.map((d)=>{
        
        if(d.id===action.payload.details.id){
                  return  {
          ...d,...action.payload.details,records:[...d.records,action.payload.details.record],
          msg:"edited"
            }
          }

         else{
          return d;
         }
          
    })
    return{...state,details:i}
     
   
    //  localStorage.setItem('patientdetails', JSON.stringify(list));
    
      
      case GET_PATIENT_INFO:
        const info1 = state.details.filter(patient => patient.id=== action.payload)
        
        return{
          ...state,info:info1,msg:"Info"
        };
    default:
       
      return state;
  }
};

//dispatcher
export const getPatient  =  ()=>(dispatch) => {
   
    dispatch(getPatientInfo())
   
  
};
export const deletePatient  =  (payload)=>(dispatch) => {
    
  dispatch(deletePatientInfo(payload))
 

};
export const addPatientInfo  = (payload) => (dispatch) => {

    dispatch(addPatientDetails(payload));
  };
  export const editPatientInfo  = (payload) => (dispatch) => {

    dispatch(editPatientDetails(payload));
  };
 
  export const  getSelfInfo  = (payload) => (dispatch) => {

    dispatch(getDetails(payload));
  };
  export const  getInfo  = (payload) => (dispatch) => {

    dispatch(getPatientDetails(payload));
  };