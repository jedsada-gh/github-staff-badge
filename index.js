// ==UserScript==
// @name         GitHub Staff Badge
// @version      0.1
// @namespace   https://github.com/w3bsme/github-staff-badge
// @description Visually adds your developer badge.
// @author      w3bsme
// @copyright   2020+, w3bsme (https://github.com/w3bsme)
// @license     MIT; https://github.com/w3bsme/github-staff-badge/blob/master/LICENSE
// @icon        https://raw.githubusercontent.com/w3bsme/github-staff-badge/master/icon.png
// @homepageURL https://github.com/w3bsme/github-staff-badge
// @supportURL  https://github.com/w3bsme/github-staff-badge/issues
// @include     *github.com*
// @grant       none
// ==/UserScript==

;(function () {
	"use strict"
	if (
		(document.querySelector(".vcard-details") &&
			!!document.querySelector(".p-org")) === false
	) {
		document.querySelector(".vcard-details").innerHTML =
			`<li class="vcard-detail pt-1 css-truncate css-truncate-target hide-sm hide-md">
<svg aria-label="Organization: GitHub" class="octicon octicon-organization" viewBox="0 0 16 16" version="1.1" width="16" height="16" role="img"><path fill-rule="evenodd" d="M1.5 14.25c0 .138.112.25.25.25H4v-1.25a.75.75 0 01.75-.75h2.5a.75.75 0 01.75.75v1.25h2.25a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25h-8.5a.25.25 0 00-.25.25v12.5zM1.75 16A1.75 1.75 0 010 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 00.25-.25V8.285a.25.25 0 00-.111-.208l-1.055-.703a.75.75 0 11.832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0114.25 16h-3.5a.75.75 0 01-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 01-.75-.75V14h-1v1.25a.75.75 0 01-.75.75h-3zM3 3.75A.75.75 0 013.75 3h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 3.75zM3.75 6a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM3 9.75A.75.75 0 013.75 9h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 9.75zM7.75 9a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM7 6.75A.75.75 0 017.75 6h.5a.75.75 0 010 1.5h-.5A.75.75 0 017 6.75zM7.75 3a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5z"></path></svg>
<span class="p-org" itemprop="worksFor">GitHub</span>
<span class="label bg-blue text-uppercase">Staff</span>
</li>` + document.querySelector(".vcard-details").innerHTML
		console.log(
			"%c [GitHub Staff Badge] Badge added",
			"background: rgb(63, 81, 181); color: white"
		)
	}
})()
