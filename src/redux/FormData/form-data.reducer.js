const INITIAL_STATE = {

  pro_data: {},
  edu_data: {},
  professnl_data: {},
  so_hobby: {}
  
};

const reducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {

    case 'SETPRODATA':

      return {

        ...state, pro_data: action.payload,

      };

    case 'SETEDUDATA':

      return {

        ...state, edu_data: action.payload,

      };

      case 'SETPROFESSIONAL':

      return {

        ...state, professnl_data: action.payload,

      };

      case 'SETEDUHOBBIES':

      return {

        ...state, so_hobby: action.payload,

      };

    default: return state;

  }

};

export default reducer;