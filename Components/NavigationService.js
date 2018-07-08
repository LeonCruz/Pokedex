import { NavigationActions } from 'react-navigation';


let _navigator;


function setTopLevelNavigator(navigator_ref) {
    _navigator = navigator_ref;
}


function navigate(routeName, params) {
    _navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params,
        })
    )
}

export default {
    navigate,
    setTopLevelNavigator,
}
