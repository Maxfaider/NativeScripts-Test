var createViewModel = require("./main-view-model").createViewModel;

var page;

function onPageLoaded(args) {
    page = args.object;
    page.actionBarHidden = true;
    page.bindingContext = createViewModel();
}

exports.onPageLoaded = onPageLoaded;
