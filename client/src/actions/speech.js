import axios from 'axios';

import { GET_TTS_VOICES_LIST, GET_STTTRANS_LANGUAGES_LIST } from './types';

// Text to speech (TTS)

export const getTTSVoicesList = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/azure/api/speech/voices/list');

    dispatch({ type: GET_TTS_VOICES_LIST, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getSupportedDialects = () => async (dispatch) => {
  try {
    // get the list of supported dialects
    const { data } = await axios.get(
      '/azure/api/speech/dialects/transcription'
    );
    //  we then need to hit our shared api to get full list
    const res = await axios({
      url: '/shared/utils/api/language/language_codes',
      method: 'post',
      data: data
    });

    // save to redux
    dispatch({ type: GET_STTTRANS_LANGUAGES_LIST, payload: res.data });
  } catch (error) {
    console.log(error);
    return null;
  }
};
