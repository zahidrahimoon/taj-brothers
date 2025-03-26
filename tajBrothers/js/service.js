/**
 * Taj & Brothers Enterprises - Services Page JavaScript
 */

document.addEventListener("DOMContentLoaded", () => {
    // Initialize animations for service items
    initServiceItemAnimations()


    // Initialize animations for process steps
    initProcessStepAnimations()
})

/**
 * Initialize animations for service items
 */
function initServiceItemAnimations() {
    const serviceItems = document.querySelectorAll(".service-item")

    if (serviceItems.length === 0) return

    const options = {
        threshold: 0.2,
    }

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1"
                entry.target.style.transform = "translateY(0)"
                observer.unobserve(entry.target)
            }
        })
    }, options)

    serviceItems.forEach((item, index) => {
        item.style.opacity = "0"
        item.style.transform = "translateY(30px)"
        item.style.transition = "opacity 0.5s ease, transform 0.5s ease"
        item.style.transitionDelay = `${index * 0.2}s`
        observer.observe(item)
    })
}

/**
 * Initialize animations for process steps
 */
function initProcessStepAnimations() {
    const processSteps = document.querySelectorAll(".process-step")

    if (processSteps.length === 0) return

    const options = {
        threshold: 0.2,
    }

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1"
                entry.target.style.transform = "translateY(0)"
                observer.unobserve(entry.target)
            }
        })
    }, options)

    processSteps.forEach((step, index) => {
        step.style.opacity = "0"
        step.style.transform = "translateY(30px)"
        step.style.transition = "opacity 0.5s ease, transform 0.5s ease"
        step.style.transitionDelay = `${index * 0.1}s`
        observer.observe(step)
    })
}