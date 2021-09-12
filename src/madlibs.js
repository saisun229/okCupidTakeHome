import { FIELD_NAMES } from "./constants";
import getRandomTemplateAnswer from "./helpers";

// Action types
// ----------------------------------------------------------------------------

export const SUBMIT_FIELD = "MADLIBS.SUBMIT_FIELD";
export const INCREMENT_COUNTER = "MADLIBS.INCREMENT_COUNTER";
export const SHOW_EDIT = "MADLIBS.SHOWEDIT";
export const START_OVER = "MADLIBS.STARTOVER";

// Initial state
// ----------------------------------------------------------------------------

export const INITIAL_STATE = {
  fieldOrder: [
    FIELD_NAMES.hometown,
    FIELD_NAMES.favoriteFood,
    FIELD_NAMES.loveToDo,
    FIELD_NAMES.music,
    FIELD_NAMES.messageIf,
    FIELD_NAMES.bar,
  ],

  fieldAnswers: {},
  fieldTemplates: {},
  essayText: "",
  showEdit: false,
};

// Reducer
// ----------------------------------------------------------------------------

export function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SUBMIT_FIELD: {
      const { fieldName, fieldValue } = action.payload;

      const previousFieldValue = state.fieldAnswers[fieldName];

      // If field answer didn't changed than return previous state.
      if (previousFieldValue === fieldValue) {
        return state;
      }

      const fieldAnswersClone = {
        ...state.fieldAnswers,
        [fieldName]: fieldValue,
      };

      if (!fieldValue) {
        delete fieldAnswersClone[fieldName];
      }

      const getNewEssayText = () => {
        const answers = state.fieldOrder
          .map((field) => {
            if (state.fieldTemplates[field]) {
              return state.fieldTemplates[field];
            }
            if (field === fieldName && !!fieldValue) {
              return getRandomTemplateAnswer(fieldName, fieldValue);
            }
            return null;
          })
          .filter((val) => val !== null);
        return answers.join(" ");
      };

      const showEditButton = () => {
        const answeredFieldsLength = Object.keys(fieldAnswersClone).length;
        return state.fieldOrder.length === answeredFieldsLength;
      };

      return {
        ...state,
        fieldAnswers: {
          ...fieldAnswersClone,
        },
        fieldTemplates: {
          ...state.fieldTemplates,
          [fieldName]: getRandomTemplateAnswer(fieldName, fieldValue),
        },
        essayText: getNewEssayText(),
        showEdit: showEditButton(),
      };
    }

    case START_OVER: {
      return INITIAL_STATE;
    }

    default:
      return state;
  }
}

// Action creators
// ----------------------------------------------------------------------------

export function submitField(id, answer) {
  return { type: SUBMIT_FIELD, payload: { fieldName: id, fieldValue: answer } };
}

export function startOver() {
  return { type: START_OVER };
}
