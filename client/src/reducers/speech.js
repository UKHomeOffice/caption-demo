import {
  GET_TTS_VOICES_LIST,
  GET_STTTRANS_LANGUAGES_LIST,
  ADD_AGENT_RECOGNIZING_SPEECH,
  CLEAR_AGENT_RECOGNIZING_SPEECH,
  ADD_AGENT_RECOGNIZED_SPEECH,
  CLEAR_AGENT_RECOGNIZED_SPEECH,
  ADD_CUSTOMER_RECOGNIZED_SPEECH,
  CLEAR_CUSTOMER_RECOGNIZED_SPEECH
} from '../actions/types';

// text to speech = TTS
export const TTSVoicesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_TTS_VOICES_LIST:
      return action.payload;

    default:
      return state;
  }
};

export const STTTransLanguagesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_STTTRANS_LANGUAGES_LIST:
      return action.payload;

    default:
      return state;
  }
};

export const agentRecognizingReducer = (state = '', action) => {
  switch (action.type) {
    case ADD_AGENT_RECOGNIZING_SPEECH:
      return action.payload;
    case CLEAR_AGENT_RECOGNIZING_SPEECH:
      return '';
    default:
      return state;
  }
};

export const agentRecognizedReducer = (state = [], action) => {
  switch (action.type) {
    case CLEAR_AGENT_RECOGNIZED_SPEECH:
      return [];
    case ADD_AGENT_RECOGNIZED_SPEECH:
      return [...state, action.payload];

    default:
      return state;
  }
};

export const customerRecognizedReducer = (state = [], action) => {
  switch (action.type) {
    case CLEAR_CUSTOMER_RECOGNIZED_SPEECH:
      return [];
    case ADD_CUSTOMER_RECOGNIZED_SPEECH:
      return [...state, action.payload];

    default:
      return state;
  }
};
