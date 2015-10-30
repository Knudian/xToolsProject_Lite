/* ===== Translate provider ===== */
app.config(['$translateProvider', function ($translateProvider) {
    $translateProvider
        .translations('en', translations.EN)
        .translations('fr', translations.FR)
        .preferredLanguage('en')
        .fallbackLanguage('en')
        .useSanitizeValueStrategy('escape');
    
    /*
        The translation system should look like that ... but not.
        
        Need to find a way to use it correctly.
    
    $translateProvider
        .useStaticFilesLoader({
            prefix: 'locale-',
            suffix: '.json'
        })
        .preferredLanguage('en')
        .fallbackLanguage('en')
        .useSanitizeValueStrategy('escape');
    */
}]);