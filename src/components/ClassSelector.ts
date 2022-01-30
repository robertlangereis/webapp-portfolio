export const classSelector = (classes: any, inputActive:string, element: string): string => {
    const classNames = []
    switch (element) {
        case 'about':
            if (inputActive === 'aboutActive')
                classNames.push(classes.aboutElements)
            else classNames.push(classes.about)
            break
        case 'Robert':
            if (inputActive === 'aboutActive')
                classNames.push(classes.aboutElements)
            if (inputActive === 'skillsActive') classNames.push(classes.skills)
            if (inputActive === 'contactActive')
                classNames.push(classes.fadeOut, classes.hide)
            else classNames.push(classes.spanElement)
            break
        case 'letterS':
            if (inputActive === 'contactActive' || inputActive === 'aboutActive')
                classNames.push(classes.hide)
            if (inputActive === 'skillsActive') classNames.push(classes.skills)
            if (inputActive === 'contactActive') classNames.push(classes.hide)
            else classNames.push(classes.spanElement, classes.fadeIn)
            break
        case 'RobertS':
            if (inputActive === 'aboutActive') classNames.push(classes.hide)
            if (inputActive === 'skillsActive')
                classNames.push(classes.skills, classes.fadeIn)
            else classNames.push(classes.hide)
            break
        case 'ngerei':
            if (inputActive === 'aboutActive') classNames.push(classes.hide)
            if (inputActive === 'skillsActive') classNames.push(classes.none)
            if (inputActive === 'contactActive')
                classNames.push(classes.fadeOut, classes.hide)
            else classNames.push(classes.spanElement, classes.fadeIn)
            break
        case 'La':
            if (inputActive === 'aboutActive') classNames.push(classes.hide)
            if (inputActive === 'skillsActive') classNames.push(classes.none)
            if (inputActive === 'contactActive')
                classNames.push(classes.fadeIn, classes.aboutElements)
            else classNames.push(classes.spanElement, classes.fadeIn)
            break
        case 'skills':
            if (inputActive === 'skillsActive')
                classNames.push(classes.skills, classes.fadeIn)
            else classNames.push(classes.hideInstant)
            break
        case 'B':
            if (inputActive === 'contactActive')
                classNames.push(classes.fadeIn, classes.aboutElements)
            else classNames.push(classes.hide)
            break
        case 'BLa':
            if (inputActive === 'contactActive') classNames.push(classes.fadeIn)
            else classNames.push(classes.hide)
            break
        case 'move':
            if (inputActive === 'skillsActive') classNames.push(classes.marginLeft)
            break
        case '<':
            if (inputActive === 'codeActive')
                classNames.push(classes.fadeIn, classes.aboutElements)
            if (inputActive === 'skillsActive') classNames.push(classes.hideInstant)
            else classNames.push(classes.hide)
            break
        case '/>':
            if (inputActive === 'codeActive')
                classNames.push(classes.fadeIn, classes.aboutElements)
            if (inputActive === 'skillsActive')
                classNames.push(classes.hideInstant) && classNames.push(classes.none)
            else classNames.push(classes.hide)
            break
        default:
            break
    }
    return classNames.join(' ')
}