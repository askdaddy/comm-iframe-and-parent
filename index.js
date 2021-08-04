const IFM_ID = "my-iframe-id";

function injectJS() {
    const ifm = document.getElementById(IFM_ID);
    const ifmDoc = ifm.contentDocument;
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.append(`window.child_callback = function(){
                window.parent.postMessage('hello parent! The message was emitted from child.');
            }`);

    ifmDoc.head.appendChild(script);
    console.log(ifm);
}

function runJS(cb){
    const ifm = document.createElement("iframe");
    ifm.src = 'child.html';
    ifm.style = "width:10px;height:10px;";
    ifm.id = IFM_ID;
    ifm.onload = injectJS;

    document.body.append(ifm);
    window.addEventListener('message',cb);
}
