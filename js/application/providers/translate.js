/* ===== Translate provider ===== */
app.config(['$translateProvider', function ($translateProvider) {
    // $translateProvider.translations('fr', translations.FR);
    $translateProvider
        .useStaticFilesLoader({
            prefix: 'langs/',
            suffix: '.json'
        })
        .preferredLanguage('en')
        .fallbackLanguage('en')
        .useSanitizeValueStrategy('escape');
}]);