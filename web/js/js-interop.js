(function () {
  window._stateSet = function () {
    console.log('_stateSet function is called')

    // js_util.setProperty() でセットした、_appStateプロパティの取得
    const appState = window._appState;
    console.log('_appState property is ', appState);

    // IncrementボタンのHTMLエレメント取得
    const incrementButton = document.querySelector("#increment");
    incrementButton.addEventListener("click", (event) => {
        // @js.JSExport()された、_MyHomePageState._incrementCounter() の呼び出し
        appState._incrementCounter();
    });

    // Input Boxの HTMLエレメント取得
    const valueField = document.querySelector("#value");
    const updateState = function () {
      // @js.JSExport()された、_MyHomePageState.count の呼び出し
      valueField.value = appState.count;
      // これでも動く。 _counter は @js.JSExport() されていないのに
      // valueField.value = appState._counter;
    };

    // updateState()を呼び出す。初期値0となる。
    updateState();

    // FlutterのaddHandlerを呼び出す。
    // カウンタが変更すると、コールバック関数 updateState が呼ばれる。
    appState.addHandler(updateState);


    const sayButton = document.querySelector("#say");
    sayButton.addEventListener("click", async (event) => {
        console.log('before');
        const t =  appState.sayDelayedHello();
        console.log(t);
        console.log('after');
    });

  };
}());
