(function runRemoteScriptFromGit( ) {

    /**
     * MY DEBUGGING SCRIPTS
     */
    let BASE = 'mrosata/dev-snips';
    let scripts = [''];

    /**
     * Create a script tag to load the raw git hub file.
     *
     * @param devSnipsFile - the file path on BASE git repo
     */
    function runRemoteScript( devSnipsFile ) {
        let rawGitUri = `https://rawgit.com/${BASE}/${devSnipsFile}`,
            headElem, scriptElem;

        headElem = document.getElementsByTagName('head')[0];
        scriptElem = document.createElement('script');
        scriptElem.type = 'text/javascript';
        scriptElem.src = rawGitUri;
        headElem.appendChild( scriptElem );
    }

}());

