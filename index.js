/**
 * Hi, you may not understand this js code. do not worry it is not about you but me because i didn't code
 * it well 
 */


const newFooter = '<footer id="footer" class="extra-mg-top in-animation default-pd-lf-rg bg-very-dark-grayish-blue make-fill-parent-width contents-in-row default-padding-bt-tp default-content-behavior"> \
<p class="contents-in-row"> \
    <span class="share ">share</span> \
    <i class="default-icon-style fa-brands fa-pinterest"></i> \
    <i class="default-icon-style fa-brands fa-twitter"></i> \
    <i class="default-icon-style fa-brands fa-square-facebook"></i> \
</p> \
<button onclick="removeMobileViewClick(this)" class="move-in pointer bg-desaturated-dark-blue color-very-dark-grayish-blue at-left round-bt-style" aria-label="share button"><i class="default-icon-style fa-solid fa-share" aria-label="share image"></i></button> \
</footer>';
const mainFooter = '<footer id="footer" class="relatively contents-in-row default-padding-bt-tp medium-mg-top default-content-behavior in-animation">\
    <figure class="default-profile-style">\
    <img src="images/avatar-michelle.jpg" alt="Michelle Appleton">\
    </figure>\
    <p class="paragraph">\
    <strong class="display-block very-dark-grayish-blue">Michelle Appleton</strong>\
    <em class="display-block desaturated-dark-blue">28 Jun 2020</em>\
    </p>\
    <div>\
    <div class="arrow hidden outofcontainer extra-mg-top default-pd-lf-rg bg-very-dark-grayish-blue make-fill-parent-width contents-in-row default-padding-bt-tp default-content-behavior">\
            <p class="contents-in-row">\
                <span class="share ">share</span>\
                <i class="default-icon-style fa-brands fa-pinterest"></i> \
                <i class="default-icon-style fa-brands fa-twitter"></i> \
                <i class="default-icon-style fa-brands fa-square-facebook"></i>\
            </p>\
        </div>\
    <button onclick="mobileViewClick(this)" id="bt-share" class="absolutely move-in pointer at-left round-bt-style" aria-label="share button"><i class="default-icon-size color-very-dark-grayish-blue  fa-solid fa-share" aria-label="share image"></i></button>\
    </div>\
    </footer>';


let i = 1;

function forWideScreen(event) {
    ++i;
    if (i % 2 == 0) {
        let el = document.getElementsByClassName('hidden')[0];
        if (!el) {
            event.className += " move-out";
            event.className = event.classList.toString().replace('move-in', " move-out");
            let footer = document.getElementById('footer');
            let parent = footer.parentNode;
            footer.className = footer.classList.toString() + ' out-animation';
            setTimeout(() => {
                parent.removeChild(footer);
                parent.innerHTML += mainFooter;
            }, 900);
        }
        el.className = el.classList.toString().replace('hidden', 'show');
    } else {
        let el = document.getElementsByClassName('show')[0];
        el.className = el.classList.toString().replace('show', 'hidden');
    }
}

function mobileViewClick(event) {
    if (window.innerWidth >= 800) {
        forWideScreen(event);
        return;
    }
    event.className += " move-out";
    event.className = event.classList.toString().replace('move-in', "");
    let footer = document.getElementById('footer');
    let parent = footer.parentNode;
    footer.className = footer.classList.toString() + ' out-animation';
    setTimeout(() => {
        parent.removeChild(footer);
        parent.innerHTML += newFooter;
    }, 900);


}

function removeMobileViewClick(event) {
    if (window.innerWidth >= 800) {
        forWideScreen(event);
        return;
    }
    event.className += " move-out";
    event.className = event.classList.toString().replace('move-in', " move-out");
    let footer = document.getElementById('footer');
    let parent = footer.parentNode;
    footer.className = footer.classList.toString() + ' out-animation';
    setTimeout(() => {
        parent.removeChild(footer);
        parent.innerHTML += mainFooter;
    }, 900);

}

