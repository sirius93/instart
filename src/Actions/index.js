import  Apis  from '../Configs/Apis';
import { ajax } from '../Utils'

export const getData = (props) => {
    let url = `${Apis.BASE_API}`;
    ajax(url).
    then(data => {
        console.log(data)
        props.dispatch({ type: "FETCH_BLOGS_DATA_SUCCESS", payload: data })
    });
};