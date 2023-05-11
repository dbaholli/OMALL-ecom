import {
  BANNER_AD_FAIL,
  BANNER_AD_REQUEST,
  BANNER_AD_SUCCESS,
} from "../constants/bannerAdsActions";

export const bannerAdReducer = (state = { bannerAd: [] }, action) => {
  switch (action.type) {
    case BANNER_AD_REQUEST:
      return { loading: true, bannerAd: [] };

    case BANNER_AD_SUCCESS:
      return { loading: false, bannerAd: action.payload };

    case BANNER_AD_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
