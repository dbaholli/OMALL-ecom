import axios from "axios";
import {
  BANNER_AD_FAIL,
  BANNER_AD_REQUEST,
  BANNER_AD_SUCCESS,
} from "../constants/bannerAdsActions";

export const displayBannerAds = () => async (dispatch) => {
  try {
    dispatch({ type: BANNER_AD_REQUEST });

    const { data } = await axios.get(
      `${import.meta.env.VITE_APP_API}api/v2/pages/?type=home.BannerPage&fields=_,title,banner`
    );
    if (data) {
      console.log("Banner: ", data.items);
    }
    dispatch({
      type: BANNER_AD_SUCCESS,
      payload: data.items,
    });
  } catch (error) {
    dispatch({
      type: BANNER_AD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
