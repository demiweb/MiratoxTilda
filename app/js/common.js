function helloConsole() {
    var staticText = 'Made with ❤️ by Demiweb';
    var staticUrl = '> https://demiweb.pro/';
    var hello = [`\n %c ${staticText} %c ${staticUrl} %c %c \n\n`, 'border: 1px solid #000;color: #fff; background: #3d2579; padding:5px 0;', 'color: #fff; background: #ffd800; padding:5px 0;border: 1px solid #000;', 'background: #fff; padding:5px 0;', 'color: #b0976d; background: #fff; padding:5px 0;'];

    if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) {
        window.console.log(`${staticText} - ${staticUrl}`);
    } else if (navigator.userAgent.indexOf("Chrome") != -1) {
        var title = '%c';

        for (var i = 0; i < 12; i++) {
            title += ' ';
        }

        window.console.log.apply(console, hello);
        window.console.log(title, 'font: 36px/100% sans-serif; background-repeat: no-repeat; background-size: 100%; background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgaWQ9InN2ZzgiCiAgIHZlcnNpb249IjEuMSIKICAgdmlld0JveD0iMCAwIDYwMS4xNDQ3MSAxMzkuNjk5MiIKICAgaGVpZ2h0PSIxMzkiCiAgIHdpZHRoPSI2MDEiPgogIDxkZWZzCiAgICAgaWQ9ImRlZnMyIiAvPgogIDxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTUiPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgICAgPGRjOnRpdGxlPjwvZGM6dGl0bGU+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxnCiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTg2LjQyMzU1LC04My41MTk0NDQpIgogICAgIGlkPSJsYXllcjEiPgogICAgPGcKICAgICAgIHRyYW5zZm9ybT0ibWF0cml4KDAuMjY0NTgzMzMsMCwwLDAuMjY0NTgzMzMsLTI2NC4zMSwtMjIxLjYzMTM5KSIKICAgICAgIGlkPSJnODg4Ij4KICAgICAgPGcKICAgICAgICAgaWQ9Imc4MjkiPgoJPHBhdGgKICAgZD0ibSA2NDcuOTQ5LDE0NjkuMzk3IHYgLTMxNS4xNyBoIDIzNy43MjcgdiA2MS42ODMgaCAtMTY4Ljg0IHYgNjMuOTM0IGggMTQ4LjU3OSB2IDYxLjY4MyBoIC0xNDguNTggdiA2Ni4xODcgaCAxNzEuMDkxIHYgNjEuNjg0IEggNjQ3Ljk0OSBaIgogICBpZD0icGF0aDgxNSIgLz4KCgk8cGF0aAogICBkPSJtIDk0OS42MDksMTQ2OS4zOTcgdiAtMzE1LjE3IGggNzQuNzQgbCA4Mi44NDQsMTMzLjI3MSA4Mi44NDQsLTEzMy4yNzEgaCA3NC43NDEgdiAzMTUuMTcgaCAtNjguODg3IHYgLTIwNS43NjIgbCAtODguNjk4LDEzNC42MjMgaCAtMS44MDEgbCAtODcuNzk3LC0xMzMuMjcxIHYgMjA0LjQxIHoiCiAgIGlkPSJwYXRoODE3IiAvPgoKCTxwYXRoCiAgIGQ9Im0gMTM0My41NjgsMTQ2OS4zOTcgdiAtMzE1LjE3IGggNjkuMzM4IHYgMzE1LjE3IHoiCiAgIGlkPSJwYXRoODE5IiAvPgoKCTxwYXRoCiAgIGQ9Im0gMTU3NC45OTMsMTQ3MS42NDcgLTEwNy42MDcsLTMxNy40MiBoIDc0LjI4OCBsIDY1LjI4NiwyMTMuNDE0IDcwLjY4OCwtMjE0LjMxNSBoIDU5LjQzMiBsIDcwLjY4OCwyMTQuMzE1IDY1LjI4MiwtMjEzLjQxNCBoIDcyLjQ5MyBsIC0xMDcuNjEsMzE3LjQyIGggLTYwLjMzIGwgLTcxLjEzOCwtMjA2LjIxMSAtNzEuMTQsMjA2LjIxMSB6IgogICBpZD0icGF0aDgyMSIgLz4KCgk8cGF0aAogICBkPSJtIDE5OTYuODY2LDE0NjkuMzk3IHYgLTMxNS4xNyBoIDIzNy43MjYgdiA2MS42ODMgaCAtMTY4Ljg0IHYgNjMuOTM0IGggMTQ4LjU3OCB2IDYxLjY4MyBoIC0xNDguNTc4IHYgNjYuMTg3IGggMTcxLjA5MiB2IDYxLjY4NCBoIC0yMzkuOTc4IHoiCiAgIGlkPSJwYXRoODIzIiAvPgoKCTxwYXRoCiAgIGQ9Im0gMjI5OC41MjYsMTQ2OS4zOTcgdiAtMzE1LjE3IGggMTQ2LjMyOCBjIDM2LjMxNiwwIDYzLjc4MSw5LjMwOCA4Mi4zOTYsMjcuOTE1IDE0LjQwNywxNC40MDcgMjEuNjExLDMyLjU3MSAyMS42MTEsNTQuNDc5IDAsMjkuNzE2IC0xMy44MSw1Mi4zODEgLTQxLjQyMyw2Ny45ODUgMTkuNTA4LDcuNTA3IDM0LjIxOSwxNy4zMzUgNDQuMTIyLDI5LjQ5MSA5LjkwNiwxMi4xNTYgMTQuODU3LDI4LjQ0MyAxNC44NTcsNDguODUyIDAsMjguMjE3IC0xMC41MDksNDkuNjgyIC0zMS41MTYsNjQuMzgzIC0yMS4wMTUsMTQuNzExIC00OS44MjksMjIuMDY0IC04Ni40NDYsMjIuMDY0IGggLTE0OS45MjkgeiBtIDY3LjUzOCwtMTg3Ljc1MSBoIDYzLjkzNCBjIDMzLjMxNiwwIDQ5Ljk3NywtMTEuNDA0IDQ5Ljk3NywtMzQuMjE4IDAsLTEwLjUwNCAtMy45MDYsLTE4LjUzMSAtMTEuNzA5LC0yNC4wODggLTcuODA3LC01LjU1MSAtMTkuMDY0LC04LjMzIC0zMy43NjYsLTguMzMgaCAtNjguNDM2IHogbSAwLDEyNi45NjggaCA4Mi4zOTMgYyAzMi43MTQsMCA0OS4wNzYsLTExLjcwNyA0OS4wNzYsLTM1LjExOSAwLC0yMi44MDggLTE3LjEwOSwtMzQuMjE5IC01MS4zMjcsLTM0LjIxOSBoIC04MC4xNDIgeiIKICAgaWQ9InBhdGg4MjUiIC8+CgoJPHBhdGgKICAgZD0ibSA1MzkuNDQyLDExOTkuMDI2IGMgLTMxLjIyMiwtMjkuODYzIC03MS40NDEsLTQ0Ljc5OCAtMTIwLjY2NiwtNDQuNzk4IEggMjk1Ljg2MiB2IDE5MC43NjUgaCA2OS4zMzYgdiAtMTI4LjE4MiBoIDUzLjU3OCBjIDI4LjIxLDAgNTEuMTAzLDguODU3IDY4LjY2MiwyNi41NjQgMTcuNTYsMTcuNzE1IDI2LjMzOSw0MC41MjMgMjYuMzM5LDY4LjQzNyAwLDI4LjIxOCAtOC43MDksNTEuMTAyIC0yNi4xMTMsNjguNjYyIC0xNy40MTIsMTcuNTU5IC00MC4zNzUsMjYuMzM4IC02OC44ODgsMjYuMzM4IGggLTUzLjU3OCB2IC0wLjY1NCBoIC02OS4zMzYgdiA2My4yNCBoIDEyMi45MTUgYyA0OC45MjIsMCA4OS4wNzEsLTE1LjAwOCAxMjAuNDQsLTQ1LjAyNSAzMS4zNjIsLTMwLjAxMiA0Ny4wNTEsLTY3LjUzNiA0Ny4wNTEsLTExMi41NjEgMCwtNDUuMzE5IC0xNS42MTIsLTgyLjkxNiAtNDYuODI2LC0xMTIuNzg2IHoiCiAgIGlkPSJwYXRoODI3IiAvPgoKPC9nPgogICAgICA8ZwogICAgICAgICBpZD0iZzg1NyI+Cgk8cGF0aAogICBkPSJtIDI5NC4zNzQsMTY3OC44MSB2IC0xNDYuNTkgaCAxMC44OSB2IDE0Ni41OSB6IgogICBpZD0icGF0aDgzMSIgLz4KCgk8cGF0aAogICBkPSJtIDM4Ny45NzksMTY3OC44MSB2IC0xNDYuNTkgaCAxMC4yNjMgbCAxMDEuMTQ2LDEyNy41MzUgViAxNTMyLjIyIGggMTAuNDcxIHYgMTQ2LjU5IGggLTguMTY3IEwgMzk4LjQ1LDE1NDguNTU2IHYgMTMwLjI1NCB6IgogICBpZD0icGF0aDgzMyIgLz4KCgk8cGF0aAogICBkPSJNIDYzMS43MzYsMTY3OC44MSBWIDE1NDIuMjczIEggNTgwLjY0IHYgLTEwLjA1MyBoIDExMy4wODQgdiAxMC4wNTMgaCAtNTEuMDk3IHYgMTM2LjUzNyB6IgogICBpZD0icGF0aDgzNSIgLz4KCgk8cGF0aAogICBkPSJtIDc2NC41MDUsMTY3OC44MSB2IC0xNDYuNTkgaCAxMDQuMjg5IHYgMTAuMDUzIGggLTkzLjM5OSB2IDU3LjU5IGggODMuOTc2IHYgMTAuMDUxIGggLTgzLjk3NiB2IDU4Ljg0NiBoIDk0LjQ0NiB2IDEwLjA1MSBIIDc2NC41MDUgWiIKICAgaWQ9InBhdGg4MzciIC8+CgoJPHBhdGgKICAgZD0ibSA5NDIuNTA2LDE2NzguODEgdiAtMTQ2LjU5IGggNjEuNTY4IGMgMTcuODY5LDAgMzEuNjIyLDQuODE4IDQxLjI1NSwxNC40NTEgNy4zOTgsNy40MDIgMTEuMDk4LDE2LjYxNSAxMS4wOTgsMjcuNjQzIDAsMTEuODY3IC0zLjkxLDIxLjM1OSAtMTEuNzI3LDI4LjQ4IC03LjgyLDcuMTE5IC0xOC4yMTksMTEuNTkgLTMxLjIwMiwxMy40MDIgbCA0OC4zNzUsNjIuNjEzIGggLTEzLjgyMSBsIC00Ni43LC02MC43MyBoIC00Ny45NTYgdiA2MC43MyBoIC0xMC44OSB6IG0gMTAuODksLTcwLjU3MyBoIDQ5LjQyMSBjIDEyLjU2NSwwIDIyLjgyNywtMy4wMzUgMzAuNzg1LC05LjEwNyA3Ljk1OCwtNi4wNzQgMTEuOTM3LC0xNC4zNDYgMTEuOTM3LC0yNC44MTYgMCwtOS45MSAtMy43MDIsLTE3LjcyOSAtMTEuMSwtMjMuNDU1IC03LjQwMiwtNS43MjMgLTE3LjczMiwtOC41ODYgLTMwLjk5MywtOC41ODYgaCAtNTAuMDUgeiIKICAgaWQ9InBhdGg4MzkiIC8+CgoJPHBhdGgKICAgZD0ibSAxMTMxLjYwNiwxNjc4LjgxIHYgLTE0Ni41OSBoIDEwLjI2MiBsIDEwMS4xNDYsMTI3LjUzNSBWIDE1MzIuMjIgaCAxMC40NyB2IDE0Ni41OSBoIC04LjE2NyBsIC0xMDMuMjQxLC0xMzAuMjU0IHYgMTMwLjI1NCB6IgogICBpZD0icGF0aDg0MSIgLz4KCgk8cGF0aAogICBkPSJtIDEzMjIuMTcyLDE2NzguODEgNjguMjcsLTE0Ny42MzUgaCAxMC40NzEgbCA2OC4yNywxNDcuNjM1IGggLTExLjkzOCBsIC0xOC42MzYsLTQxLjA0NSBoIC04Ni40ODkgbCAtMTguNjM5LDQxLjA0NSB6IG0gMzQuNTU0LC01MC44ODUgaCA3Ny4yNzUgbCAtMzguNTM0LC04NC44MTQgeiIKICAgaWQ9InBhdGg4NDMiIC8+CgoJPHBhdGgKICAgZD0ibSAxNTc4LjQ5NSwxNjc4LjgxIHYgLTEzNi41MzcgaCAtNTEuMDk5IHYgLTEwLjA1MyBoIDExMy4wODUgdiAxMC4wNTMgaCAtNTEuMDk3IHYgMTM2LjUzNyB6IgogICBpZD0icGF0aDg0NSIgLz4KCgk8cGF0aAogICBkPSJtIDE3MTIuNzI4LDE2NzguODEgdiAtMTQ2LjU5IGggMTAuODkxIHYgMTQ2LjU5IHoiCiAgIGlkPSJwYXRoODQ3IiAvPgoKCTxwYXRoCiAgIGQ9Im0gMTkyNi41NCwxNjU4LjkxNSBjIC0xMy44MjYsMTQuOTQxIC0zMS41NTYsMjIuNDA4IC01My4xOTIsMjIuNDA4IC0yMS42NDMsMCAtMzkuMzAxLC03LjQzNCAtNTIuOTgzLC0yMi4zMDMgLTEzLjY4NCwtMTQuODY3IC0yMC41MjIsLTMyLjcwMSAtMjAuNTIyLC01My41MDQgMCwtMjAuNjYyIDYuOTEsLTM4LjQ2MSAyMC43MzEsLTUzLjQwMiAxMy44MiwtMTQuOTM4IDMxLjU1MSwtMjIuNDA2IDUzLjE5MywtMjIuNDA2IDIxLjYzNywwIDM5LjI5Niw3LjQzNCA1Mi45NzksMjIuMzAzIDEzLjY4MywxNC44NjkgMjAuNTI1LDMyLjcwMyAyMC41MjUsNTMuNTA2IDAsMjAuNjYyIC02LjkxMiwzOC40NjIgLTIwLjczMSw1My4zOTggeiBtIC05Ny40ODMsLTYuNzAxIGMgMTEuOTM2LDEyLjg0OCAyNi44MzYsMTkuMjcgNDQuNzEsMTkuMjcgMTcuODY4LDAgMzIuNywtNi4zNTIgNDQuNTAxLC0xOS4wNTkgMTEuNzk0LC0xMi43MDMgMTcuNjk0LC0yOC4zNCAxNy42OTQsLTQ2LjkwOCAwLC0xOC4yODkgLTUuOTY5LC0zMy44NTQgLTE3LjkwNCwtNDYuNjk5IC0xMS45MzgsLTEyLjg0NCAtMjYuODQyLC0xOS4yNjggLTQ0LjcxLC0xOS4yNjggLTE3Ljg3NSwwIC0zMi43MDcsNi4zNTUgLTQ0LjUwMiwxOS4wNTcgLTExLjc5OSwxMi43MDUgLTE3LjY5MywyOC4zNDQgLTE3LjY5Myw0Ni45MSAtMTBlLTQsMTguMjkxIDUuOTY1LDMzLjg1NSAxNy45MDQsNDYuNjk3IHoiCiAgIGlkPSJwYXRoODQ5IiAvPgoKCTxwYXRoCiAgIGQ9Im0gMjAyMi4wMjgsMTY3OC44MSB2IC0xNDYuNTkgaCAxMC4yNjEgbCAxMDEuMTQ2LDEyNy41MzUgViAxNTMyLjIyIGggMTAuNDcxIHYgMTQ2LjU5IGggLTguMTY3IGwgLTEwMy4yNCwtMTMwLjI1NCB2IDEzMC4yNTQgeiIKICAgaWQ9InBhdGg4NTEiIC8+CgoJPHBhdGgKICAgZD0ibSAyMjEyLjU5MywxNjc4LjgxIDY4LjI3LC0xNDcuNjM1IGggMTAuNDcgbCA2OC4yNywxNDcuNjM1IGggLTExLjkzNSBsIC0xOC42MzksLTQxLjA0NSBoIC04Ni40ODggbCAtMTguNjM5LDQxLjA0NSB6IG0gMzQuNTU2LC01MC44ODUgaCA3Ny4yNzEgbCAtMzguNTMzLC04NC44MTQgeiIKICAgaWQ9InBhdGg4NTMiIC8+CgoJPHBhdGgKICAgZD0ibSAyNDI4LjI5LDE2NzguODEgdiAtMTQ2LjU5IGggMTAuODkxIHYgMTM2LjUzOSBoIDg2LjA2NSB2IDEwLjA1MSB6IgogICBpZD0icGF0aDg1NSIgLz4KCjwvZz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo=);');
    } else {
        var title = 'demiweb';
        var banner = `\n%c${title.split('').join('%c %c')}%c\n`;
        var styler = [];

        var symbol = [
            'font: 32px/1.5 Helvetica, Arial, sans-serif',
            'text-transform: uppercase',
            'color: #fff',
            'background-color: #ffd800',
            'padding: 4px 14px',
        ].join(';');

        title.split('').forEach(() => {
            styler.push(symbol);
            styler.push('');
        });

        window.console.log(`${staticText} - ${staticUrl}`);
        window.console.log(banner, ...styler);
    }
}

helloConsole();

var allLazyLoad = [...document.querySelectorAll('.lazyload')];

function allLozadImg() {
    allLazyLoad.forEach((el) => {
        var observer = lozad(el); // passing a `NodeList` (e.g. `document.querySelectorAll()`) is also valid
        observer.observe();
        el.addEventListener('load', () => {
            el.classList.add('is-loaded')
        })
        // if (el.loaded()) {
        //     el.classList.add('is-loaded');
        // }
    })
}

allLozadImg();
// function scrollScroll() {
//     if (window.innerWidth > 1000) {
//         const scroll2s = new Scrooth({
//             element: window,
//             strength: 12,
//             acceleration: 1.05,
//             deceleration: 0.975
//         });
//     }
// }
// scrollScroll();
let preloaderBlock = document.querySelector('.preloader');
let spamsPath = [...document.querySelectorAll('.svg-cont svg .spam')];

function preloaderStart() {
    if (preloaderBlock) {
        document.body.classList.add('no-scroll');


        setTimeout(() => {
            document.body.classList.remove('no-scroll');
            document.querySelector('main').classList.add('reveals');
            preloaderBlock.classList.add('hide');
        }, 2100);

    }
}

preloaderStart();


let btnMeetsMod = [...document.querySelectorAll('.btn--meets')];
let meetModalWndow = [...document.querySelectorAll('.meet-modal')];

function openMeetsModalWindow() {
    if (btnMeetsMod.length) {
        btnMeetsMod.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                btn.closest('.single-meet').querySelector('.meet-modal').classList.add('active');
                document.body.classList.add('no-scroll');
            })
        });

        meetModalWndow.forEach((mod) => {
            mod.querySelector('.close-meet').addEventListener('click', () => {
                mod.classList.remove('active');
                document.body.classList.remove('no-scroll');
            })
        })
    }
}

openMeetsModalWindow();


let linkBtn = [...document.querySelectorAll('.open-form')];
let modalWindow = [...document.querySelectorAll('.modal-window')];
let modalClose = [...document.querySelectorAll('.modal-close')];
let modalCont = [...document.querySelectorAll('.modal-container')];

function openModal() {
    if (modalWindow.length) {
        linkBtn.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                modalWindow[0].classList.add('visible');
                document.body.classList.add('no-scroll');
            })
        });
        modalClose.forEach((btn) => {
            btn.addEventListener('click', () => {
                modalWindow[0].classList.remove('visible');
                document.body.classList.remove('no-scroll');
            })
        });

        // modalCont.forEach((btn) => {
        //     btn.querySelector('.modal-cont').addEventListener('click', (e) => {
        //         e.stopPropagation();
        //         e.preventDefault();
        //     });
        //     btn.addEventListener('click', () => {
        //         modalWindow[0].classList.remove('visible');
        //         document.body.classList.remove('no-scroll');
        //     })
        // })
    }
}

openModal();

let langBtn = [...document.querySelectorAll('.lang > span')];

function openLang() {
    if (langBtn.length) {
        langBtn[0].addEventListener('click', () => {
            langBtn[0].classList.toggle('open');
        })
    }
}

openLang();

$(document).ready(function () {

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                $('.call-us').addClass('hide');
            } else {
                $('.call-us').removeClass('hide');
            }
        });
    }, {threshold: 0.1});
    $('.footer').each(function () {
        observer.observe(this);
    });


});
//cursor following block

let callUs = [...document.querySelectorAll('.call-us')];

function callOpen() {
    if (callUs.length) {
        callUs.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.classList.toggle('open');
            })
        })
    }
}

callOpen();
var counterContainer = [...document.querySelectorAll('.counting-delay')];

function addCoutingDelay() {
    if (counterContainer.length) {
        counterContainer.forEach((cont) => {
            var anims = [...cont.querySelectorAll('.anim')];
            anims.forEach((btn, k) => {
                btn.dataset.animDelay = k * 100;
            })
        })
    }
}

addCoutingDelay();

// scroll animations
var anim = document.querySelectorAll('.anim')

function scrollAnimations() {
    if (anim.length) {
        var observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                var el = entry.target
                if (entry.isIntersecting) {
                    if (el.classList.contains('anim-js')) {

                    } else {
                        el.style.animationDelay = el.dataset.animDelay + 'ms';
                        el.style.animationDuration = el.dataset.animDuration + 'ms';
                        el.style.animationName = el.dataset.anim;
                    }


                    el.classList.add('done');
                    observer.unobserve(entry.target);
                }

            })
        }, {threshold: .5})
        if (window.innerWidth > 991) {
            anim.forEach(animate => {
                observer.observe(animate)
            })
        } else {

            anim.forEach(animate => {
                // if (animate.classList.contains('anim-js')) {
                observer.observe(animate)
                // }

            })
        }
    }
}

scrollAnimations();
//hero anims

let heroAnim = [...document.querySelectorAll('.hero-anims')];

function delayHero() {
    if (heroAnim.length) {
        var observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                var el = entry.target
                if (entry.isIntersecting) {

                    let lines = [...el.querySelectorAll('.line')];

                    lines[1].classList.add('go');
                    setTimeout(() => {
                        lines[3].classList.add('go');
                    }, 300);
                    setTimeout(() => {
                        lines[0].classList.add('go');
                    }, 1050);
                    setTimeout(() => {
                        el.querySelector('.word').classList.add('go');
                    }, 1200);
                    setTimeout(() => {
                        lines[2].classList.add('go');
                    }, 1950);

                    el.classList.add('done');
                    observer.unobserve(entry.target);
                }

            })
        }, {threshold: .5});
        if (window.innerWidth > 991) {
            heroAnim.forEach(animate => {
                observer.observe(animate)
            })
        } else {

            heroAnim.forEach(animate => {
                observer.observe(animate)
            })
        }
    }
}

// delayHero();

//hero anims


//open search

let btnSearch = [...document.querySelectorAll('.btn-search')];
let searchCont = [...document.querySelectorAll('.search-cont')];

function openSearchCont() {
    if (btnSearch.length) {
        btnSearch.forEach((btn, k) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                searchCont[0].classList.toggle('opened');
            })
        })
    }
}

openSearchCont();

//open search

//menu burger

let burger = [...document.querySelectorAll('.burger')];
let menuCont = [...document.querySelectorAll('.menu-cont')];
let closeMenu = [...document.querySelectorAll('.close-menu')];

function menuControl() {
    if (burger.length) {
        burger.forEach((btn, k) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();

                if (k === 0) {
                    menuCont[0].classList.toggle('opened');
                    btn.classList.toggle('opened');
                    document.body.classList.toggle('opened');
                } else {
                    menuCont[0].classList.toggle('opened');
                    btn.classList.toggle('opened');
                    burger[0].classList.toggle('opened');
                    document.body.classList.toggle('opened');
                }

            })
        });
        closeMenu.forEach((btn2) => {
            btn2.addEventListener('click', () => {
                menuCont[0].classList.remove('opened');
                document.body.classList.remove('opened');
                burger[0].classList.remove('opened');

            })
        })

    }
}

menuControl();

let menuHas = [...document.querySelectorAll('.menu-item-has-children > a')];

function showMenuSide() {
    if (menuHas.length) {
        menuHas.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                btn.closest('.menu-item-has-children').classList.toggle('open');
            })
        })
    }
}

showMenuSide();
//menu burger

//slider
let brandsSlides = [...document.querySelectorAll('.brands-slider.js-slider')];

function brandsSlider() {
    if (!brandsSlides.length) {

    } else {
        brandsSlides.forEach((sld) => {
            let sldCont = sld.querySelector('.brands-cont');
            let sldNext = sld.querySelector('.slides-btn--next');
            let sldPrev = sld.querySelector('.slides-btn--prev');
            let pagin = sld.querySelector('.dots');

            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: false,
                slidesPerView: 1,
                slidesPerGroup: 1,
                speed: 800,
                // centeredSlides:true,
                autoplay: true,
                spaceBetween: 0,
                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },
                pagination: {
                    el: pagin,
                    type: 'bullets',
                    bulletActiveClass: 'active',
                    bulletClass: 'single-dot',
                    bulletElement: 'div',
                    clickable: true,
                    currentClass: 'current',
                    spaceBetween: 2,
                },
                breakpoints: {
                    // when window width is >= 320px

                    // when window width is >= 480px
                    400: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                    },
                    600: {
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                    },
                    920: {
                        slidesPerView: 4,
                        slidesPerGroup: 4,
                    },

                }


            });
        })
    }
}

brandsSlider();


let prodsSlides = [...document.querySelectorAll('.our-prods')];

function prodsSlider() {
    if (!prodsSlides.length) {

    } else {
        prodsSlides.forEach((sld) => {
            let sldCont = sld.querySelector('.prods__cont');
            let sldNext = sld.querySelector('.slides-btn--next');
            let sldPrev = sld.querySelector('.slides-btn--prev');

            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: false,
                slidesPerView: 1,
                slidesPerGroup: 1,
                speed: 1000,
                // centeredSlides:true,
                autoplay: true,
                spaceBetween: 0,
                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },


            });
        })
    }
}

prodsSlider();

let meetsSlides = [...document.querySelectorAll('.meet-slider')];

function meetsSlider() {
    if (!meetsSlides.length) {

    } else {
        meetsSlides.forEach((sld) => {
            let sldCont = sld.querySelector('.meet-slider-container');
            let sldNext = sld.querySelector('.slides-btn--next');
            let sldPrev = sld.querySelector('.slides-btn--prev');
            let pagin = sld.querySelector('.dots');

            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: false,
                slidesPerView: 1,
                slidesPerGroup: 1,
                speed: 1000,
                // centeredSlides:true,
                autoplay: true,
                spaceBetween: 0,
                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },
                pagination: {
                    el: pagin,
                    type: 'bullets',
                    bulletActiveClass: 'active',
                    bulletClass: 'single-dot',
                    bulletElement: 'div',
                    clickable: true,
                    currentClass: 'current',
                    spaceBetween: 2,
                },


            });
        })
    }
}

meetsSlider();

let itemSlides = [...document.querySelectorAll('.product-photos')];

function itemSider() {
    if (!itemSlides.length) {

    } else {
        itemSlides.forEach((sld) => {
            let sldCont = sld.querySelector('.main-photos__cont');
            let sldNext = sld.querySelector('.slides-btn--next');
            let sldPrev = sld.querySelector('.slides-btn--prev');
            let swiperThumb = sld.querySelector('.thumbs__cont');
            const swiper3 = new Swiper(swiperThumb, {
                // Optional parameters
                loop: false,

                slidesPerView: 'auto',
                speed: 1000,
                // centeredSlides:true,
                autoplay: false,
                spaceBetween: 3,

            });
            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: true,
                effect: "fade",
                slidesPerView: 1,
                slidesPerGroup: 1,
                speed: 1000,
                // centeredSlides:true,
                autoplay: false,
                spaceBetween: 0,
                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },
                thumbs: {
                    swiper: swiper3,
                },

            });
        })
    }
}

itemSider();


let certSlides = [...document.querySelectorAll('.certificates')];

function certSlider() {
    if (!certSlides.length) {

    } else {
        certSlides.forEach((sld) => {
            let sldCont = sld.querySelector('.certs__cont');
            let sldNext = sld.querySelector('.slides-btn--next');
            let sldPrev = sld.querySelector('.slides-btn--prev');
            let pagin = sld.querySelector('.dots');

            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: true,
                slidesPerView: 1,
                slidesPerGroup: 1,
                speed: 800,
                // centeredSlides:true,
                autoplay: true,
                spaceBetween: 0,
                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },
                pagination: {
                    el: pagin,
                    type: 'bullets',
                    bulletActiveClass: 'active',
                    bulletClass: 'single-dot',
                    bulletElement: 'div',
                    clickable: true,
                    currentClass: 'current',
                    spaceBetween: 2,
                },
                breakpoints: {
                    // when window width is >= 320px

                    // when window width is >= 480px
                    400: {
                        slidesPerView: 2,
                        slidesPerGroup: 1,
                    },
                    600: {
                        slidesPerView: 3,
                        slidesPerGroup: 2,
                    },
                    920: {
                        slidesPerView: 4,
                        slidesPerGroup: 2,
                    },

                }


            });
        })
    }
}

certSlider();


let commentSlides = [...document.querySelectorAll('.comment-tab')];

function commentSider() {
    if (!commentSlides.length) {

    } else {
        commentSlides.forEach((sld) => {
            let sldCont = sld.querySelector('.comment-photos');
            let sldNext = sld.querySelector('.slides-btn--next');
            let sldPrev = sld.querySelector('.slides-btn--prev');
            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: true,
                effect: "fade",
                slidesPerView: 1,
                slidesPerGroup: 1,
                speed: 1000,
                // centeredSlides:true,
                autoplay: false,
                spaceBetween: 0,
                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },

            });
        })
    }
}

commentSider();


//slider

let btnHideSHow = [...document.querySelectorAll('.hide-show-more')];

function hideShowMore() {
    if (btnHideSHow.length) {
        btnHideSHow.forEach((btn) => {
            let hide = btn.dataset.hide;
            let show = btn.dataset.show;
            let lister = btn.closest('.lister');
            btn.addEventListener('click', () => {
                if (btn.classList.contains('show')) {
                    btn.classList.remove('show');
                    lister.classList.remove('show');
                    btn.innerHTML = show;
                } else {
                    btn.classList.add('show');
                    lister.classList.add('show');
                    btn.innerHTML = hide;
                }
            })
        })
    }
}

hideShowMore();

let openMobFilters = [...document.querySelectorAll('.single-filter span')];

function openCloseFilter() {
    if (openMobFilters.length) {
        openMobFilters.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.single-filter').classList.toggle('opened')
            })
        })
    }

}

openCloseFilter();

let filterGlob = [...document.querySelectorAll('.btn-filters')];

function openFilterGlobal() {
    if (filterGlob.length) {
        filterGlob.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.filters-block').classList.toggle('open')
            })
        })
    }

}

openFilterGlobal();

let commentsText = [...document.querySelectorAll('.modal-comment__text li')];
let commentsTabs = [...document.querySelectorAll('.comment-tab')];

function changeActiveComment() {
    if (commentsText.length) {
        commentsText.forEach((btn, k) => {
            btn.addEventListener('click', () => {
                if (btn.classList.contains('active')) {

                } else {
                    commentsText.forEach((btn2, k) => {
                        btn2.classList.remove('active');
                    });
                    commentsTabs.forEach((btn3, k) => {
                        btn3.classList.remove('active');
                    });
                    btn.classList.add('active');
                    commentsTabs[k].classList.add('active');
                }
            })
        })
    }
}

changeActiveComment();

//modal windows

let commentBtn = [...document.querySelectorAll('.btn--comments')];
let commentModal = [...document.querySelectorAll('.modal-comment')][0];

function funcComment() {
    if (commentBtn.length) {
        commentBtn.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                document.body.classList.add('no-scroll');
                commentModal.classList.add('active');
            })
        })
    }
}

funcComment();

let seminarRegBtn = [...document.querySelectorAll('.btn--seminar')];
let seminarRegModal = [...document.querySelectorAll('.modal-seminar-reg')][0];

function funcSeminarReg() {
    if (seminarRegBtn.length) {
        seminarRegBtn.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                document.body.classList.add('no-scroll');
                seminarRegModal.classList.add('active');
            })
        })
    }
}

funcSeminarReg();


let callBtn = [...document.querySelectorAll('.mod--call')];
let callModalWindow = [...document.querySelectorAll('.modal-call')][0];

function callModal() {
    if (callBtn.length) {
        callBtn.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                document.body.classList.add('no-scroll');
                callModalWindow.classList.add('active');
            })
        })
    }
}

callModal();
let cartToggler = [...document.querySelectorAll('.cart-toggler')];
let cartModalWindow = [...document.querySelectorAll('.modal-cart')][0];

function cartModal() {
    if (cartToggler.length) {
        cartToggler.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                document.body.classList.add('no-scroll');
                cartModalWindow.classList.add('active');
                btn.classList.remove('active');
            })
        })
    }
}

cartModal();

function closeModals() {
    if (document.querySelector('.modal-window')) {
        let backplates = [...document.querySelectorAll('.backplate')];
        let closer = [...document.querySelectorAll('.modal-window .close')];
        backplates.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.modal-window').classList.remove('active');
                document.body.classList.remove('no-scroll');
                if (cartToggler.length) {
                    cartToggler[0].classList.add('active');
                }
            })
        });
        closer.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.modal-window').classList.remove('active');
                document.body.classList.remove('no-scroll');
                if (cartToggler.length) {
                    cartToggler[0].classList.add('active');
                }
            })
        })

    }
}

closeModals()


//modal windows

//tabs

let tabBtn = [...document.querySelectorAll('.tab-btn')];

function changeTab() {
    if (!tabBtn.length) {

    } else {
        tabBtn.forEach((btn, k) => {
            btn.addEventListener('click', () => {
                if (btn.classList.contains('active')) {

                } else {
                    tabBtn.forEach((btn2) => {
                        btn2.classList.remove('active');
                    });
                    btn.classList.add('active');
                    [...document.querySelectorAll('.item-tab')].forEach((tab, m) => {
                        if (m === k) {
                            tab.classList.add('active');
                        } else {
                            tab.classList.remove('active');

                        }
                    })
                }
            })
        })
    }
}

changeTab();

let tabBtn2 = [...document.querySelectorAll('.tab-btn2')];

function changeTab2() {
    if (!tabBtn2.length) {

    } else {
        tabBtn2.forEach((btn, k) => {
            btn.addEventListener('click', () => {
                if (btn.classList.contains('active')) {

                } else {
                    tabBtn2.forEach((btn2) => {
                        btn2.classList.remove('active');
                    });
                    btn.classList.add('active');
                    [...document.querySelectorAll('.item-tab2')].forEach((tab, m) => {
                        if (m === k) {
                            tab.classList.add('active');
                        } else {
                            tab.classList.remove('active');

                        }
                    })
                }
            })
        })
    }
}

changeTab2();

let programFormModal = [...document.querySelectorAll('.single-program')];
let modalDetails = [...document.querySelectorAll('.modal-details')][0];

function detailsModal() {
    if (programFormModal.length) {
        programFormModal.forEach((btn) => {
            let title = btn.querySelector('.cont-for-modal .tt');
            let text = btn.querySelector('.cont-for-modal .text');
            let img = btn.querySelector('.cont-for-modal img');
            let btn2 = btn.querySelector('.btn--details');

            let modalTitle = modalDetails.querySelector('.modal-comment__head p');
            let modalText = modalDetails.querySelector('.modal-details__cont .text');
            let modalImage = modalDetails.querySelector('.modal-details__cont .img img');


            btn2.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                modalTitle.innerHTML = title.innerHTML;
                modalText.innerHTML = text.innerHTML;
                modalImage.src = img.src;

                modalDetails.classList.add('active');
                document.body.classList.add('no-scroll');


            })

        })
    }
}

detailsModal();


let programMob = [...document.querySelectorAll('.programs-head > p')];
let programHead = [...document.querySelectorAll('.programs-head .tab-btn')];
function openProgramSelect() {
    if (programMob.length) {
        programMob.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.programs-head').classList.toggle('opened');
            })
        });
        programHead.forEach((btn2) => {
            btn2.addEventListener('click', () => {
                if (btn2.classList.contains('active')) {

                } else {
                    programHead.forEach((btn3) => {
                        btn3.classList.remove('active');
                    });
                    btn2.classList.add('active');

                }
                console.log(programMob[0]);
                programMob[0].innerText = btn2.innerHTML;
                btn2.closest('.programs-head').classList.remove('opened');
            })
        })
    }

}
openProgramSelect();


let seminarFormModal = [...document.querySelectorAll('.single-seminar')];
let modalSeminar = [...document.querySelectorAll('.modal-seminar')][0];

function seminarModal() {
    if (seminarFormModal.length) {
        seminarFormModal.forEach((btn) => {
            let title = btn.querySelector('.cont-for-modal .tt');
            let text = btn.querySelector('.cont-for-modal .text');
            let nameT = btn.querySelector('.cont-for-modal .name');
            let link = btn.querySelector('.cont-for-modal .name').dataset.link;
            let btn2 = btn.querySelector('.btn--details');

            let modalTitle = modalSeminar.querySelector('.modal-comment__head p');
            let modalText = modalSeminar.querySelector('.modal-details__cont .text');
            let modalName = modalSeminar.querySelector('.modal-details__cont .tree-btn p');
            let modalLink = modalSeminar.querySelector('.modal-details__cont .tree-btn');



            btn2.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                modalTitle.innerHTML = title.innerHTML;
                modalText.innerHTML = text.innerHTML;
                modalName.innerHTML = nameT.innerHTML;
                modalLink.href = link;

                modalSeminar.classList.add('active');
                document.body.classList.add('no-scroll');

            })

        })
    }
}

seminarModal();

let btnSeminar = [...document.querySelectorAll('.btn--seminar')];
//tabs


//compare images
const viewersImages = document.querySelectorAll(".image-compare");



function ifCompareImage() {
    if (viewersImages.length) {

        viewersImages.forEach((element) => {
            let bef = element.dataset.before;
            let aft = element.dataset.after;
            const optionsCompare = {

                // UI Theme Defaults

                controlColor: "#0ab8b6",
                controlShadow: true,
                addCircle: false,
                addCircleBlur: true,

                // Label Defaults

                showLabels: true,
                labelOptions: {
                    before:bef,
                    after: aft,
                    onHover: false
                },

                // Smoothing
            };
            let view = new ImageCompare(element, optionsCompare).mount();
        });
    }
}
ifCompareImage();



//compare images

//cart

$(document).on('click', '.js-minus', function (e) {
    var t=$(this).next().find('input').val();t>1&&$(this).next().find('input').val(+t-1);
    return false;
});
$(document).on('click', '.js-plus', function (e) {

    var t=$(this).prev().find('input').val();
    $(this).prev().find('input').val(+t+1);
    return false;
});

//cart
