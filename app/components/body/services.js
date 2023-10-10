export const callbackFadeLeft = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-left')
        } else {
            entry.target.classList.remove('fade-in-left')
        }
    })
}
export const callbackFadeRight = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-right')
        } else {
            entry.target.classList.remove('fade-in-left')
        }
    })
}
export const callbackFadeUp = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up')
        } else {
            entry.target.classList.remove('fade-in-up')
        }
    })
}
export const callbackFadeIn = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in')
        } else {
            entry.target.classList.remove('fade-in')
        }
    })
}
