var page;

function onNavigatingTo(args) {
    page = args.object;
    page.actionBarHidden = true;
}

exports.onNavigatingTo = onNavigatingTo;
