function Klick(button) {
    switch (button) {
        case 1:
            window.location.href = "https://github.com/Heki-coder/"; break;
        case 2: 
            window.location.href = "bib.html"; break;
    }
}
function download(id) {
    const downloadLink = ['hekisonic', 'Telegram'];
    const link = `bibs/${downloadLink[id]}.zip`;
    const a = document.createElement('a');
    a.href = link;
    a.download = downloadLink[id] + '.zip';
    document.body.appendChild(a);
    a.click();
}