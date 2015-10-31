/* ===== Language Controller ===== */
app.controller('ChangeLanguage_Controller', ['$translate', '$scope', function ($translate, $scope) {
	$scope.changeLanguage = function (langKey) {
		$translate.use(langKey);
        $scope.language = langKey;
	};
}]);