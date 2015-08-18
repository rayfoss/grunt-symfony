System.config({
    "baseURL": "/",
    "transpiler": "babel",
    "paths": {
        "*": "*.js",
        "github:*": "../../../jspm_packages/github/*.js",
        "npm:*": "../../../jspm_packages/npm/*.js"
    }
});

System.config({
    "map": {
        "babel": "npm:babel-core@5.8.22",
        "babel-runtime": "npm:babel-runtime@5.8.20",
        "core-js": "npm:core-js@0.9.18",
        "jquery": "github:components/jquery@2.1.3",
        "loglevel": "npm:loglevel@1.2.0",
        "picturefill": "npm:picturefill@2.3.1",<% if (useBootstrap) { %>
        "bootstrap": "github:twbs/bootstrap@3.3.4",<% } else if (useFoundation) { %>
        "foundation": "github:zurb/bower-foundation@5.5.1",<% } else if (useUikit) { %>
        "uikit": "github:uikit/uikit@2.18.0",<% } %>
        "github:jspm/nodelibs-process@0.1.1": {
            "process": "npm:process@0.10.1"
        },
        "npm:babel-runtime@5.8.20": {
            "process": "github:jspm/nodelibs-process@0.1.1"
        },
        "npm:core-js@0.9.18": {
            "fs": "github:jspm/nodelibs-fs@0.1.2",
                "process": "github:jspm/nodelibs-process@0.1.1",
                "systemjs-json": "github:systemjs/plugin-json@0.1.0"
        },
        "npm:loglevel@1.2.0": {
            "process": "github:jspm/nodelibs-process@0.1.1"
        },
        "npm:loglevel@1.3.1": {
            "process": "github:jspm/nodelibs-process@0.1.1"
        },
        "npm:picturefill@2.3.1": {
            "child_process": "github:jspm/nodelibs-child_process@0.1.0",
                "process": "github:jspm/nodelibs-process@0.1.1"
        }
    }
});


