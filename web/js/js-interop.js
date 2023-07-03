(function () {
  window._stateSet = function () {
    console.log('_stateSet function is called')

    let appState = window._appState;
    console.log('_appState property is ', appState);
  };
}());
