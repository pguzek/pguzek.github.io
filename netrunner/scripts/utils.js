export async function fetchAllCards() {
    try {
        const response = await fetch("https://netrunnerdb.com/api/2.0/public/cards");
        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching:', error);
    }
}

export function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

export function snapToGrid(element, grid = 25) {
    const left = Math.round(element.getBoundingClientRect().x / grid) * grid
    const top = Math.round(element.getBoundingClientRect().y / grid) * grid
    element.style.left = `${left}px`;
    element.style.top = `${top}px`;
}

export function isPointWithinElement(x, y, element) {
    const rect = element.getBoundingClientRect()
    return (
        x >= rect.left &&
        x <= rect.right &&
        y >= rect.top &&
        y <= rect.bottom
    )
}

export function throttle(func, wait, options) {
    var timeout, context, args, result;
    var previous = 0;
    if (!options) options = {};

    var later = function() {
        previous = options.leading === false ? 0 : Date.now();
        timeout = null;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
    };

    var throttled = function() {
        var _now = Date.now();
        if (!previous && options.leading === false) previous = _now;
        var remaining = wait - (_now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = _now;
            result = func.apply(context, args);
            if (!timeout) context = args = null;
        } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
        }
        return result;
    };

    throttled.cancel = function() {
        clearTimeout(timeout);
        previous = 0;
        timeout = context = args = null;
    };
    return throttled;
}

export const putElementBottom = (element) => {
    const cardLayer = document.querySelector("#card-layer")
    cardLayer.insertBefore(element, cardLayer.firstElementChild)
}

export const putElementTop = (element) => {
    const cardLayer = document.querySelector("#card-layer")
    if (cardLayer.lastElementChild !== element) {
        cardLayer.appendChild(element)
        element.click()
    }
}

export const flipElement = (element, documentRect) => {
    const elementRect = element.getBoundingClientRect()
    element.style.left = documentRect.width - elementRect.x + "px"
    element.style.top = documentRect.height - elementRect.y + "px"
    return element
}
