import { NavigationActions } from 'react-navigation';


let _navigator;


function setTopLevelNavigator(navigator_ref) {
    _navigator = navigator_ref;
}


function navigate(routeNane, params) {
    _navigator.dispatch(
        NavigationActions.navigate({
            routeNane,
            params,
        })
    )
}

export default {
    navigate,
    setTopLevelNavigator,
}
