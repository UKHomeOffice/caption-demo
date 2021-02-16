import { combineReducers } from 'redux';

import {
  TTSVoicesReducer,
  STTTransLanguagesReducer,
  agentRecognizingReducer,
  agentRecognizedReducer,
  customerRecognizedReducer
} from './speech';

import { textSentimentReducer, textEntitiesReducer } from './text';

const reducer = combineReducers({
  TTSVoices: TTSVoicesReducer,
  STTTransLanguages: STTTransLanguagesReducer,
  agentRecognizing: agentRecognizingReducer,
  agentRecognized: agentRecognizedReducer,
  customerRecognized: customerRecognizedReducer,
  textSentiment: textSentimentReducer,
  textEntities: textEntitiesReducer
});

export default reducer;
