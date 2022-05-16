const INITIAL_STATE = {

  step: 1,
  
};

const reducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {

    case 'NEXT':

      return {

        ...state, step: state.step + 1,

      };

    case 'BACK':

      return {
        ...state,  step: state.step - 1,

      };

    default: return state;

  }

};

export default reducer;