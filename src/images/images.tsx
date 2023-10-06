export type ImageType = {
    url: string,
    isMobile: boolean
}

const bach1 = require('./bachelorproef/desktopHomeThreeHovered.jpg')
const bach2 = require('./bachelorproef/desktopDetailsThree.jpeg')
const bach3 = require('./bachelorproef/desktopHomeConventioneel.jpg')
const bach4 = require('./bachelorproef/desktopSearch.jpg')
const bach5 = require('./bachelorproef/desktopDetailConventioneel.jpg')
const bach6 = require('./bachelorproef/desktopCart.jpg')
export const bach = [bach1, bach2, bach3, bach4, bach5, bach6]

const devops1 = require('./DEVOPS/desktopDashboard.png')
const devops2 = require('./DEVOPS/desktopTracking.jpeg')
const devops3 = require('./DEVOPS/mobileDashboard.png')
const devops4 = require('./DEVOPS/mobileTracking.png')
export const devops: ImageType[] = [{ url: devops1, isMobile: false}, { url: devops2, isMobile: false}, { url: devops3, isMobile: true}, { url: devops4, isMobile: true}]

const fluvius1 = require('./fluviusApp/categorie.png')
const fluvius2 = require('./fluviusApp/dashboard.png')
const fluvius3 = require('./fluviusApp/dashboardJS.png')
export const fluvius = [fluvius1, fluvius2, fluvius3]

const quotes1 = require('./quotesApp/dashboard.jpg')
const quotes2 = require('./quotesApp/favourites.jpg')
const quotes3 = require('./quotesApp/focus.jpg')
export const quotes: ImageType[] = [{ url: quotes1, isMobile: true}, { url: quotes2, isMobile: true}, { url: quotes3, isMobile: true}]

const releases1 = require('./releasesApp/home.png')
const releases2 = require('./releasesApp/album.png')
const releases3 = require('./releasesApp/register.png')
const releases4 = require('./releasesApp/login.png')
const releases5 = require('./releasesApp/homeSignedIN.png')
const releases6 = require('./releasesApp/review.png')
const releases7 = require('./releasesApp/albumWithReview.png')


export const releases = [releases1, releases2, releases3, releases4, releases5, releases6, releases7]
