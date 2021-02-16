import {
  ADD_TEXT_SENTIMENT,
  CLEAR_TEXT_SENTIMENT,
  ADD_TEXT_ENTITIES,
  CLEAR_TEXT_ENTITIES
} from '../actions/types';

export const textSentimentReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TEXT_SENTIMENT:
      return [...state, action.payload];
    case CLEAR_TEXT_SENTIMENT:
      return [];
    default:
      return state;
  }
};

export const textEntitiesReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TEXT_ENTITIES:
      return [...state, ...action.payload];
    case CLEAR_TEXT_ENTITIES:
      return [];
    default:
      return state;
  }
};
