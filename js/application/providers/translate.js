/* ===== Translate provider ===== */
app.config(['$translateProvider', function ($translateProvider) {
    // $translateProvider.translations('fr', translations.FR);
    $translateProvider
        .translations('en', translations.EN)
        .translations('fr', translations.FR)
        .preferredLanguage('en')
        .fallbackLanguage('en')
        .useSanitizeValueStrategy('escape');
}]);