const fromObject = require("tns-core-modules/data/observable").fromObject;

function onNavigatedTo(args) {
    const page = args.object;
    const vm = fromObject({
        myTitles: [
            { title: "The Da Vinci Code" },
            { title: "Harry Potter and the Chamber of Secrets" },
            { title: "The Alchemist" },
            { title: "The Godfather" },
            { title: "Goodnight Moon" },
            { title: "The Hobbit" }
        ]
    });
    page.bindingContext = vm;
}

exports.onNavigatedTo = onNavigatedTo;

function onListViewLoaded(args) {
    const listView = args.object;
}

exports.onListViewLoaded = onListViewLoaded;

function onItemTap(args) {
    const index = args.index;
    console.log(`Second ListView item tap ${index}`);
}
exports.onItemTap = onItemTap;
