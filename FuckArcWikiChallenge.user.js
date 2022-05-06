// ==UserScript==
// @name         FuckArcWikiChallenge
// @namespace    https://kuroikage.blog.luogu.org
// @version      0.12.8
// @description  绕过Arcaea中文Wiki的技术类隐藏页面验证
// @author       Misaka12456(Fork By Kuroikage1732)
// @match        https://wiki.arcaea.cn/*
// @icon         https://pic.rmb.bdstatic.com/bjh/3a01f3977ca05bb86115fe2fb144ba21.png
// @grant        none
// @require      https://unpkg.com/jquery@3.6.0/dist/jquery.min.js
// ==/UserScript==
this.$ = this.jQuery = jQuery.noConflict(true);
console.log('FuckArcWikiChallenge Loaded');
if (document.getElementById('autohidden') != undefined) {
    document.evaluate('/html/body/div[3]/div[3]/div[4]/div/table/tbody/tr/td[1]/div/img', document).iterateNext().src = "https://pic.rmb.bdstatic.com/bjh/3a01f3977ca05bb86115fe2fb144ba21.png";
    console.debug('[FuckArcWikiChallenge]Replaced Visibility Icon');
    $('#autohidden').html('');
    console.debug('[FuckArcWikiChallenge]Cleared Question Div');
    // $('#autoshow').removeAttr('class','test-hidden-2');
    // console.debug('[FuckArcWikiChallenge]Showed Confirm Prompt');
    $('div .light-blue').remove();
    console.debug('[FuckArcWikiChallenge]Removed Confirm Prompt');
    $('.box-技术型').remove()
    console.debug('[FuckArcWikiChallenge]Removed Technical Warning');
    $("p:first").css('display', 'none');
    console.debug('[FuckArcWikiChallenge]Hidden <p> Before Main Part');
    $('.test-hidden').removeAttr('class', 'test-hidden');
    console.debug('[FuckArcWikiChallenge]Showed Main Hidden Part');
}
else {
    console.log('No element of id "autohidden" found. FuckArcWikiChallenge will ignore current page.');
}