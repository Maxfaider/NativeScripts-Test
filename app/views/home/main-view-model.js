var Observable = require("data/observable").Observable;
var frameModule = require("tns-core-modules/ui/frame");

function getMessage(counter) {
    if (counter <= 0) {
        return "Hoorraaay! You unlocked the NativeScript clicker achievement!";
    } else {
        return counter + " taps left";
    }
}

function createViewModel() {
    var viewModel = new Observable();
    viewModel.counter = 42;
    viewModel.set("message", "Open source framework for building truly native mobile apps with Angular, Vue.js, TypeScript, or JavaScript. ");
    viewModel.set("title", "NativeScript Test");

    viewModel.set("onNext", () => frameModule.topmost().navigate("views/login/login-page"));
    viewModel.set("onSkip", () => frameModule.topmost().navigate("views/listview/list-page"));

    return viewModel;
}

exports.createViewModel = createViewModel;
