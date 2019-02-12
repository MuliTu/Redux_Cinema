import {BASE_URL,API} from "./mainApi";

const path ='tv';

export const FETCH_ON_AIR_URL = `${BASE_URL}/${path}/airing_today?api_key=${API}&language=en-US&page=1`;
