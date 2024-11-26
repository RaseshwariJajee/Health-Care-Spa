//actions
export const LOGIN = "user/login";
export const LOGOUT = "user/logout";
//action creater

export const login = (payload) => (
  {
type:LOGIN,
  payload
});
export const logout = (payload) => (
  {
type:LOGOUT,
  payload
});
const data = [
  {
  
  email:"riya@gmail.com",
  name:"Riya",
  password:"riya12",
  role:"patient"
},
{
 
  email:"john@gmail.com",
  name:"John",
  password:"john12",
  role:"patient"
},
{
  
    
    email:"sam@gmail.com",
    name:"Sam",
    password:"sam1",
    role:"doctor"
},

{
  
  email:"lisa@gmail.com",
  name:"Lisa",
  password:"lisa12",
  role:"patient"
},

{
  email:"tim@gmail.com",
    name:"Tim",
    password:"tim123",
    role:"pharmacist"
}
]
localStorage.setItem('logindata', JSON.stringify(data));

const   patientDetails = [
  {
  id:1,
  email:"riya@gmail.com",
  name:"Riya",
  dob:"1964-03-11",
  gender:"Female",
  nationality:"Indian",
  existingAilments:"Blood pressure,Diabetes",
  records:[
     { symptoms:"Cough",
  visitDate:"2022-08-07",
 prescription:"Benylin syrup 2 times for 5 days"},
 {
  symptoms:"Ear pain",
  visitDate:"2023-11-03",
  existingAilments:"None",
  prescription:"Otovin 2 times for 2 days"
 }

  ]


},
 {
  id:2,
  email:"lisa@gmail.com",
  name:"Lisa",
  dob:"1984-07-21",
  gender:"Female",
  nationality:"Indian",
  existingAilments:"None",
  records:[
  {
  symptoms:"Ear pain",
  visitDate:"2022-08-03",
  prescription:"Otovin 2 times for 2 days"
  },
  {
   symptoms:"Red Eyes",
  visitDate:"2023-11-09",
  prescription:"Visine 2 times for 3 days"
  }
  ]

},
{ id:3,
  email:"john@gmail.com",
  name:"John",
  dob:"1984-08-24",
  gender:"Male",
  nationality:"USA",
  existingAilments:"Diabetes",
  records:[{    symptoms:"Headache",
  visitDate:"2023-11-04",
  prescription:"Saridon 2 times for 3 days"}]
}]
localStorage.setItem('patientdetails', JSON.stringify(patientDetails));
//default reducer state
const defaultState = {
  user:JSON.parse(localStorage.getItem('logindata')),
  info:[],
  msg:"error",
};


//reducer
export const loginReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      
      if (state.user ) {
        const info =action.payload.userlogin
        const userinfo=state.user.filter(u => u.email === info.email)
        const info1 =userinfo[0]
        
        if( info1)
        {
           if (info1.password===info.password&&info1.role===info.role) {
        
        return {...state,info: info,msg:'loggedin'}
        
         };
          
          if(info1.password!==info.password)
          {
            return {...state,info: info,msg:'wrongpassword'}
          }
          if(info1.role!==info.role)
          {
            return {...state,info: info,msg:'wrongrole'}
          }
        }
        else{ return {...state,info: info,msg:'wrongemail'}
          
        }
      }
      return state;
      case LOGOUT:
        return {...state,info:undefined,msg:'logout'}
      default:
         return state;
  
};
}
//dispatcher
export const startLogin  = (payload) => (dispatch) => {

  dispatch(login(payload));
};
export const userlogout = (payload) => (dispatch) => {

  dispatch(logout(payload));
};
